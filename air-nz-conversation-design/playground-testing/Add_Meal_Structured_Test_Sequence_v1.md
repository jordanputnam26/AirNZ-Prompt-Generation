# Add Meal Structured Test Sequence v1

This file turns the attached CSV conversation into a staged Prompt Engine demo pack.

Each code block is designed to be pasted directly into Prompt Engine underneath the existing Oscar rewriter system prompt.

## Scenario

- Conversation: `Conv 1 | Domestic flight — no SSR available`
- Category: `Frustrated · Scenario 8`
- Trigger: `Customer expects a special meal on a domestic NZ flight. None available.`

## Assumptions

- This is a **rewriter demo pack**, not a source-of-truth backend contract.
- The service metadata below is inferred from the scenario flow and intended bot behaviour in the CSV.
- `service_type` is written as `add_meal_request`.
- The business outcome is: the customer is on a domestic Air New Zealand flight, special meal requests are not available, and the agent should explain that clearly without inventing exceptions.

---

## Turn 1

### Paste into Prompt Engine

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

### What this step is testing

- Can Oscar open helpfully and directly?
- Can Oscar set the limitation up front without sounding robotic?
- Can Oscar preserve the booking context without inventing unsupported options?

---

## Turn 2

### Paste into Prompt Engine

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

### What this step is testing

- Can Oscar explain a hard limitation clearly?
- Can Oscar stay grounded under mild pushback?
- Can Oscar avoid jargon like `SSR` in the customer-facing response?

---

## Turn 3

### Paste into Prompt Engine

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
- generic “contact customer care” guidance
```

### What this step is testing

- Can Oscar answer the core question directly?
- Can Oscar offer a practical next step without sounding dismissive?
- Can Oscar stay useful without inventing a service path that does not exist?

---

## Turn 4

### Paste into Prompt Engine

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
- fake empathy like “I understand how you feel”
- invented exception handling
- over-friendly filler
```

### What this step is testing

- Can Oscar handle frustration without over-apologising?
- Can Oscar stay practical and composed at the close?
- Can Oscar offer help without sounding like he is pushing the customer to continue?

---

## Optional Turn 5

The CSV ends with the customer saying `no thanks` and does not include a final bot reply.

If you want a final close for the live demo, use this optional step.

### Paste into Prompt Engine

```text
Latest Customer Message: no thanks

Service Contract:

service_type: add_meal_request
response_kind: cancelled
exit_point: EXIT_5_CLEAN_CLOSE
customer_facing_task: Close the conversation briefly and politely.
facts_to_include:
- none
next_action:
- close the chat cleanly
- do not recap the whole scenario
- do not prompt for more unless truly needed
protected_values:
- none
required_concepts:
- acknowledge the customer politely
- close without pressure
do_not_include:
- internal service labels
- unnecessary recap
- generic “anything else?” if it feels pushy
```

### What this step is testing

- Can Oscar finish cleanly?
- Can Oscar avoid over-closing or re-opening the conversation?

---

## Suggested live-demo flow

If you are running this on a call with Air NZ, I would use the first four turns as the main demo and keep the optional close in reserve.

Recommended order:

1. Turn 1 to show expectation-setting
2. Turn 2 to show explanation under challenge
3. Turn 3 to show practical alternative
4. Turn 4 to show frustration handling and close

That sequence should surface whether Oscar can stay:

- calm
- practical
- distinctly Air New Zealand
- clear on hard boundaries
- not emotionally performative
