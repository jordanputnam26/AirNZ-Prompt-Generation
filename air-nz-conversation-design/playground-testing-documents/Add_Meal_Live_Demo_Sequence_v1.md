# Add Meal Test Sequence v1

This is the canonical Prompt Engine test sequence for Add Meal.

It uses one scenario from each category:

- `Conv 1` — Frustrated
- `Conv 5` — Enthusiastic
- `Conv 10` — Handover

Each code block is designed to be pasted directly into Prompt Engine underneath the existing Oscar rewriter system prompt.

## 1. Frustrated — Conv 1

- Conversation: `Domestic flight — no SSR available`
- Trigger: `Customer expects a special meal on a domestic NZ flight. None available.`

### Turn 1

```text
Latest Customer Message: hi i need to add a vegetarian meal to my flight to auckland next week

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_1_IDENTIFY_BOOKING_AND_SET_EXPECTATIONS
customer_facing_task: Acknowledge the request, surface the relevant domestic booking context, explain the domestic service model calmly, and make clear that a vegetarian meal cannot be added on this flight.
facts_to_include:
- customer name: Megan
- route: Wellington to Auckland
- flight date: 18 June
- flight type: domestic
- domestic flights do not have a meal service onboard
- a vegetarian meal cannot be added on this flight
next_action:
- acknowledge the request first
- explain the domestic service model before stating the limitation
- keep the tone calm and matter-of-fact
- do not offer a special-meal request path
- move the conversation forward by making the situation clear without sounding abrupt
protected_values:
- Megan
- Wellington
- Auckland
- 18 June
- domestic
required_concepts:
- booking has been identified
- domestic service model explained once
- limitation lands after the reason
- set expectations up front
do_not_include:
- internal service labels
- SSR codes or internal airline terminology
- invented workaround or approval paths
- meal request confirmation
```

### Turn 2

```text
Latest Customer Message: what do you mean

it's only 90 mins

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_2_EXPLAIN_DOMESTIC_SERVICE_LIMIT
customer_facing_task: Clarify calmly that the reason is the domestic service model, rather than the flight time, and keep the explanation brief.
facts_to_include:
- the reason is that this is a domestic flight
- domestic flights do not have a meal service
- a vegetarian meal cannot be added on this flight
next_action:
- clarify the reason calmly
- use one short reason-led explanation
- avoid sounding corrective, argumentative, or rebuttal-heavy
- keep the explanation to the one point being asked about
- do not replay the earlier explanation in a new form
- do not reopen the meal-request path
protected_values:
- domestic
required_concepts:
- domestic flight is the reason
- no meal service on domestic flights
- explanation stays brief
do_not_include:
- internal service labels
- apology-heavy language
- invented meal exceptions
- new contact or escalation options
- repeated explanation of what is onboard
- repeated restatement of the same limit
```

### Turn 3

```text
Latest Customer Message: so i can't request anything at all

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_3_CONFIRM_NO_SPECIAL_MEAL_PATH
customer_facing_task: Answer the yes-or-no question clearly, confirm that meals cannot be requested on this flight, and offer one grounded practical alternative.
facts_to_include:
- meals cannot be requested on this flight
- tea, coffee, and a snack are available onboard
- if the customer wants something specific, they can bring food with them
- there is a food range airside at Wellington
next_action:
- answer the yes-or-no question directly
- offer one practical alternative
- mention what is available onboard in one simple line
- keep the answer grounded, concise, and non-patronising
protected_values:
- Wellington
- tea
- coffee
- snack
- food range airside
required_concepts:
- no meal request path
- onboard offering mentioned
- practical alternative offered
do_not_include:
- internal service labels
- invented exceptions
- unsupported compensation or escalation paths
- generic contact guidance
- comparative framing like "best option" or "most practical option"
```

### Turn 4

```text
Latest Customer Message: that's pretty annoying

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_4_HANDLE_FRUSTRATION_AND_CLOSE
customer_facing_task: Acknowledge the frustration briefly, offer one light practical close if it still helps, and ask if there is anything else Oscar can help with on this booking.
facts_to_include:
- the customer is frustrated about the limit
- if the customer wants something specific, they can bring it with them or pick something up before boarding
next_action:
- use a short, natural acknowledgement of the reaction
- keep the response brief and lightly warm
- do not re-explain the limitation
- do not replay the same limit in softer wording
- offer one practical close if it still helps
- ask if there is anything else you can help with on this booking
protected_values:
- special meal requests
required_concepts:
- acknowledge frustration
- practical alternative lightly available
- further help offered on this booking
- close without pestering
- no policy replay
do_not_include:
- internal service labels
- fake empathy like "I understand how you feel"
- invented exception handling
- over-friendly filler
- route comparisons
- repeated explanation of the same limit
- casual acknowledgements like "fair enough"
- restating that nothing has changed
- abstract phrasing like "it is a bit frustrating"
- broad follow-on offers unrelated to this booking
```

## 2. Enthusiastic — Conv 5

- Conversation: `First long-haul — asks lots of questions`
- Trigger: `First-time long-haul flyer to Tokyo; needs education on vegetarian meal variants.`

### Turn 1

```text
Latest Customer Message: hi! i'm flying to tokyo for the first time next month and i want to add a vegetarian meal!

Service Contract:

service_type: add_meal_request
response_kind: ask_confirm
exit_point: EXIT_1_IDENTIFY_LONG_HAUL_BOOKING
customer_facing_task: Respond warmly, identify the likely booking, and ask the customer to confirm the flight before making any changes.
facts_to_include:
- the customer is flying to Tokyo for the first time
- route: Auckland to Tokyo Narita
- flight date: 8 October
next_action:
- briefly acknowledge the first trip to Tokyo
- confirm this is the correct booking
- keep the tone upbeat and grounded
protected_values:
- Auckland
- Tokyo Narita
- 8 October
required_concepts:
- booking identified
- first-trip excitement lightly acknowledged
- confirmation needed before proceeding
do_not_include:
- internal service labels
- meal already added
- invented extra booking details
```

### Turn 2

```text
Latest Customer Message: yes!!

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_2_NARROW_VEGETARIAN_PREFERENCE
customer_facing_task: Proactively surface the main vegetarian meal variants available on this route, then ask which one the customer would like.
facts_to_include:
- Vegan vegetarian: no animal products
- Lacto-ovo vegetarian: includes dairy and eggs
- Asian or Hindu vegetarian: Indian-style vegetarian meal
- Oriental vegetarian: Chinese-style vegetarian meal with no dairy
next_action:
- explain the options simply
- ask which option the customer would like
- keep the answer proactive, friendly, and easy to scan
protected_values:
- vegan vegetarian
- lacto-ovo vegetarian
- Asian or Hindu vegetarian
- Oriental vegetarian
- dairy
- eggs
- no animal products
required_concepts:
- there are several vegetarian variants
- preference needed to continue
do_not_include:
- internal service labels
- generic filler
```

### Turn 3

```text
Latest Customer Message: oh interesting. i eat dairy and eggs so lacto ovo? what's that usually like

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_3_DESCRIBE_LACTO_OVO
customer_facing_task: Confirm that lacto-ovo vegetarian sounds like the right fit and describe the meal style in broad, grounded terms.
facts_to_include:
- lacto-ovo vegetarian includes dairy and eggs
- it is typically a pasta or rice-based main with vegetables and cheese or egg
- standard sides and drinks still apply
next_action:
- answer the question directly
- keep the description practical rather than overpromising
- if offering to add the meal from here, phrase that as a real question
protected_values:
- lacto-ovo vegetarian
- dairy
- eggs
- pasta or rice-based main
- vegetables
- cheese or egg
required_concepts:
- this option fits the customer's stated preference
- describe the likely meal style
- offer-to-proceed question is clearly phrased if used
do_not_include:
- internal service labels
- guarantee of exact catering contents
- invented premium detail
```

### Turn 4

```text
Latest Customer Message: yeah that sounds great, let's do that

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_4_ADD_OUTBOUND_MEAL
customer_facing_task: Confirm that the lacto-ovo vegetarian meal has been added to the outbound flight, then proactively offer to add the same meal to the return booking as well.
facts_to_include:
- meal type: lacto-ovo vegetarian
- route: Auckland to Tokyo Narita
- return route: Tokyo Narita to Auckland
- return date: 22 October
next_action:
- confirm the meal has been added
- proactively ask whether the customer wants the same meal on the return
- keep the response crisp, positive, and easy to say yes to
protected_values:
- lacto-ovo vegetarian
- Auckland
- Tokyo Narita
- 22 October
required_concepts:
- meal added successfully
- return booking identified
- proactive next step offered
do_not_include:
- internal service labels unless helpful
- unnecessary recap
```

### Turn 5

```text
Latest Customer Message: yes please!!

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_5_ADD_RETURN_MEAL
customer_facing_task: Confirm that the same meal has been added to the return flight as well.
facts_to_include:
- meal type: lacto-ovo vegetarian
- return route: Tokyo Narita to Auckland
- meal is now added on both flights
next_action:
- confirm the return update clearly
- keep the confirmation concise and positive
protected_values:
- Tokyo Narita
- Auckland
- lacto-ovo vegetarian
- both flights
required_concepts:
- return meal added
- both sectors now covered
do_not_include:
- internal service labels
- invented caveats
- overlong explanation
```

### Turn 6

```text
Latest Customer Message: amazing thanks so much, first long haul so this is all new

Service Contract:

service_type: add_meal_request
response_kind: cancelled
exit_point: EXIT_6_WARM_CLOSE
customer_facing_task: Close warmly and confidently, acknowledge the first long-haul milestone, and offer light further help if it feels natural.
facts_to_include:
- the customer is flying long-haul for the first time
next_action:
- close on a positive note
- acknowledge the first long-haul milestone briefly
- offer light further help without reopening the task
- do not reopen the task unnecessarily
protected_values:
- first long haul
required_concepts:
- acknowledge the excitement
- further help lightly offered
- finish cleanly
do_not_include:
- internal service labels
- over-familiar humour
- unnecessary recap
```

## 3. Handover — Conv 10

- Conversation: `Within the 48-hour cutoff window`
- Trigger: `Customer's return flight departs from a non-NZ airport within 48 hours. Standard add is no longer possible, so Oscar needs to hand over for a best-effort attempt.`

### Turn 1

```text
Latest Customer Message: hi i forgot to add my vegetarian meal can you add it for my flight tomorrow from singapore

Service Contract:

service_type: add_meal_request
response_kind: handover
exit_point: EXIT_1_IDENTIFY_CUTOFF_LIMIT
customer_facing_task: Identify the booking, make clear that the request is inside the non-NZ 48-hour cutoff window, explain that the standard add path is no longer available, and give one practical alternative.
facts_to_include:
- route: Singapore to Auckland
- departure: tomorrow at 14:30
- this is roughly 28 hours away
- for flights departing non-NZ airports, the meal-request cutoff is 48 hours before departure
- if the customer needs something specific, they can bring food with them
next_action:
- explain the cutoff clearly and early
- make clear the standard add path is no longer available
- give one grounded practical alternative
- keep the answer calm and matter-of-fact
protected_values:
- Singapore
- Auckland
- tomorrow at 14:30
- 48 hours
required_concepts:
- booking identified
- inside the cutoff window
- standard add no longer available
- practical alternative offered
do_not_include:
- internal service labels
- invented workaround
- immediate success language
```

### Turn 2

```text
Latest Customer Message: ugh. is there anything you can do

Service Contract:

service_type: add_meal_request
response_kind: handover
exit_point: EXIT_2_HANDOVER_FOR_BEST_EFFORT
customer_facing_task: Acknowledge the frustration, explain that Oscar cannot add the meal through the standard flow anymore, and offer to pass it to a Customer Care team member to see what is still possible.
facts_to_include:
- Oscar cannot add the meal through the standard flow at this point
- a Customer Care team member can see what is still possible
- if anything can still be arranged, the Customer Care team member will take it from there
next_action:
- answer the pushback directly
- explain the pass-across path in practical language
- offer to pass the request across now
protected_values:
- Customer Care team member
required_concepts:
- standard path unavailable
- Customer Care team member path available
- practical next step offered
do_not_include:
- internal service labels
- blamey tone
- unsupported guarantee
```

### Turn 3

```text
Latest Customer Message: ok thanks

Service Contract:

service_type: add_meal_request
response_kind: handover
exit_point: EXIT_3_SUMMARISE_AND_TRANSFER
customer_facing_task: Confirm that the request is being passed across and set a calm best-effort expectation without showing an internal transfer summary.
facts_to_include:
- the request is being passed across now
- it relates to the Singapore to Auckland flight departing tomorrow at 14:30
- the request is for a vegetarian meal
- the reason is that the request is inside the 48-hour cutoff for a non-NZ departure
next_action:
- confirm the pass-across clearly
- set a calm best-effort expectation
protected_values:
- Singapore
- Auckland
- tomorrow at 14:30
- vegetarian meal
required_concepts:
- request passed across
- Customer Care team member taking over
- best-effort attempt
do_not_include:
- internal service labels
- invented wait times
- false promise of immediate completion
```

## Suggested call flow

If you are walking the Air NZ team through this sequence, I would run the three conversations in this order:

1. `Conv 5` to show the clean happy path
2. `Conv 1` to show explanation under frustration
3. `Conv 10` to show boundary handling and handover

That gives you:

- one polished educational happy path
- one contained frustration path
- one clean handover path
