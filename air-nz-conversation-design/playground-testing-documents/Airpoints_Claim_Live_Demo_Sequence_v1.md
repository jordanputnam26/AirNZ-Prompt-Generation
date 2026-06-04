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

- Conversation: `Standard retro claim — flown 3 weeks ago`
- Trigger: `Customer flew Air NZ 3 weeks ago, points did not credit automatically.`

### Turn 1

```text
Latest Customer Message: i flew air nz three weeks ago and the points still haven't shown up

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_missing
exit_point: EXIT_1_STANDARD_RETRO_CLAIM_START
customer_facing_task: Acknowledge that the travel appears to be inside the normal retro-claim window, and collect the key details needed to check and progress the claim cleanly.
facts_to_include:
- travel happened 3 weeks ago
- this looks like the standard retro-claim path
- a few claim details are needed before the claim can be submitted
next_action:
- say it looks like the claim is inside the normal window
- ask for the minimum useful claim details
- do not imply the claim is already lodged or approved
protected_values:
- 3 weeks ago
- claim window
required_concepts:
- likely inside the claim window
- collect details before submission
do_not_include:
- internal service labels
- invented rejection language
- unnecessary jargon
- early-success language
```

### Turn 2

```text
Latest Customer Message: booking ABC123, ticket 0861234567890, flight NZ101 on 2026-05-10

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_confirm
exit_point: EXIT_2_CONFIRM_STANDARD_RETRO_CLAIM
customer_facing_task: Confirm the collected claim details before submitting the retro claim.
facts_to_include:
- booking reference: ABC123
- ticket number: 0861234567890
- flight number: NZ101
- flight date: 2026-05-10
next_action:
- ask the customer to confirm the details
- yes submits the claim
- no means correct or cancel
protected_values:
- ABC123
- 0861234567890
- NZ101
- 2026-05-10
required_concepts:
- confirm before submission
- yes submits
- no corrects or cancels
do_not_include:
- internal service labels
- extra policy detail not supplied
- invented status outcome
```

### Turn 3

```text
Latest Customer Message: yes, that's right

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_3_SUBMIT_STANDARD_RETRO_CLAIM
customer_facing_task: Confirm that the retro claim has been submitted and set a grounded expectation for what happens next.
facts_to_include:
- the retro claim has been submitted
- the submitted details match the confirmed booking, ticket, flight number, and date
- the customer should now wait for the claim to be processed
next_action:
- confirm the submission clearly
- keep the next-step expectation simple and practical
protected_values:
- ABC123
- 0861234567890
- NZ101
- 2026-05-10
required_concepts:
- claim submitted
- waiting is now the next step
do_not_include:
- internal service labels
- invented processing guarantees
- invented extra contact paths
```

## 2. Enthusiastic — Conv 5

- Conversation: `Quick retro claim — Air NZ long-haul`
- Trigger: `Standard Air NZ AKL-Vancouver return; points missed on return leg only.`

### Turn 1

```text
Latest Customer Message: my return leg from vancouver didn't credit but the outbound did

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_missing
exit_point: EXIT_1_CLEAN_RETRO_CLAIM_START
customer_facing_task: Acknowledge that only the return leg appears to be missing, and collect the details needed to check and submit the claim quickly.
facts_to_include:
- only the return leg appears to be missing
- the likely path is a retro claim for that sector
- the required details are still needed before submission
next_action:
- keep the response efficient and positive
- ask only for the details needed to confirm and submit the claim
- do not imply the claim is already accepted
protected_values:
- return leg
- missing
required_concepts:
- only the return leg appears missing
- collect details before submission
do_not_include:
- internal service labels
- unnecessary policy explanation
- invented delay
- premature success language
```

### Turn 2

```text
Latest Customer Message: yep it's booking XYZ789, ticket 0865555555555, AKL to YVR return, missing the way back

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_confirm
exit_point: EXIT_2_CONFIRM_CLEAN_RETRO_CLAIM
customer_facing_task: Confirm the collected return-leg claim details before submission.
facts_to_include:
- booking reference: XYZ789
- ticket number: 0865555555555
- route: AKL to YVR return
- missing sector: return leg
next_action:
- ask for confirmation before submission
- yes submits the claim
- no means correct or cancel
protected_values:
- XYZ789
- 0865555555555
- AKL
- YVR
- return leg
required_concepts:
- details are being confirmed
- yes submits
- no corrects or cancels
do_not_include:
- internal service labels
- invented credit timing if not supplied
- extra policy material
```

### Turn 3

```text
Latest Customer Message: perfect, yes please

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_3_SUBMIT_CLEAN_RETRO_CLAIM
customer_facing_task: Confirm that the claim for the missing return leg has been submitted cleanly and close on a positive, low-friction note.
facts_to_include:
- the claim for the missing return leg has been submitted
- the submitted details match the confirmed booking and ticket
next_action:
- confirm submission clearly
- keep the tone positive and concise
protected_values:
- XYZ789
- 0865555555555
- AKL
- YVR
- return leg
required_concepts:
- claim submitted successfully
- no further customer action needed right now
do_not_include:
- internal service labels
- invented extra requirements
- overlong recap
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
customer_facing_task: Explain that partner-airline Airpoints claims need the Airpoints support team form and cannot be completed directly here.
facts_to_include:
- Lufthansa is a partner-airline claim case
- the Airpoints support team form is required
- partner claims can take 3 or more weeks
next_action:
- explain the specialist path
- hand over cleanly
protected_values:
- Lufthansa
- support team form
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
customer_facing_task: Restate the boundary clearly and keep the handover path simple.
facts_to_include:
- this cannot be completed directly here
- the support team form is still the correct path
next_action:
- hold the boundary
- do not reopen direct execution
protected_values:
- support team form
- cannot be completed here
required_concepts:
- no direct processing path
- handover remains the right next step
do_not_include:
- internal service labels
- invented manual workaround
- over-apology
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
