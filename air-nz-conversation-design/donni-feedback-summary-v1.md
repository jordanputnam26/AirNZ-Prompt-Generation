# Donni Feedback Summary v1

This summary captures the feedback from Donni's June 5 session.

This session was run against the latest prompt and Service Agent blocks, so the comments here are mostly about where the current design is still falling short rather than broad foundational problems.

## Main themes

- The overall tone is improving and much of the current output passes.
- The domestic meal-limit flow is still the hardest one to get right.
- Oscar still needs a cleaner balance between softening and over-explaining.
- Proactivity should reduce effort for Customers, not create more work for them.
- Claim flows should shift effort away from the customer and onto Oscar where possible.
- Handover flows need to clearly tell the customer what to do next, not just describe an internal path.

## Key feedback by area

## 1. Domestic meal-limit flow is still a softening problem

### What Donni said

- The first domestic message was broadly fine.
- The follow-up `it's only 90 mins` response still felt over-explainy.
- Without some softening, the reply goes blunt.
- When the customer says `that's pretty annoying`, Oscar was still blocking with the same point in different words rather than really recognising the frustration.

### What this means

The domestic limit flow still needs:

- less explanation
- more natural softening
- better frustration handling without apologising

### Possible changes

`Service Agent block`
- Keep the operational truth simple:
  - no meal service on domestic flights
  - no meal request option
- In the follow-up clarification turn, keep the block focused on:
  - one reason
  - one short explanation
  - no replay of the whole rule

`System Prompt`
- Strengthen the existing soft-clarification rule so correction turns sound less rebuttal-heavy.
- Let Oscar recognise frustration briefly before closing, without defaulting to apology.

## 2. Repetition is still a risk in the domestic flow

### What Donni said

- Oscar can sound like it is blocking with the same words in different ways.

### What this means

We still need to distinguish between:

- useful restatement
- robotic repetition

### Possible changes

`System Prompt`
- Keep the rule that allows one purposeful restatement when the customer keeps pushing.
- Tighten the instruction that the repeated line must add either:
  - useful clarity
  - a practical alternative

`Service Agent block`
- In the final frustrated turn, avoid carrying repeated versions of the same limit.

## 3. Positive long-haul meal flow is landing well

### What Donni said

- The Tokyo first-trip acknowledgement worked well.
- The meal-option flow felt straightforward and low-fluff.
- The progression and action language felt down to earth.
- She liked the general personality and said it felt much better than the current thank-you agent.

### Watch-out

- On the lacto-ovo explanation, Donni warned against drifting too far into advice.
- Restating what the customer has said is fine.
- Taking the lead too strongly on what they should choose is the risk.

### Possible changes

`Service Agent block`
- Keep the proactive option-surfacing.
- Keep the explanation practical.
- Avoid blocks that push Oscar into advisory language like `this is definitely right for you`.

## 4. Emoji use is still positive, but input/output policy needs thought

### What Donni said

- She liked the emoji use.
- But she raised a policy concern:
  - if Oscar uses emoji on output
  - how should the product handle emoji on customer input?

### What this means

This is not mainly a tone problem now. It is a design/policy alignment problem.

### Possible changes

`System Prompt`
- No immediate change needed if we keep output emoji tightly controlled.

`Open question`
- Decide whether the product stance is:
  - output emoji only
  - input and output emoji
  - or a narrower approved-emojis model

## 5. Customers should not have to dig around for claim details if Oscar already knows enough

### What Donni said

- The ideal direction is to do less asking Customers to go and find things for us.
- If Oscar can identify likely bookings or recent flights, it should offer that instead of sending the customer away to dig up details.
- Her preference was to work with the simplest thing the customer can provide, such as a travel date, and then let Oscar play back likely options.
- Showing a short list of likely recent flights would be more helpful than asking for lots of identifiers.

### What this means

This is a major effort-shift point:

- less customer effort
- more system-assisted narrowing

### Possible changes

`Service Agent block`
- Where the service layer can support it, restructure claim flows to:
  - ask for the simplest narrowing detail first
  - then surface likely flights or bookings for selection
- Avoid defaulting straight to:
  - booking reference
  - ticket number
  - multiple identifiers

`Flow design`
- Consider a future claim path like:
  - customer gives rough time or route
  - Oscar shows recent likely flights
  - customer selects one
  - Oscar proceeds

## 6. `Retro claim` may be internal language

### What Donni said

- `Retro claim` might not be the right customer-facing term.
- `Airpoints claim` may be safer.

### What this means

Some claim language may still be too internal even when the flow is structurally correct.

### Possible changes

`System Prompt`
- Review whether `retro claim` should be blocked as internal wording unless the source explicitly requires it.

`Service Agent block`
- Prefer customer-facing wording like:
  - `Airpoints claim`
  - `claim for missing Airpoints`

## 7. Claim closes still need better expectation-setting

### What Donni said

- The claim submission close still feels open-ended.
- If timeframes are hard to keep accurate, it may be better to give the customer another next step, such as:
  - checking their statement
  - watching for an update
  - being told how they will know if it is resolved

### What this means

We still need better progression-to-resolution language after submission.

### Possible changes

`Service Agent block`
- Where firm timeframes are not available, include one grounded expectation such as:
  - where the customer can check progress
  - whether they will receive an update
  - what visible signal tells them it is done

## 8. Claim openers must not sound more certain than the system really is

### What Donni said

- In the enthusiastic return-leg claim flow, we should not say things as if we have already confirmed the missing return leg if the system has not actually checked it yet.
- Better to acknowledge what the customer reported and say we can look into it.

### What this means

This reinforces the same early-certainty risk already seen in earlier sessions.

### Possible changes

`Service Agent block`
- Keep claim openers in customer-reported language until the system has actually checked eligibility or status.

`System Prompt`
- Keep the current rule against turning customer-reported information into a confirmed finding unless the block explicitly says it has been checked.

## 9. General further-help closes should stay broad, not capability-heavy

### What Donni said

- Be careful with lines like:
  - `if there's anything else on the booking you want me to check`
- That may overpromise the range of things Oscar can do.
- A safer close is something more general:
  - `Is there anything else you need help with?`

### What this means

Our proactive close pattern needs to stay helpful without implying too much capability.

### Possible changes

`System Prompt`
- Prefer general further-help offers unless the Service Agent block clearly supports a narrower capability-based close.

`Service Agent block`
- Avoid closes that imply Oscar can help with a broad set of booking tasks unless that capability is real.

## 10. Partner-airline handover needs a concrete next step

### What Donni said

- Saying there is a form is not enough if the customer still does not know where to go.
- Either:
  - provide the form link directly
  - or actively connect the customer to someone who can help them get there

### What this means

The current flow still risks describing a resolution path rather than actually moving the customer into it.

### Possible changes

`Service Agent block`
- In partner-airline claim scenarios:
  - provide the form directly in the first response
  - or explicitly hand the customer to a Customer Care team member while also giving the form path

## Suggested implementation priorities

1. Tighten the domestic meal-limit follow-up and frustration turns so they feel less blunt and less repetitive.
2. Rework claim flows to reduce customer effort wherever service data can support it.
3. Improve post-submission expectation-setting for Airpoints claims without relying on unstable timeframes.
4. Replace any lingering internal claim language like `retro claim` where it is customer-facing.
5. Make partner-airline handovers more actionable by giving the form or a direct path, not just describing it.

## Notes for later

- Emoji input/output policy needs a broader product decision.
- Recent-flight selection or booking-playback is likely a bigger service-design improvement than a prompt-only improvement.
