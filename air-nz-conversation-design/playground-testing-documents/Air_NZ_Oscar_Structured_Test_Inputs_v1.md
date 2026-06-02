# Oscar Structured Test Inputs v1

Use these in Prompt Engine when you want to test Oscar as a rewriter against a supplied service outcome.

Each case is designed for the `Claim Missing Airpoints` scenario.

## 1. Ask missing

```text
Latest Customer Message: I need to claim missing Airpoints from my Christchurch flight last week.

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_missing
exit_point: EXIT_2_ASK_MISSING
customer_facing_task: Ask for the missing claim details needed to continue.
facts_to_include:
- missing detail: ticket number
protected_values:
- ticket number
required_concepts:
- need one more detail to continue
do_not_include:
- internal service labels
- policy or eligibility statements not supplied
```

## 2. Ask confirm

```text
Latest Customer Message: Yes, here's my ticket number

Service Contract:

service_type: claim_missing_airpoints
response_kind: ask_confirm
exit_point: EXIT_3_ASK_CONFIRM
customer_facing_task: Confirm the collected claim details before submission.
facts_to_include:
- booking reference: ABC123
- ticket number: 0861234567890
- flight number: NZ283
- flight date: 2025-02-14
- route: AKL to SYD
next_action:
- ask the customer to confirm
- yes means submit the claim
- no means cancel or change details, depending on the branch
protected_values:
- ABC123
- 0861234567890
- NZ283
- 2025-02-14
- AKL
- SYD
required_concepts:
- yes submits
- no cancels
do_not_include:
- internal service labels
- removed or corrected old values
- new booking, policy, eligibility, or contact details
```

## 3. Execute

```text
Latest Customer Message: Yes, submit it.

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_7_EXECUTE
customer_facing_task: Confirm the claim has been lodged successfully.
facts_to_include:
- claim reference: AP-2026-44721
- processing time: 5 business days
protected_values:
- AP-2026-44721
- 5 business days
required_concepts:
- claim has been submitted
- when to expect the points
do_not_include:
- internal service labels
- extra support channels not supplied
```

## 4. Ineligible

```text
Latest Customer Message: Why can’t you just add the points?

Service Contract:

service_type: claim_missing_airpoints
response_kind: business_result
exit_point: EXIT_11_INELIGIBLE
customer_facing_task: Explain that the claim cannot be progressed because the booking is not eligible.
facts_to_include:
- reason: reward booking
protected_values:
- reward booking
required_concepts:
- claim cannot be progressed
- explain the reason plainly
do_not_include:
- internal service labels
- invented exception paths
- contact or policy detail not supplied
```
