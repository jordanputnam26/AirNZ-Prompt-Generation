# Airpoints Claim Structured Test Sequences v1

This file turns the summary sheet into a staged Prompt Engine demo pack for Airpoints-related scenarios.

Each code block is designed to be pasted directly into Prompt Engine underneath the existing Oscar rewriter system prompt.

## Important note

This CSV is a **summary sheet**, not the full turn-by-turn conversation tabs.

That means the sequences below are:

- grounded in the scenario titles, triggers, and rules from the summary
- designed for live demo and prompt testing
- inferred rather than copied from the full conversation tabs

If you later provide the detailed conversation tabs, these can be tightened into more exact scripted sequences.

---

## 1. Hasn't flown yet — expecting points to appear

### Turn 1

```text
Latest Customer Message: i flew? well actually my trip is next week but i can't see any points yet

Service Contract:

service_type: points_credit_timing_info
response_kind: business_result
exit_point: EXIT_1_PRE_FLIGHT_EDUCATION
customer_facing_task: Explain that points do not credit before travel and set expectations for when points usually appear after flying.
facts_to_include:
- the flight has not happened yet
- points do not credit before travel
- auto-credit usually happens 1 to 2 days after flying
next_action:
- correct the misunderstanding clearly
- set the timing expectation
- keep the tone practical, not patronising
protected_values:
- 1 to 2 days
- before travel
required_concepts:
- no points before travel
- points usually appear after flying
do_not_include:
- internal service labels
- invented claim or exception paths
- fake empathy
```

### Turn 2

```text
Latest Customer Message: oh right so i just wait

Service Contract:

service_type: points_credit_timing_info
response_kind: business_result
exit_point: EXIT_2_CONFIRM_WAIT_PATH
customer_facing_task: Confirm that waiting is the correct next step and explain when to come back if the points still do not appear.
facts_to_include:
- waiting is the right next step
- points usually appear 1 to 2 days after flying
- a retro claim is available from 14 days after flying
next_action:
- confirm the simple next step
- explain when a claim path becomes relevant
protected_values:
- 1 to 2 days
- 14 days
required_concepts:
- wait until after travel
- claim path only becomes relevant later
do_not_include:
- internal labels
- over-complicated policy detail
- unsupported escalation
```

---

## 2. Different points earned vs travel companion

### Turn 1

```text
Latest Customer Message: my friend got way more points than me on the same booking, why

Service Contract:

service_type: airpoints_earn_rule_explanation
response_kind: business_result
exit_point: EXIT_1_EXPLAIN_PARTIAL_PAYMENT_RULE
customer_facing_task: Explain that if any portion of a fare was paid with Airpoints Dollars, that passenger earns at 20 percent of the standard rate.
facts_to_include:
- some portion of the booking was paid with Airpoints Dollars
- that passenger earns at 20 percent of the standard rate
- this is set at booking time
next_action:
- explain the rule plainly
- connect the rule to the different outcomes
protected_values:
- 20 percent
- Airpoints Dollars
- set at booking time
required_concepts:
- lower earn rate is due to partial Airpoints payment
- different passengers can earn differently on the same booking
do_not_include:
- internal labels
- invented manual adjustment path
- blame language
```

### Turn 2

```text
Latest Customer Message: can you fix it then

Service Contract:

service_type: airpoints_earn_rule_explanation
response_kind: business_result
exit_point: EXIT_2_NON_ADJUSTABLE_RULE
customer_facing_task: Explain that the earn rate is locked at booking and cannot be adjusted after travel.
facts_to_include:
- the earn rate was set at booking
- it cannot be adjusted after travel
next_action:
- answer the request directly
- keep the no clear and grounded
protected_values:
- set at booking
- cannot be adjusted after travel
required_concepts:
- no adjustment path
- explain the rule calmly
do_not_include:
- internal labels
- invented exception process
- over-apology
```

---

## 3. Standard retro claim — flown 3 weeks ago

### Turn 1

```text
Latest Customer Message: i flew air nz three weeks ago and the points still haven't shown up

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_missing
exit_point: EXIT_1_STANDARD_RETRO_CLAIM_START
customer_facing_task: Start a standard retro claim because the travel is inside the 14-day to 6-month window and collect the key claim details needed to proceed.
facts_to_include:
- travel happened 3 weeks ago
- the claim is inside the normal retro-claim window
- key details are needed to continue
next_action:
- confirm the claim can be progressed
- ask for the minimum useful claim details
protected_values:
- 3 weeks ago
- 14 days
- 6 months
required_concepts:
- inside the claim window
- collect missing details to proceed
do_not_include:
- internal labels
- invented rejection language
- unnecessary jargon
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
- internal labels
- extra policy detail not supplied
- invented status outcome
```

---

## 4. Redeemed flight = no status points

### Turn 1

```text
Latest Customer Message: i used airpoints on this booking to keep my status and got nothing, what happened

Service Contract:

service_type: non_accrual_rule_explanation
response_kind: business_result
exit_point: EXIT_1_AWARD_FLIGHT_NON_ACCRUAL
customer_facing_task: Explain that flights booked using Airpoints do not earn Airpoints Dollars or status points.
facts_to_include:
- the booking was an award or redemption flight
- award flights do not earn Airpoints Dollars
- award flights do not earn status points
next_action:
- explain the rule clearly
- keep the response calm under frustration
protected_values:
- award flight
- Airpoints Dollars
- status points
required_concepts:
- no accrual on redemption flights
- explain why the customer saw no status credit
do_not_include:
- internal labels
- invented exception path
- fake empathy
```

### Turn 2

```text
Latest Customer Message: nobody told me that

Service Contract:

service_type: non_accrual_rule_explanation
response_kind: business_result
exit_point: EXIT_2_HOLD_BOUNDARY_ON_NON_ACCRUAL
customer_facing_task: Acknowledge the frustration, restate the rule briefly, and avoid implying that the points outcome can be changed.
facts_to_include:
- the rule applies to award flights
- the points outcome cannot be changed from this booking
next_action:
- acknowledge the frustration without claiming feelings
- keep the rule and outcome clear
protected_values:
- award flights
- cannot be changed
required_concepts:
- frustration acknowledged
- no change to the outcome
do_not_include:
- internal labels
- invented review or appeal process
- over-softened language
```

---

## 5. Quick retro claim — Air NZ long-haul

### Turn 1

```text
Latest Customer Message: my return leg from vancouver didn't credit but the outbound did

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_missing
exit_point: EXIT_1_CLEAN_RETRO_CLAIM_START
customer_facing_task: Start a clean retro claim for the missing return leg and collect the key details needed to proceed quickly.
facts_to_include:
- only the return leg is missing
- the claim can be progressed
- key details are needed to continue
next_action:
- keep the response efficient and positive
- ask only for the details needed to submit the claim
protected_values:
- return leg
- missing
required_concepts:
- claim can proceed
- collect details to continue
do_not_include:
- internal labels
- unnecessary policy explanation
- invented delay
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
- details being confirmed
- yes submits
- no corrects or cancels
do_not_include:
- internal labels
- invented credit timing if not supplied
- extra policy material
```

---

## 6. Double status points promo eligibility check

### Turn 1

```text
Latest Customer Message: i'm about to book a flight, will it qualify for the double status points promo

Service Contract:

service_type: promo_eligibility_check
response_kind: ask_missing
exit_point: EXIT_1_PROMO_INFO_NARROWING
customer_facing_task: Explain that more booking details are needed before promo eligibility can be assessed.
facts_to_include:
- this is an information request about a future booking
- more detail is needed to assess eligibility
next_action:
- ask for the minimum booking details needed
- keep the tone upbeat and informative
protected_values:
- double status points promotion
required_concepts:
- cannot confirm eligibility yet
- need more booking detail
do_not_include:
- internal labels
- guessed eligibility answer
- invented promo rules
```

### Turn 2

```text
Latest Customer Message: it's sydney in august, not booked yet

Service Contract:

service_type: promo_eligibility_check
response_kind: business_result
exit_point: EXIT_2_PROMO_RULE_EXPLANATION
customer_facing_task: Give a grounded answer about what determines promotion eligibility and avoid overcommitting without a booking.
facts_to_include:
- eligibility depends on the promo terms and the booking details
- a final answer cannot be confirmed without the booking details
next_action:
- explain the dependency clearly
- avoid a hard yes or no if it is not grounded
protected_values:
- booking details
- promo terms
required_concepts:
- cannot confirm yet
- explain what would determine eligibility
do_not_include:
- internal labels
- guessed promo approval
- invented deadlines or fare rules
```

---

## 7. Domestic flight credit confirmed

### Turn 1

```text
Latest Customer Message: can you just check if my domestic flight credited properly

Service Contract:

service_type: flight_credit_status_check
response_kind: business_result
exit_point: EXIT_1_STATUS_CHECK_RESULT
customer_facing_task: Confirm that the recent domestic flight credited correctly.
facts_to_include:
- the recent domestic flight has credited correctly
next_action:
- answer clearly and positively
- keep the response concise
protected_values:
- domestic flight
- credited correctly
required_concepts:
- status check complete
- no further action needed
do_not_include:
- internal labels
- invented extra detail
- unnecessary recap
```

---

## 8. Star Alliance partner airline claim

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
- internal labels
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
- internal labels
- invented manual workaround
- over-apology
```

---

## 9. Claim outside the 6-month window

### Turn 1

```text
Latest Customer Message: the online claim form rejected my flight from eight months ago

Service Contract:

service_type: claim_missing_airpoints
response_kind: handover
exit_point: EXIT_1_OUT_OF_WINDOW_HANDOVER
customer_facing_task: Explain that the claim is outside the standard 6-month window and that discretionary review by a live agent is the next step.
facts_to_include:
- the flight was 8 months ago
- the standard claim window is 6 months
- discretionary review requires a live agent
next_action:
- explain the reason clearly
- hand over without promising an outcome
protected_values:
- 8 months
- 6 months
- discretionary review
- live agent
required_concepts:
- outside standard window
- live agent is required
do_not_include:
- internal labels
- guarantee of success
- invented self-service path
```

### Turn 2

```text
Latest Customer Message: but surely you can just push it through

Service Contract:

service_type: claim_missing_airpoints
response_kind: handover
exit_point: EXIT_2_RESTATE_OUT_OF_WINDOW_BOUNDARY
customer_facing_task: Hold the boundary on the 6-month window and keep the live-agent path clear.
facts_to_include:
- the standard window has passed
- only discretionary live-agent review is available
next_action:
- keep the no clear
- avoid implying Oscar can override the rule
protected_values:
- standard window
- discretionary live-agent review
required_concepts:
- Oscar cannot progress it directly
- live agent path remains the only next step
do_not_include:
- internal labels
- false promise of direct action
- invented exception route
```

---

## 10. Third-party tour booking — no Air NZ PNR

### Turn 1

```text
Latest Customer Message: my tour company booked the flight and i don't have an air nz reference, can you still claim the points

Service Contract:

service_type: third_party_booking_airpoints_claim
response_kind: handover
exit_point: EXIT_1_NO_CLEAR_CLAIM_PATH_HANDOVER
customer_facing_task: Explain that there is no clear self-service claim path because the booking was made through a tour operator on a non-Star-Alliance airline and there is no Air NZ booking reference.
facts_to_include:
- the booking came through a tour operator
- the airline is non-Star-Alliance
- there is no Air NZ booking reference
- there is no clear direct claim path here
next_action:
- explain the limitation
- hand over for specialist support
protected_values:
- tour operator
- non-Star-Alliance
- no Air NZ booking reference
required_concepts:
- unclear direct claim path
- specialist support needed
do_not_include:
- internal labels
- made-up claim instructions
- false certainty
```

### Turn 2

```text
Latest Customer Message: i only have the tour booking number

Service Contract:

service_type: third_party_booking_airpoints_claim
response_kind: handover
exit_point: EXIT_2_RESTATE_THIRD_PARTY_LIMIT
customer_facing_task: Restate that the tour booking number alone is not enough to create a direct Air NZ claim path and keep the handover clear.
facts_to_include:
- the tour booking number is not the same as an Air NZ booking reference
- the direct claim path is still unclear
next_action:
- restate the limitation simply
- avoid making the customer repeat themselves unnecessarily
protected_values:
- tour booking number
- Air NZ booking reference
- unclear direct claim path
required_concepts:
- still no direct self-service path
- handover remains appropriate
do_not_include:
- internal labels
- invented workaround
- unsupported promise of claim success
```

---

## Suggested live-demo set

If you want a shorter live-demo run, I would use these five:

1. Scenario 3, Turn 1 — standard retro claim inside window
2. Scenario 4, Turn 1 — award flight non-accrual explanation
3. Scenario 5, Turn 1 — clean happy-path retro claim
4. Scenario 8, Turn 1 — partner airline handover
5. Scenario 9, Turn 1 — out-of-window handover

That gives you:

- one clean claim start
- one frustrating educational rule
- one happy path
- two clean handover paths
