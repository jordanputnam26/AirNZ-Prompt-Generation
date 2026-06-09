# Airpoints Claim Test Sequence v1

This is the canonical Prompt Engine test sequence for Airpoints Claim.

It uses one scenario from each category:

- `Conv 3` — Frustrated
- `Conv 5` — Enthusiastic
- `Conv 8` — Handover

Each code block is designed to be pasted directly into Prompt Engine underneath the existing Oscar rewriter system prompt.

## Important note

The Airpoints workbook available here is a summary sheet, not the full turn-by-turn tabs.

That means these sequences are:

- grounded in the scenario titles, triggers, and business rules from the summary
- shaped to be believable live-demo inputs
- inferred rather than copied from a detailed conversation sheet

## 1. Frustrated — Conv 3

- Conversation: `Standard Airpoints claim — flown 3 weeks ago`
- Trigger: `Customer flew Air NZ 3 weeks ago, points did not credit automatically.`

### Turn 1

```text
Latest Customer Message: i flew air nz three weeks ago and the points still haven't shown up

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_confirm
exit_point: EXIT_1_STANDARD_RETRO_CLAIM_START
customer_facing_task: Acknowledge the missing points, surface a short list of likely Air New Zealand flights from around 3 weeks ago, and ask the customer to choose the right one.
facts_to_include:
- travel happened 3 weeks ago
- likely option 1: NZ101 on 2026-05-10, Auckland to Sydney
- likely option 2: NZ214 on 2026-05-12, Auckland to Wellington
- likely option 3: NZ675 on 2026-05-16, Queenstown to Auckland
next_action:
- say you have pulled up a few likely recent Air New Zealand flights from around that time
- present the options clearly as a short list
- ask the customer to choose the right flight
- keep the shortlist easy to scan
- do not imply a claim is already lodged, approved, or definitely the next step
protected_values:
- 3 weeks ago
- NZ101
- NZ214
- NZ675
- 2026-05-10
- 2026-05-12
- 2026-05-16
- Auckland
- Sydney
- Wellington
- Queenstown
required_concepts:
- likely recent flights surfaced
- customer selects one
- no full identifier hunt yet
do_not_include:
- internal service labels
- invented rejection language
- unnecessary jargon
- early-success language
- claim-underway language before the details are checked
- request for booking reference or ticket number before selection
```

### Turn 2

```text
Latest Customer Message: nz101 on 2026-05-10 is the right one

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_2_CONFIRM_SELECTED_FLIGHT_AND_CHECK
customer_facing_task: Confirm that the selected flight is enough to check the case properly and keep the conversation moving.
facts_to_include:
- selected flight: NZ101 on 2026-05-10, Auckland to Sydney
- that is enough detail to check the missing Airpoints properly
next_action:
- acknowledge the selected flight clearly
- say that is enough to check now
- keep the momentum calm and efficient
protected_values:
- NZ101
- 2026-05-10
- Auckland
- Sydney
required_concepts:
- selected flight confirmed
- enough information to check
do_not_include:
- internal service labels
- invented status outcome
- request for more identifiers unless something is genuinely missing
```

### Turn 3

```text
Latest Customer Message: okay, thanks

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_confirm
exit_point: EXIT_3_STANDARD_RETRO_CLAIM_ELIGIBLE
customer_facing_task: Confirm that the selected flight looks eligible for an Airpoints™ claim and ask whether the customer wants you to submit it.
facts_to_include:
- based on the details provided, this flight looks eligible for an Airpoints™ claim
- Oscar can submit the claim from here if the customer wants
next_action:
- say the flight looks eligible
- ask directly whether the customer wants you to submit the claim
- keep the question clear and low-pressure
protected_values:
- NZ101
- 2026-05-10
- Auckland
- Sydney
required_concepts:
- eligible for claim
- customer choice to submit
do_not_include:
- internal service labels
- invented approval guarantees
- unnecessary recap
```

### Turn 4

```text
Latest Customer Message: yes, please go ahead

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_4_SUBMIT_STANDARD_RETRO_CLAIM
customer_facing_task: Confirm that the Airpoints claim has been submitted, set a grounded expectation for what happens next, and close with a light offer of further help.
facts_to_include:
- the Airpoints claim has been submitted
- the claim is now with the Airpoints team for processing
- no more details are needed from the customer right now
- the customer can keep an eye on their Airpoints activity for the missing points to appear
next_action:
- confirm the submission clearly
- explain what happens next in plain language
- give one grounded way to check progress without inventing a fixed timeframe
- offer brief further help without reopening the claim flow
- do not re-list the full claim details unless clarity is needed
protected_values:
- NZ101
- 2026-05-10
- Auckland
- Sydney
required_concepts:
- claim submitted
- now with the team for processing
- nothing else needed right now
- one grounded expectation for where the outcome will show up
- further help lightly offered
do_not_include:
- internal service labels
- invented processing guarantees
- invented extra contact paths
- pushy or overly scripted closing language
```

## 2. Enthusiastic — Conv 5

- Conversation: `Quick Airpoints claim — Air NZ long-haul`
- Trigger: `Standard Air NZ AKL-Vancouver return; points missed on return leg only.`

### Turn 1

```text
Latest Customer Message: my return leg from vancouver didn't credit but the outbound did

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_missing
exit_point: EXIT_1_CLEAN_RETRO_CLAIM_START
customer_facing_task: Acknowledge what the customer has described about the missing return leg, and collect the details needed to look into it properly before moving to a claim.
facts_to_include:
- the customer says the return leg did not credit
- the simplest return-leg detail is enough to start
- a booking reference can look like ABC123
- an e-ticket number will usually start with 086...
- if needed later, an Airpoints™ number can look like a number starting with 12...
next_action:
- keep the response efficient and positive
- acknowledge the issue as described by the customer
- explain what kind of detail helps
- give a useful example of the identifier shape
- ask for the simplest useful return-leg detail first
- make clear the examples are there to help recognise the right detail
- avoid a long checklist unless it is genuinely needed
- do not imply the claim is already accepted or definitely the next step
protected_values:
- return leg
- missing
required_concepts:
- return-leg issue acknowledged as customer-reported
- examples help the customer recognise the right detail
- collect details before deciding the next step
do_not_include:
- internal service labels
- unnecessary policy explanation
- invented delay
- premature success language
```

### Turn 2

```text
Latest Customer Message: yep it's the yvr to akl return on 2026-10-22. booking XYZ789 and the ticket number is 0865555555555

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_2_ACKNOWLEDGE_CLEAN_RETRO_DETAILS
customer_facing_task: Acknowledge the return-leg details, confirm you have what you need to check the missing points, and keep the conversation moving without a redundant confirmation step.
facts_to_include:
- booking reference: XYZ789
- ticket number: 0865555555555
- route: YVR to AKL return
- flight date: 2026-10-22
- missing sector: return leg
next_action:
- acknowledge that the details are in
- say you have what you need to check now
- do not ask the customer to confirm details they just typed unless something is unclear
protected_values:
- XYZ789
- 0865555555555
- AKL
- YVR
- 2026-10-22
- return leg
required_concepts:
- details received
- enough information to check
- no extra confirmation step
do_not_include:
- internal service labels
- invented credit timing if not supplied
- extra policy material
- confirmation for confirmation's sake
```

### Turn 3

```text
Latest Customer Message: awesome, thanks

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_confirm
exit_point: EXIT_3_CLEAN_RETRO_CLAIM_ELIGIBLE
customer_facing_task: Confirm that the missing return leg looks eligible for an Airpoints™ claim and ask whether the customer wants you to submit it.
facts_to_include:
- based on the details provided, the missing return leg looks eligible for an Airpoints™ claim
- Oscar can submit the claim from here if the customer wants
next_action:
- say the missing return leg looks eligible
- ask directly whether the customer wants you to submit the claim
- keep the question positive, clear, and easy to answer
protected_values:
- XYZ789
- 0865555555555
- AKL
- YVR
- return leg
required_concepts:
- eligible for claim
- customer choice to submit
do_not_include:
- internal service labels
- invented approval guarantees
- overlong recap
```

### Turn 4

```text
Latest Customer Message: yes please!!

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_4_SUBMIT_CLEAN_RETRO_CLAIM
customer_facing_task: Confirm that the Airpoints claim for the missing return leg has been submitted cleanly, explain what happens next, and close with a light offer of further help.
facts_to_include:
- the Airpoints claim for the missing return leg has been submitted
- the claim is now with the Airpoints team for processing
- no further customer action is needed right now
- the customer can keep an eye on their Airpoints activity for the missing points to appear
next_action:
- confirm submission clearly
- explain the next step briefly and keep the tone positive and concise
- give one grounded way to check progress without inventing a fixed timeframe
- offer brief further help without reopening the claim flow
- do not re-list the claim details unless clarity is needed
protected_values:
- XYZ789
- 0865555555555
- AKL
- YVR
- return leg
required_concepts:
- claim submitted successfully
- now with the team for processing
- no further customer action needed right now
- one grounded expectation for where the outcome will show up
- further help lightly offered
do_not_include:
- internal service labels
- invented extra requirements
- overlong recap
- pushy or overly scripted closing language
```

## 3. Handover — Conv 8

- Conversation: `Star Alliance partner airline claim`
- Trigger: `Customer flew Lufthansa and wants the points credited to Air NZ Airpoints.`

### Turn 1

```text
Latest Customer Message: i flew lufthansa and want the points added to my air nz account

Service Contract:

service_type: partner_airline_retro_claim
response_kind: handover
exit_point: EXIT_1_PARTNER_AIRLINE_SPECIALIST_HANDOVER
customer_facing_task: Explain that this partner-airline Airpoints claim cannot be completed here, and clearly tell the customer that the next step is to use the Airpoints support request form.
facts_to_include:
- Lufthansa is a partner-airline claim case
- the Airpoints support team request form is required
- once lodged, partner claims can take 3 or more weeks
next_action:
- explain the specialist path in customer-relevant language
- make the next step explicit
- hand over cleanly
protected_values:
- Lufthansa
- Airpoints support team request form
- 3 or more weeks
required_concepts:
- not directly addable here
- specialist support path required
do_not_include:
- internal service labels
- false promise of direct addition
- invented shortcut
```

### Turn 2

```text
Latest Customer Message: can you just do it for me now

Service Contract:

service_type: partner_airline_retro_claim
response_kind: handover
exit_point: EXIT_2_RESTATE_PARTNER_HANDOVER
customer_facing_task: Restate the boundary clearly, keep the handover path simple, and point back to the request form as the next step.
facts_to_include:
- this cannot be completed directly here
- the Airpoints support team request form is still the correct path
next_action:
- hold the boundary
- point back to the correct specialist path
- make the required next step explicit again
- do not reopen direct execution
protected_values:
- Airpoints support team request form
- cannot be completed here
required_concepts:
- no direct processing path
- handover remains the right next step
do_not_include:
- internal service labels
- invented manual workaround
- over-apology
- defensive tone
```

## Suggested call flow

If you are walking the Air NZ team through this sequence, I would run the three conversations in this order:

1. `Conv 5` to show the clean happy path
2. `Conv 3` to show the standard retro-claim path under mild frustration
3. `Conv 8` to show the specialist handover boundary

That gives you:

- one polished Airpoints happy path
- one grounded claim-resolution path
- one clean handover path
