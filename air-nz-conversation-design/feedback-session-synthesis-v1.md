# feedback-session-synthesis-v1.md

## Status

Draft v1.

This is a synthesis of the Oscar feedback sessions run with Ben, Terri, and Lauren on 3 June 2026, plus the exported conversation JSONs used during those sessions.

## Purpose

Turn the review sessions into a usable decision document that:

- identifies the main experience issues
- separates likely `Service Agent block` issues from `System Prompt` issues
- shows where the conversation flow needs to change, noting that in this implementation most of those changes are being expressed through the Service Agent block
- gives a practical sequence for the next round of iteration

## Source set

This synthesis is based on:

- Ben feedback transcript
- Terri feedback transcript
- Lauren feedback transcript
- Ben conversation JSONs for meal-request scenarios
- Terri conversation JSONs for meal-request and Airpoints claim scenarios
- the current `rewriter-prompt-v3.md` and `rewriter-prompt-v4.md` drafts

## High-confidence read

The feedback is converging on a clear pattern.

Oscar is not mainly failing because the voice is wildly wrong. The stronger issue is that the current system is mixing three concerns that should be tuned separately:

- the System Prompt layer that controls Oscar's voice and behaviour rules
- the Service Agent block that tells Oscar what this turn is trying to do
- the conversation-flow design choices about what to ask, when to confirm, when to hand over, and when to proactively move forward

In this prompt-engine setup, that third category is also being carried mostly by the Service Agent block. The System Prompt acts as the behavioural constraint layer over the top.

That is why some messages sound close to the target but still feel off in use. The wording may be almost right, while the underlying move is wrong, repeated, too certain, or timed badly.

One of the most important tonal principles to carry forward from Ben's review is that Oscar should not aim for one fixed level of warmth. The target is a tone that flexes by moment:

- softer when the customer has hit a limit, is frustrated, or needs a boundary delivered without friction
- more direct, confident, and proactive when the path is clear and Oscar should create momentum

This is not a contradiction. It is the core balancing act in the voice.

## Findings

### 1. The current rewriter scope is structurally mismatched to the scenarios being tested

**What is happening**

The rewriter prompt used in the exported JSON conversations is explicitly scoped to `Claim Missing Airpoints`, but it is also being used to test meal-request scenarios.

**Why it matters**

This makes prompt tuning noisy. Some failures may look like tone problems when they are really architecture problems. It also increases the risk that claim-specific assumptions bleed into SSR flows.

**Evidence**

- The current `rewriter-prompt-v3.md` and `rewriter-prompt-v4.md` both say the prompt is for `Claim Missing Airpoints`.
- The meal-request JSON exports include a system prompt that still says the job is to rewrite `missing Airpoints from a flight` into Oscar language.

**Likely owner**

`Service Agent block` and `System Prompt`

**Recommendation**

- Stop treating one scenario-specific rewriter as a reusable test harness for unrelated journeys.
- Either create separate rewriters for different service journeys, or create one rewriter that is genuinely generic and gets the journey type from the Service Agent block.
- Do not do another major tone pass until this scope question is resolved.

### 2. Oscar is too certain too early in claim flows

**What is happening**

In the claim examples, Oscar often implies that the answer is already known or that a claim will proceed before enough detail has been gathered.

**Why it matters**

This creates a misleading sense of progress. It is especially risky in claims where the customer may already have submitted something, may be ineligible, or may need a different route.

**Evidence**

- Terri repeatedly pushed for a neutral opener: look into it first, then diagnose.
- Terri flagged that many customers have already claimed or have already been declined.
- The Terri JSON claim flows open with lines like `this is still inside the normal Airpoints claim window, so we can get the claim underway`.

**Likely owner**

Mostly `Service Agent block`, with some `System Prompt` reinforcement

**Recommendation**

- In claim flows, default to `I can take a look` rather than `we can get the claim underway`.
- Add an explicit check for prior customer action where relevant.
- Prevent the rewriter from converting tentative service outcomes into confident forward motion before diagnosis is complete.

### 3. Repetition and over-confirmation are one of the clearest quality problems

**What is happening**

Oscar repeats the same explanation, repeats confirmation steps, restates already-known details, and sometimes re-greets mid-conversation.

**Why it matters**

This makes Oscar feel effortful, padded, and less capable. Multiple reviewers picked it up quickly across different scenario types.

**Evidence**

- Ben called out answering the same question five times in slightly different ways.
- Terri said one confirmation per conversation is often enough, and that repeated bullet confirmations feel effortful.
- Lauren and Jordan both noted that handover and follow-up turns were repeating reasoning already given.
- Terri’s vegetarian confirmation flow includes a repeated `Kia ora` when offering the return-leg meal.

**Likely owner**

`System Prompt` and `Service Agent block`

**Recommendation**

- Add a stronger anti-repetition rule at the rewriter layer: do not restate a reason, detail set, or greeting unless the current turn genuinely needs it.
- Limit confirmation to one substantive confirmation unless customer ambiguity or risk justifies a second.
- Prefer a lighter sentence confirmation over a repeated bullet block where possible.

### 4. Bad-news empathy is still miscalibrated

**What is happening**

Oscar is trying to sound considerate, but several phrasings land as fake empathy, weak framing, or mild patronising.

**Common failure forms**

- `disappointing`
- `nuisance`
- `yes, that's the reason`
- `your best practical option`
- explanations that sound like Oscar is explaining away the limit rather than owning it cleanly

**Why it matters**

This is one of the strongest perception risks. The issue is not just word choice. It is the combination of:

- the wrong acknowledgement
- at the wrong moment
- with too much explanation

**Evidence**

- Ben said `disappointing` is still showing up despite attempts to tune it out.
- Terri said their human teams would not use `disappointing` here, and would instead use a light apology at the right frustration point.
- Lauren said `fair enough` may be Kiwi but could feel dismissive, and that the better move is acknowledgement without pretending to feel what the customer feels.

**Likely owner**

Mostly `System Prompt`

**Recommendation**

- Replace general empathy guidance with narrower rules tied to specific moments.
- For constrained or negative outcomes, prefer:
  - brief acknowledgement
  - plain reason
  - next valid step
- Do not let Oscar reach for sympathy language by default.
- Decide explicitly whether apology is allowed in each scenario family, rather than carrying one global apology rule.

### 4A. Ben's tonality point should become an explicit design rule

**What is happening**

The current synthesis implies this balance in a few places, but it does not yet name it clearly enough as a core rule for Oscar's voice.

**Why it matters**

Ben's most important tonal point was not simply `be softer` or `be more direct`. It was that Oscar needs to flex correctly by moment:

- when delivering a constraint, Oscar should stay warm enough not to sound harsh, patronising, or triggering
- when the route is clear, Oscar should stop circling and move the customer forward with confidence

This is the difference between `softness` and `woolliness`, and between `directness` and `abruptness`.

**Evidence**

- Ben repeatedly pushed for `confidence`, `momentum`, and being `to the point`.
- Ben also explicitly said Oscar should not be harsh, and that some phrasing needed a little more warmth.
- Ben's concern with lines like `your best practical option` was not that they were too direct in principle, but that the tone tipped into something patronising in context.

**Likely owner**

Mostly `System Prompt`, with support from `Service Agent block`

**Recommendation**

- Add a top-level tonal rule for calibrated directness:
  - clear path -> direct, confident, proactive
  - constrained path -> calm, warm, lightly softened, but still plain
- Test edits against both sides of the rule at once. A fix should not make Oscar gentler by making it vaguer, and should not make Oscar clearer by making it colder.

### 5. Oscar often explains the wrong thing, or too much of it

**What is happening**

In several flows Oscar includes details that are not the main answer, were not requested, or slightly distort the real reason.

**Examples**

- focusing on `special meal requests` rather than the simpler truth that there is no meal service on domestic flights
- mentioning gluten-free snacks when the customer asked about vegetarian meals
- using too much confirmation detail after the main answer is already clear

**Why it matters**

The tone can feel softer, but the service becomes less clear. This creates extra turns and increases the chance the customer argues with the wording rather than accepting the outcome.

**Evidence**

- Ben explicitly called out the gluten-free detail as drift.
- Terri said the clearer explanation is simply that domestic flights do not offer meal service.
- Terri also wanted Oscar to lead with the reason, not with a narrow SSR framing.

**Likely owner**

`Service Agent block` and `System Prompt`

**Recommendation**

- Tighten the Service Agent block so the primary reason is already clear before it reaches the final wording layer.
- Add a System Prompt rule to avoid expanding into adjacent detail unless it directly supports the current answer.
- Prefer the simplest grounded explanation over the most technically complete one.

### 6. Claim closings are not setting expectations clearly enough

**What is happening**

The claim flows often finish with a mechanically correct outcome but weak expectation-setting.

**Why it matters**

When a customer has already waited or followed up, `nothing else you need to do right now` is too thin. The close should reduce uncertainty, not just end the turn.

**Evidence**

- Terri repeatedly asked for clearer next-step wording, including likely timeframes and what happens if the claim is not processed.
- The claim JSONs close with generic language like `the next step is just to wait` and `Nothing else you need to do right now`.

**Likely owner**

`Service Agent block` plus `System Prompt`

**Recommendation**

- For claim submissions, define a standard expectation pattern:
  - what has been done
  - what happens next
  - approximate timeframe if supported
  - whether the customer needs to do anything else
  - what happens if the expected outcome does not land
- Remove repeated operational details once confirmation has already happened.

### 7. Handover language is directionally right, but still too mechanical or under-explained

**What is happening**

Oscar is often able to state that a handover is happening, but the wording can still sound procedural, abrupt, or insufficiently justified.

**Why it matters**

Handover is a high-stakes moment. If it feels like a brush-off, the customer will blame the tone even when the route itself is correct.

**Evidence**

- Terri wanted `specialist team` or `Customer Care teammate` language in the right contexts, rather than colder labels like `support team form`.
- Lauren preferred softer offer phrasing like `here's what we could do for you`, rather than a strong `you've got two options`.
- Lauren and Terri both liked preserving continuity and telling the customer they will not need to restate the request.

**Likely owner**

`Service Agent block` and `System Prompt`

**Recommendation**

- Define a handover pattern library by handover type:
  - specialist-team handoff
  - customer-care handoff
  - self-service external form
- Make the reason for handoff explicit and customer-relevant.
- Preserve work already done.
- Phrase options as help paths rather than hard choices where possible.

### 8. Privacy handling around other passengers needs a firmer rule

**What is happening**

The family meal flow surfaces passenger names early, before the customer has disclosed them in the conversation.

**Why it matters**

This is one of the clearest policy and trust risks in the review set. Multiple reviewers converged on it.

**Evidence**

- Terri said human agents would not normally confirm all passenger names back at that point.
- Terri suggested a safer pattern: say there are four passengers on the booking and ask the customer to identify who the request is for.
- Jordan noted the same concern with Ben.

**Likely owner**

Mostly `Service Agent block`, with a defensive `System Prompt` rule as backup

**Recommendation**

- Do not surface other passenger names unless:
  - the customer has already disclosed them, or
  - the authority check and business rules explicitly allow it
- Where possible, prompt the customer to name the person or people they want changes applied to.

### 9. Successful flows need more proactive sequencing and fewer avoidable turns

**What is happening**

Some of the positive flows are polite but still make the customer do extra work.

**Examples**

- not offering the return leg early enough in meal flows
- asking for meal preference without first showing the available options
- confirming each step in a way that creates another turn when the next likely action is already visible

**Why it matters**

This is less a tone problem than a service-flow problem. Oscar can sound right and still feel inefficient.

**Evidence**

- Lauren explicitly wanted Oscar to ask about the return leg earlier.
- Terri said the options could be listed earlier to save back and forth.
- Several reviewers reacted positively whenever the message showed momentum and anticipated the next need.

**Likely owner**

Mostly `Service Agent block`, with some `System Prompt` support where the prompt should encourage proactive moves

**Recommendation**

- Redesign successful service flows around likely next actions, not just current-turn answers.
- Use context already visible in the booking to reduce avoidable back and forth.
- Test whether proactive offers improve completion without creating incorrect assumptions.

### 10. Brand expression should be more deliberate, not more decorative

**What is happening**

Reviewers do want more warmth and more Air New Zealand feel, but not through generic friendliness. They want targeted brand moments.

**Where it seems wanted**

- sign-offs on exciting or positive journeys
- small celebratory closes on successful completion
- controlled use of exclamation, emoji, and formatting where brand guidance permits

**Where it is not wanted**

- all the time
- as a substitute for clarity
- in frustrated or constrained moments

**Evidence**

- Terri supported controlled emoji and exclamation use for specific upbeat moments.
- Lauren wanted more small brand moments in successful flows.
- Ben pushed strongly for confidence, warmth, and momentum rather than extra language for its own sake.

**Likely owner**

Mostly `System Prompt`, with brand-governance input

**Recommendation**

- Treat brand expression as scenario-sensitive.
- Add explicit guidance for positive closes and celebratory success moments.
- Only add emoji or extra punctuation once the approved brand set is confirmed.

### 11. Oscar is sometimes promising help beyond what the current capability really supports

**What is happening**

Phrases like `If there’s anything else on the booking you want me to check, I can help with that` are broader than the current demonstrated service capability.

**Why it matters**

This creates a false expectation and makes the agent feel inconsistent when it cannot follow through.

**Evidence**

- Amy and Lauren both flagged that this phrasing should not appear unless the experience can actually support it.
- Jared also noted that `anything` is too broad unless the capability is real.

**Likely owner**

`Service Agent block` and `System Prompt`

**Recommendation**

- Narrow any forward-help language to the actual supported scope.
- If the system can only help with general information, say that.
- If the system can only continue through handover, say that.

## Recommended split of work

### System Prompt work

- add an explicit calibrated-tonality rule so Oscar can flex between warmth and momentum by moment
- remove fake-empathy defaults
- tighten acknowledgement rules for bad news
- strengthen anti-repetition and anti-re-greeting behaviour
- stop expanding into adjacent explanation not asked for
- narrow follow-on offer language to supported scope
- define positive close patterns separately from constrained or negative closes

### Service Agent block work

- fix the fact that the meal-request examples are still using a rewriter written for Claim Missing Airpoints
- prevent early certainty in claim flows
- improve expectation-setting fields for claim completion
- make handoff reason and type explicit in structured input
- pass enough prior-turn context for Oscar to avoid redundant confirmation
- redesign success flows to reduce avoidable turns
- decide where proactive next-step offers are beneficial
- decide the tipping points for handover versus continued virtual handling

### Shared design decisions

These are still design decisions for the team to make, but in this implementation they will mostly be applied through Service Agent block changes or System Prompt changes.

- define where brand moments belong and where they should be suppressed
- decide how broad Oscar is allowed to sound when offering more help
- decide which moments need softness and which should prioritise direct forward motion

## Suggested next sequence

1. Resolve the prompt setup first.
   - Decide whether Oscar is using one general rewriter or separate rewriters for different service journeys.

2. Fix the highest-risk Service Agent block behaviours next.
   - early certainty in claims
   - over-broad help offers
   - weak handoff framing

3. Then fix the remaining Service Agent block gaps.
   - privacy around passenger names
   - prior customer action state when available
   - authority or authentication state when it changes what Oscar can safely say

4. Then tune the System Prompt against a narrower set of explicit rules.
   - acknowledgement
   - repetition
   - bad-news phrasing
   - handover phrasing
   - positive closes

5. Then rerun a smaller evidence set.
   - one frustrated claim
   - one successful claim
   - one frustrated limitation flow
   - one successful SSR flow
   - one privacy-driven handover

## Open decisions still needing product or brand input

- Should Oscar apologise in constraint flows, and if so, in which exact moments?
- Should Oscar ever surface other passenger names before the customer does?
- What exact sign-off style is approved for upbeat travel moments?
- Which emojis, if any, are approved for Oscar and in which contexts?
- How broad is Oscar allowed to sound when offering further help?
- At what frustration point should handover be offered rather than inferred later?

## Bottom line

The feedback does not point to one single broken prompt rule. It points to a stack problem.

The voice model is close enough to be worth keeping, but it is currently being asked to compensate for:

- meal-request examples still using a rewriter written for Claim Missing Airpoints
- incomplete or over-strong Service Agent block framing
- weak handoff design
- over-confirming interaction patterns

Just as importantly, the next version of Oscar should not be tuned to one averaged tone. Ben's point is the right shorthand here: Oscar needs more softness in some moments, and more directness and proactive momentum in others.

In practical terms, most of the flow changes discussed in this synthesis should be treated as Service Agent block changes, because that is where the turn strategy is being expressed in the current setup. The rest should be treated as System Prompt changes.

If those layers are separated and tightened in order, the next round of Oscar outputs should improve quickly.
