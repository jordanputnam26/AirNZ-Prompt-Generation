# Jane Feedback Summary v1

This summary captures the feedback from Jane's June 5 session.

This session used the most up-to-date Oscar rewriter system prompt and current Service Agent blocks, so the points below are focused on what we can still improve from here.

## Main takeaways

- Oscar still needs to feel more proactive at the right moments.
- Successful closes should usually offer further help.
- Positive conversations could show more personality.
- The missing Airpoints claim journeys need clearer emotional separation between frustrated and enthusiastic states.
- Domestic meal-limit conversations still need a better balance of clarity, alternatives, and softening.
- Handover language should sound more customer-facing and less internal.
- Claim flows should check what is already known before asking the customer for more.

## System Prompt changes

### 1. Stronger proactive closes on successful completions

Jane said human agents usually finish with some version of:

`Is there anything else I can help you with?`

This should be a broader pattern on successful, low-friction completions.

Recommended change:

- Keep the current narrow prompt rule that allows a light offer of further help on successful closes.
- Pressure-test it against:
  - successful Airpoints claim closes
  - successful meal-request closes
  - positive long-haul conversations

### 2. More personality in positive conversations

Jane felt Oscar's personality was still not coming through enough in upbeat flows, especially in sign-off moments.

She specifically called out:

- emoji use is common in human-agent conversations
- plane emoji is familiar and usable
- positive closes could feel warmer

Recommended change:

- Keep the current positive-sign-off emoji rule.
- Test whether Oscar is now actually using the plane emoji in upbeat travel sign-offs.
- If not, strengthen the rule again or support it in the Service Agent block for specific positive closes.

### 3. Acknowledge customer excitement more often

In the Tokyo meal-request flow, Jane wanted Oscar to pick up on cues like:

- first trip to Tokyo
- first long-haul flight

Recommended change:

- In positive or excited travel moments, Oscar should lightly acknowledge the milestone before moving on.
- This should stay brief and natural, not become over-friendly.

### 4. Use names when the customer is authenticated

Jane's preference was that if the customer is authenticated, greeting them by name is a good thing.

This creates some tension with the current direction we have been taking, which has been:

- avoid overusing the customer's name
- prefer `you` / `your` when Oscar is already clearly speaking directly to them

Recommended change:

- Keep the current `you` / `your` rule for mid-conversation turns.
- Consider a narrower prompt preference for first-contact authenticated greetings only:
  - use the customer's name once in the greeting if it feels natural
  - do not keep repeating it afterwards

### 5. Allow purposeful repetition when the customer keeps pushing

Jane made a useful nuance point in the domestic meal-limit flow:

- repetition is usually bad
- but if the customer keeps insisting, some repetition is acceptable if it helps shut the conversation down clearly and politely

Recommended change:

- Add or refine a prompt rule so Oscar can restate the supported limit once more if the customer keeps pushing, as long as:
  - the wording is not robotic
  - the repeated line adds a practical alternative or useful clarity

## Service Agent block changes

### 1. Claim flows should check what is already known first

Jane's instinct was that human agents would first check whether:

- the claim has already been made
- the points are already there and the customer missed them
- the issue is already underway

before asking for more information or pushing the customer into a fresh claim flow.

Recommended change:

- Where the service layer can support it, check existing claim state first.
- If that is not possible yet, keep Oscar in an `I can look into it` mode until the details are checked.
- Do not act as though a new claim is automatically the next step.

### 2. Give timelines when they are genuinely available

Jane repeatedly said timelines are useful, especially for follow-up scenarios.

Her preference was not for invented timeframes, but for grounded ones where the business already has a current range.

Recommended change:

- If a current timeline is available from source systems or the knowledge base, pass it through the Service Agent block.
- Use this especially in:
  - claim processing closes
  - refund-style waits
  - investigation flows

### 3. Remove customer-facing transfer summaries

Jane questioned whether the customer needs to see a transfer summary at all.

Her view was that this is more likely to be:

- an internal note
- something passed to the next agent

than customer-facing copy.

Recommended change:

- Remove or reduce customer-facing transfer summaries in handover scenarios.
- Keep the continuity note for the receiving team, not necessarily for the customer.

### 4. Avoid the word `handover` in customer-facing language

Jane said `handover` feels internal.

A more natural customer-facing alternative is closer to:

- `I'll pass you to one of our agents`
- `I'll pass this to a Customer Care team member`

Recommended change:

- Keep `handover` as an internal flow label only.
- In customer-facing copy, use simpler pass-across language.

### 5. Missed meal-cutoff flows should give a practical alternative

For the Singapore meal-cutoff example, Jane thought the basic refusal was fine, but wanted Oscar to also suggest what the customer can do instead.

The example she raised was:

- bring your own food

Recommended change:

- In cutoff or unavailable-meal scenarios, include one grounded practical alternative in the block.
- Do not stop at `sorry, we can't`.

### 6. Domestic meal-limit flows should include what is available

Jane felt the domestic meal-limit flow should not just shut the customer down.

At minimum, Oscar should say what is available onboard, for example:

- snacks
- tea
- coffee

She also raised a useful nuance:

- if the flight context supports a different onboard offering, Oscar should ideally be able to reflect that

Recommended change:

- Keep the domestic-flight rule clear.
- Also include one simple line about what is available onboard.
- Where service data allows, make onboard-offering guidance more flight-specific.

### 7. Partner-airline claim flows should provide the form immediately

Jane's view was that if the right path is a form, Oscar should probably just provide it in the first answer rather than asking:

- whether the customer wants it

Recommended change:

- In partner-airline claim scenarios, provide the form path immediately in the first supported response.
- Reduce avoidable back-and-forth.

## Scenario-specific notes

### Airpoints claim

- Keep the current `collect -> check -> diagnose -> ask to submit -> submit` structure.
- Improve the service-side ability to check whether something is already in progress.
- Add grounded timeframes when available.
- Keep the successful close proactive with `anything else I can help with`.
- Make the frustrated and enthusiastic claim sequences feel more distinct in customer tone, not just in business path.
- For the frustrated claim flow:
  - make the customer messages sound more clearly delayed, annoyed, or follow-up driven
  - make Oscar's tone steadier, slightly softer, and more expectation-setting
- For the enthusiastic claim flow:
  - make the customer messages sound more upbeat and relieved
  - let Oscar sound a little lighter and more energetic once the claim is confirmed as eligible

### Claim sequence design

- Rework the missing Airpoints test pack so the emotional state is legible from the first customer turn.
- Make sure the frustrated flow feels like a follow-up or unresolved issue, not just a neutral missing-points report.
- Make sure the enthusiastic flow feels like a quick, optimistic clean-up rather than just a second neutral claim.
- Keep the structural journey the same, but sharpen:
  - customer wording
  - Oscar's tone by moment
  - the contrast between the two closes

### Long-haul meal request

- Acknowledge milestone moments like first trip to Tokyo or first long-haul flight.
- Keep the proactive meal-option flow.
- End with a warmer close and optional further help.

### Domestic meal request

- Do not stop at a hard refusal.
- Mention what is available onboard.
- Use a softer second response when the customer pushes back.
- Repeat only if it helps, and preferably with a practical alternative.

### Handover / specialist flows

- Remove `handover` from customer-facing wording.
- Reduce or remove transfer summaries shown to the customer.
- Use simpler, more natural wording for specialist escalation.

## Suggested implementation order

1. Update the handover wording and remove customer-facing transfer summaries.
2. Tighten domestic meal-limit blocks so they include a practical alternative and onboard availability.
3. Rework the missing Airpoints sequences so the frustrated and enthusiastic variants feel more clearly distinct.
4. Add milestone acknowledgement to the positive long-haul meal flow.
5. Add grounded timeline fields to claim-close blocks where the service layer can support them.
6. Decide whether authenticated first-contact greetings should use the customer's name once by default.
