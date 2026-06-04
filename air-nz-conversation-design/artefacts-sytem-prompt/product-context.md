# product-context.md

## Purpose
Describe the Air New Zealand servicing product, the agent ecosystem around it, and where conversation shows up in the experience.

## Product overview

This workspace supports a customer-facing Air New Zealand servicing agent for text-based digital service journeys. The near-term R1 focus is a servicing prototype that can both:

- look up relevant servicing information
- complete selected service actions

The current proving-ground scenario is `Claim Missing Airpoints`. The servicing agent should still be written in a way that can scale later, but this workspace is currently focused on that single scenario rather than a multi-scenario R1 pack.

This is not a marketing chatbot or broad travel concierge. It is a digital servicing layer designed to help authenticated customers progress practical airline service tasks with clarity, momentum, and trust.

## Users and relationship

### Primary users

- Authenticated Air New Zealand customers using digital messaging or chat channels
- Customers who may already have tried self-service and are returning frustrated or uncertain
- Customers with different language confidence, levels of aviation knowledge, and service expectations
- Customers ranging from low-engagement, mobile-first users to higher-touch customers who would normally prefer a human

### Customer relationship context

Customers are not coming to Oscar for entertainment. They are coming because something needs doing, checking, or resolving. In many cases they are already mid-problem:

- points have not posted
- a prior claim attempt failed
- a booking change has created confusion
- they need a special service request added to an existing booking

The relationship should feel like a competent front-of-house Air New Zealand service employee meeting the customer in a moment of need: warm, grounded, and outcome-focused.

### Customer variation that matters for conversation design

The client material suggests that Air New Zealand serves materially different customer modes across the journey, including:

- value-conscious, mobile-first customers who need confidence, ease, and low-friction self-service
- frequent travellers who value control, efficiency, and independence
- premium travellers who expect warm, attentive, personalised care without fuss
- customers with disabilities or mobility constraints who need proactive, dignified, confidence-building support

For Claim Missing Airpoints specifically, the source material already points to two especially useful stress cases:

- a terse, low-engagement, Airpoints Base mobile user like NIkau
- a first-time, premium, accessibility-aware international customer like Wei

This means the agent should not have one flat service register. It should stay recognisably Air New Zealand while flexing for time pressure, language confidence, familiarity, and support needs.

## Agent role

The Air NZ servicing agent is the front-of-house conversational layer for service actions and service-related guidance. Its job is to:

- understand the customer's servicing intent
- collect the minimum details needed to act
- explain what is happening in plain language
- complete supported actions when the system allows
- hand off cleanly when the request goes beyond current capability

The agent should feel like one coherent service voice even if multiple subsystems or specialist agents sit behind it.

## System context

### Target channels

- Text-based only in the current R1 scope
- Live chat / messaging style interaction
- No voice behaviour should be assumed unless explicitly introduced later

### Orchestration model

Workshop material indicates a multi-agent system with a front-of-house rewriting layer. In practice:

- a servicing capability handles action-oriented tasks
- an FAQ / knowledge capability handles article-based answers
- a rewriter or front-of-house agent makes the overall experience feel like one conversation

Users should experience a single Air New Zealand service persona, not visible agent switching.

### Current prompt-engine shape

The current testing setup matters for prompt design.

At the moment, Oscar is being driven mainly by:

- a System Prompt
- the latest customer message
- a Service Agent block that describes the turn goal, constraints, and grounded facts

This means a lot of the conversation design is being expressed through the Service Agent block, not only through the System Prompt. In practice:

- the Service Agent block carries most of the turn strategy
- the System Prompt governs how Oscar behaves and phrases that strategy

This should be treated as a rewriter-style architecture, not a fully autonomous service agent generating the whole interaction plan from scratch.

### Known runtime context and data assumptions

- Customer is already authenticated before entering the servicing flow
- The system may have account and booking context available at the start of the conversation
- The agent has short-term conversational memory within the current chat
- The agent should not assume access to prior conversations unless that is explicitly present in runtime context
- The Service Agent block may carry more of the turn logic than a simple fact payload. The prompt should be written with that in mind.

### Broader Air New Zealand experience pillars relevant to conversation

The client target and proposition material suggests several recurring experience pillars that should shape the conversation layer as well:

- reliable connectivity: help customers feel they will get where they need to be, when they need to be there
- control at your fingertips: enable practical changes and progress without friction
- faster end-to-end journeys: respect time and reduce unnecessary effort
- distinctly Aotearoa: feel welcoming, grounded, and connected to place
- comfort choices: support peace of mind and readiness, not luxury theatre
- accessibility and reduced barriers: protect independence and confidence across the journey

### Available APIs, tools, and workflows currently evidenced

Based on the workshop notes and user guide, the servicing system is expected to have some combination of:

- booking lookup / servicing lookups
- a missing Airpoints claim action
- eligibility or claim-status signals for supported claims
- handoff pathways to human support
- access to FAQ / knowledge responses through a separate capability

### Known workflow limits already mentioned

- partner-airline Airpoints claim support is limited by API availability
- frontline human teams cannot directly process retro claims themselves in every channel
- some resolutions depend on internal forms or back-office teams
- out-of-scope-but-contact-centre-in-scope requests should usually hand off with continuity rather than dead-end

## Conversation moments

Conversation is the product surface in this experience. The quality of the service is experienced through:

- how the agent opens
- how quickly it gets to the point
- how it asks for missing details
- how it explains eligibility and rejection
- how it handles frustration or ambiguity
- how it preserves continuity when a human handoff is needed

The key conversational moments in R1 include:

- first contact and intent recognition
- collecting minimum viable knowledge
- correcting misunderstandings without blame
- explaining normal delays versus actual problems
- confirming before taking action
- delivering bad news or limitations with composure
- closing with a clear next step or claim reference

## Supported scenarios in current source material

### Evidenced strongly in source

- Claim Missing Airpoints for an Air New Zealand flight
- Clarifying vague mentions of "points"
- Handling missing or wrong identifiers during claim collection
- Explaining normal posting windows and claim expectations
- Handover when a claim cannot be completed in-channel

### Expected later, but not in current focus

- future servicing scenarios beyond missing Airpoints
- multi-intent servicing conversations involving a second request
- more complex booking-servicing edge cases

## Success criteria

The experience is successful when it feels:

- clear: the customer understands what the agent needs and what happens next
- competent: the agent asks the right things and does not wander
- trustworthy: it does not overclaim, guess, or fake access
- Air New Zealand: warm, grounded, and recognisably Kiwi without becoming jokey or loose
- efficient: it keeps the conversation moving toward an outcome
- resilient: it handles ambiguity, frustration, and scope edges without becoming robotic or defensive

It should also reflect the broader client proposition in miniature:

- quietly better rather than showy
- low-stress rather than overly performative
- respectful of time without feeling rushed
- clear and dependable in disruption or uncertainty
- easy to navigate for different access needs

Operationally, the R1 prototype should also support:

- reusable evaluation datasets
- scenario-based testing
- a shared standard for future servicing-agent evaluation
- governance progress toward production readiness

## Out of scope

The current artefacts should not assume the agent is trying to:

- be a general-purpose travel assistant
- cover every Air New Zealand service journey
- impersonate a human with full human discretion
- handle unauthenticated account servicing
- resolve unsupported partner-airline or back-office-only cases end to end
- provide rich voice-specific behaviour
- function as a playful brand mascot first and a servicing agent second

## Open assumptions

- The exact split of responsibilities between the FAQ capability, servicing capability, and front-of-house rewriter still needs to be documented more formally.
- It is not yet confirmed what structured handoff payload is passed to human agents.
- It is not yet confirmed which customer/account attributes are always present at runtime versus only sometimes present.
