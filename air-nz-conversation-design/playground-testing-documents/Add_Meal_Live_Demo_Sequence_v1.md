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
customer_facing_task: Acknowledge the request, surface the relevant domestic booking context, and set expectations that special meal requests are not available on domestic flights.
facts_to_include:
- customer name: Megan
- route: Wellington to Auckland
- flight date: 18 June
- flight type: domestic
- domestic flights do not have a meal service, so there is no meal request path on this booking
next_action:
- lead with the domestic service model as the reason
- do not offer a special-meal request path
- move the conversation forward by making the situation clear
protected_values:
- Megan
- Wellington
- Auckland
- 18 June
- domestic
required_concepts:
- booking has been identified
- domestic service model explained once
- set expectations up front
do_not_include:
- internal service labels
- SSR codes or internal airline terminology
- invented workaround or approval paths
- meal request confirmation
```

### Turn 2

```text
Latest Customer Message: what

it's a 90 min flight

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_2_EXPLAIN_DOMESTIC_SERVICE_LIMIT
customer_facing_task: Answer the challenge directly and make clear that the reason is the domestic service model, not the flight time.
facts_to_include:
- it is because the flight is domestic, not because it is 90 minutes
- domestic flights do not have a meal service
next_action:
- answer the time-versus-domestic misunderstanding directly
- keep the explanation to the one point being challenged
- do not reopen the meal-request path
protected_values:
- domestic
required_concepts:
- domestic, not flight length
- no meal service on domestic flights
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
Latest Customer Message: so i can't request anything

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_3_CONFIRM_NO_SPECIAL_MEAL_PATH
customer_facing_task: Answer the yes-or-no question clearly, confirm that meals cannot be requested on this flight, and offer one grounded practical alternative.
facts_to_include:
- meals cannot be requested on this flight
- if the customer wants something specific, they can bring food with them
- there is a food range airside at Wellington
next_action:
- answer the yes-or-no question directly
- offer one practical alternative
- keep the answer grounded, concise, and non-patronising
protected_values:
- Wellington
- special meal system
- food range airside
required_concepts:
- no meal request path
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
Latest Customer Message: that's annoying

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_4_HANDLE_FRUSTRATION_AND_CLOSE
customer_facing_task: Acknowledge the frustration briefly and close in a slightly warmer, more natural way without reopening the explanation.
facts_to_include:
- the customer is frustrated about the limit
next_action:
- use a short, natural acknowledgement of the reaction
- keep the response brief and lightly warm
- do not re-explain the limitation
- if offering more help, keep it narrow to this booking and only if it is genuinely useful
protected_values:
- special meal requests
required_concepts:
- acknowledge frustration
- close without pestering
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
- broad follow-on offers like "anything else on your booking"
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
- route: Auckland to Tokyo Narita
- flight date: 8 October
next_action:
- confirm this is the correct booking
- keep the tone upbeat and grounded
protected_values:
- Auckland
- Tokyo Narita
- 8 October
required_concepts:
- booking identified
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
customer_facing_task: Close warmly and confidently, matching the customer's positive energy without becoming cheesy.
facts_to_include:
- the customer is flying long-haul for the first time
next_action:
- close on a positive note
- do not reopen the task unnecessarily
protected_values:
- first long haul
required_concepts:
- acknowledge the excitement
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
customer_facing_task: Identify the booking, make clear that the request is inside the non-NZ 48-hour cutoff window, and explain that the standard add path is no longer available.
facts_to_include:
- route: Singapore to Auckland
- departure: tomorrow at 14:30
- this is roughly 28 hours away
- for flights departing non-NZ airports, the meal-request cutoff is 48 hours before departure
next_action:
- explain the cutoff clearly and early
- make clear the standard add path is no longer available
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
customer_facing_task: Acknowledge the frustration, explain that Oscar cannot add the meal through the standard flow anymore, and hand over for a best-effort request to catering.
facts_to_include:
- Oscar cannot add the meal through the standard flow at this point
- a live agent can try a best-effort request direct to catering
- if it can be done, the live agent will arrange it
next_action:
- answer the pushback directly
- explain the handover path in practical language
- offer to pass the request across now
protected_values:
- live agent
- best-effort request
- catering
required_concepts:
- standard path unavailable
- best-effort handover available
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
customer_facing_task: Confirm the handover and summarise the booking, requested meal, and reason for transfer so the live agent can pick it up cleanly.
facts_to_include:
- booking: Singapore to Auckland, departing tomorrow at 14:30
- requested meal: vegetarian meal
- passenger: Emma (authenticated user)
- reason for handover: inside the 48-hour cutoff for a non-NZ departure
next_action:
- summarise clearly
- confirm the live transfer
- set a calm best-effort expectation
protected_values:
- Singapore
- Auckland
- tomorrow at 14:30
- vegetarian meal
- Emma
required_concepts:
- summary passed through
- live agent taking over
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
