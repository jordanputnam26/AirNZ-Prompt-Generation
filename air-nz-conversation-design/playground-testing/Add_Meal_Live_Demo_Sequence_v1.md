# Add Meal Live Demo Sequence v1

This is the tighter live-demo pack for Prompt Engine.

It uses one scenario from each category:

- `Conv 1` — Frustrated
- `Conv 5` — Enthusiastic
- `Conv 8` — Handover

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
- special meal requests are not available on domestic Air New Zealand flights
next_action:
- explain the limitation clearly
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
- domestic flights do not support special meal requests
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
customer_facing_task: Explain why a special meal cannot be added on this flight and clarify what is available on domestic services.
facts_to_include:
- the flight is domestic
- domestic flights provide water, tea, coffee, and a snack
- there is no full meal service
- there is no SSR meal-request system for this flight
- some snacks may be gluten-free
- the snack itself is not customisable
next_action:
- answer the challenge directly
- explain the service limit plainly
- do not reopen the meal-request path
protected_values:
- domestic
- water
- tea
- coffee
- snack
- gluten-free
- not customisable
required_concepts:
- no full meal service
- no special meal request path
- explain what is available instead
do_not_include:
- internal service labels
- apology-heavy language
- invented meal exceptions
- new contact or escalation options
```

### Turn 3

```text
Latest Customer Message: so i can't request anything

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_3_CONFIRM_NO_SPECIAL_MEAL_PATH
customer_facing_task: Confirm that the customer cannot request a special meal through the meal-request system, and offer the most grounded practical alternative.
facts_to_include:
- special meal requests are not available on this flight
- the best practical option is to bring food with you
- there is a food range airside at Wellington
next_action:
- answer the yes-or-no question directly
- offer one practical alternative
- keep the answer grounded and concise
protected_values:
- Wellington
- special meal system
- food range airside
required_concepts:
- no special meal request path
- practical alternative offered
do_not_include:
- internal service labels
- invented exceptions
- unsupported compensation or escalation paths
- generic contact guidance
```

### Turn 4

```text
Latest Customer Message: that's annoying

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_4_HANDLE_FRUSTRATION_AND_CLOSE
customer_facing_task: Acknowledge the frustration, restate the limitation briefly, and close cleanly while offering help only if it is still genuinely useful.
facts_to_include:
- the news is disappointing
- fuller meal options are available on Tasman and longer routes
- the current flight does not support special meal requests
next_action:
- acknowledge the frustration without claiming human feelings
- keep the response brief
- optionally offer further help in a low-pressure way
protected_values:
- Tasman
- longer routes
- special meal requests
required_concepts:
- acknowledge frustration
- no change to the domestic-flight limitation
- close without pestering
do_not_include:
- internal service labels
- fake empathy like "I understand how you feel"
- invented exception handling
- over-friendly filler
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
response_kind: ask_missing
exit_point: EXIT_2_NARROW_VEGETARIAN_PREFERENCE
customer_facing_task: Explain that there are multiple vegetarian meal variants on long-haul flights and ask the customer whether they have a preference.
facts_to_include:
- there are multiple vegetarian options on this route
- a preference is needed before the meal can be added
next_action:
- ask whether they have a preference
- keep the explanation simple and friendly
protected_values:
- vegetarian options
required_concepts:
- more than one vegetarian option exists
- preference needed to continue
do_not_include:
- internal service labels
- full option list unless asked
- generic filler
```

### Turn 3

```text
Latest Customer Message: oh i didn't know there were different ones, what are they?

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_3_EXPLAIN_VEGETARIAN_OPTIONS
customer_facing_task: Explain the main vegetarian meal variants available on this long-haul route in clear, customer-friendly language.
facts_to_include:
- Vegan vegetarian: no animal products
- Lacto-ovo vegetarian: no meat or fish, includes dairy and eggs
- Asian or Hindu vegetarian: Indian-style, often spicy, limited dairy
- Oriental vegetarian: Chinese-style, no dairy
next_action:
- explain the options clearly
- help the customer choose without overwhelming them
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
- explain the differences simply
do_not_include:
- internal service labels unless genuinely useful
- invented catering promises
- pressure to choose immediately
```

### Turn 4

```text
Latest Customer Message: oh interesting. i eat dairy and eggs so lacto ovo? what's that usually like

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_4_DESCRIBE_LACTO_OVO
customer_facing_task: Confirm that lacto-ovo vegetarian sounds like the right fit and describe the meal style in broad, grounded terms.
facts_to_include:
- lacto-ovo vegetarian includes dairy and eggs
- it is typically a pasta or rice-based main with vegetables and cheese or egg
- standard sides and drinks still apply
next_action:
- answer the question directly
- keep the description practical rather than overpromising
protected_values:
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

### Turn 5

```text
Latest Customer Message: yeah that sounds great, let's do that

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_5_ADD_OUTBOUND_MEAL
customer_facing_task: Confirm that the lacto-ovo vegetarian meal has been added to the outbound flight.
facts_to_include:
- meal type: lacto-ovo vegetarian
- passenger name: Tom
- route: Auckland to Tokyo Narita
next_action:
- confirm the meal has been added
- keep the response crisp and positive
protected_values:
- lacto-ovo vegetarian
- Tom
- Auckland
- Tokyo Narita
required_concepts:
- meal added successfully
- outbound sector only so far
do_not_include:
- internal service labels unless helpful
- return booking confirmation if not yet added
- unnecessary recap
```

### Turn 6

```text
Latest Customer Message: and is it on the return too or do i need to do it again

Service Contract:

service_type: add_meal_request
response_kind: ask_confirm
exit_point: EXIT_6_CHECK_RETURN_AND_CONFIRM_ADD
customer_facing_task: Confirm that a return booking exists and ask whether the customer wants the same meal added there as well.
facts_to_include:
- return route: Tokyo Narita to Auckland
- return date: 22 October
- the same meal can be added to the return
next_action:
- ask whether to add the same meal on the return
- keep it easy for the customer to say yes
protected_values:
- Tokyo Narita
- Auckland
- 22 October
- same meal
required_concepts:
- return booking identified
- confirmation needed to add on return
do_not_include:
- internal service labels
- assumption that return is already updated
- extra unrelated advice
```

### Turn 7

```text
Latest Customer Message: yes please!!

Service Contract:

service_type: add_meal_request
response_kind: business_result
exit_point: EXIT_7_ADD_RETURN_MEAL
customer_facing_task: Confirm that the same meal has been added to the return flight as well.
facts_to_include:
- meal type: lacto-ovo vegetarian
- return route: Tokyo Narita to Auckland
- meal is now added on both flights
next_action:
- confirm the return update clearly
- mention Manage Booking if useful
protected_values:
- lacto-ovo vegetarian
- Tokyo Narita
- Auckland
- both flights
required_concepts:
- return meal added
- both sectors now covered
do_not_include:
- internal service labels
- invented caveats
- overlong explanation
```

### Turn 8

```text
Latest Customer Message: amazing thanks so much, first long haul so this is all new

Service Contract:

service_type: add_meal_request
response_kind: cancelled
exit_point: EXIT_8_WARM_CLOSE
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

## 3. Handover — Conv 8

- Conversation: `Adding meals for family members`
- Trigger: `Customer wants meals added for spouse and children. Authority check is out of scope.`

### Turn 1

```text
Latest Customer Message: hi can you add meals for my whole family on our LA flight

Service Contract:

service_type: add_meal_request
response_kind: ask_missing
exit_point: EXIT_1_IDENTIFY_BOOKING_AND_REQUEST_MEAL_DETAILS
customer_facing_task: Identify the booking, list the passengers visible on it, and ask what meals are being requested.
facts_to_include:
- route: Auckland to Los Angeles
- flight date: 4 December
- passengers: David, Sophie, Lily, and Jack
next_action:
- ask what meals are required
- keep the tone helpful and efficient
protected_values:
- Auckland
- Los Angeles
- 4 December
- David
- Sophie
- Lily
- Jack
required_concepts:
- booking identified
- meal details needed to continue
do_not_include:
- internal service labels
- promise that all meals can be added directly
- privacy explanation too early
```

### Turn 2

```text
Latest Customer Message: hindu non veg for me and sophie, and child meals for lily and jack - they're 6 and 9

Service Contract:

service_type: add_meal_request
response_kind: handover
exit_point: EXIT_2_BOUNDARY_ON_OTHER_PASSENGERS
customer_facing_task: Explain that the authenticated traveller's meal can be handled directly, but meals for the other passengers require a live agent because the authority check is out of scope here.
facts_to_include:
- Hindu non-vegetarian for David and Sophie
- child meals for Lily and Jack
- Lily is 6 and Jack is 9
- live agent required for meals requested on behalf of other passengers
next_action:
- explain the boundary clearly
- offer the practical choice between adding David's now or handing all four to an agent
protected_values:
- Hindu non-vegetarian
- child meals
- Lily
- Jack
- 6
- 9
- live agent
required_concepts:
- authenticated traveller can be handled directly
- other passengers trigger handover
- give the customer a practical choice
do_not_include:
- internal service labels
- accusation or suspicion language
- promise that all four can be completed here
```

### Turn 3

```text
Latest Customer Message: oh come on it's my own family, i booked the whole thing

Service Contract:

service_type: add_meal_request
response_kind: handover
exit_point: EXIT_3_RESTATE_PRIVACY_STEP_AND_OPTIONS
customer_facing_task: Acknowledge the frustration, explain that the privacy step still applies, and restate the two clean options.
facts_to_include:
- privacy step applies consistently
- the live agent will see the conversation history
- option one: add the authenticated traveller's meal now and pass the rest across
- option two: have the agent handle all four together
next_action:
- stay calm under pushback
- make the options easy to choose between
protected_values:
- privacy step
- whole conversation
- all four together
required_concepts:
- boundary still stands
- no need to repeat everything to the live agent
- customer can choose the path
do_not_include:
- internal service labels
- defensive or argumentative tone
- invented approval override
```

### Turn 4

```text
Latest Customer Message: just pass it all across, i don't want to do it twice

Service Contract:

service_type: add_meal_request
response_kind: handover
exit_point: EXIT_4_SUMMARISE_AND_TRANSFER
customer_facing_task: Confirm the handover and summarise the booking, requested meals, and reason for transfer so the next agent can pick it up cleanly.
facts_to_include:
- booking: Auckland to Los Angeles, 4 December, four passengers
- requested meals: Hindu non-vegetarian for David and Sophie
- requested meals: child meals for Lily and Jack
- requested on both outbound and return
- reason for handover: meals being added for passengers other than the authenticated user
next_action:
- summarise clearly
- confirm the live transfer
- close with a calm expectation
protected_values:
- Auckland
- Los Angeles
- 4 December
- David
- Sophie
- Lily
- Jack
- Hindu non-vegetarian
- child meals
- authenticated user
required_concepts:
- summary passed through
- live agent taking over
- customer should not need to restate the request
do_not_include:
- internal service labels
- invented wait times
- false promise of immediate completion
```

## Suggested call flow

If you are walking the Air NZ team through this live, I would run the three conversations in this order:

1. `Conv 5` to show the clean happy path
2. `Conv 1` to show explanation under frustration
3. `Conv 8` to show boundary handling and handover

That gives you:

- one polished educational happy path
- one contained frustration path
- one clean handover path
