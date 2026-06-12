# Add Meal Booking Selection UX Plan v1

This note responds to the current add-meal ambiguity problem where Oscar may need to show several possible bookings and ask the customer to choose one.

It is grounded in two existing workspace principles:

- confirmation turns should make the details easy to verify first, then ask one clean confirmation question
- the add-meal flow already expects Oscar to identify the likely booking before making changes

Relevant references:

- `air-nz-conversation-design/system-prompt/oscar-rewriter-system-prompt-v8.md`
- `air-nz-conversation-design/playground-testing-documents/Add_Meal_Live_Demo_Sequence_v1.md`

## 1. What we control right now

Based on Jared's note, the current surface is text-only. That still gives us meaningful control over:

- the order bookings are shown in
- how many bookings are shown at once
- which fields are shown first
- the wording of the lead-in and the confirmation question
- whether the customer is asked to choose from a list or first narrow the set down
- whether repeated or low-value detail is suppressed

The main recommendation is to keep the list rendering deterministic rather than letting the LLM invent formatting each time.

The LLM can still write the short lead-in and the direct question, but the booking list itself should come from stable display rules.

## 2. Text-first UX principles

### A. Lead with recognisable details, not system identifiers

Customers usually recognise a trip by date, destination, and who is travelling. They do not naturally recognise it by booking reference alone.

That means the booking reference should stay visible, but it should not be the main headline for each option.

Preferred order:

1. flight date
2. route
3. customers on the booking
4. booking reference

### B. One decision per turn

The turn should only ask the customer to identify the booking.

It should not also ask which meal they want, explain special meal rules, or imply the change is already underway.

### C. Reduce visual density

The current example feels heavy because every option is verbose and visually similar.

Text-only formatting should therefore:

- keep each option to two or three short lines
- avoid repeating labels unnecessarily
- avoid long wrapped sentences inside each option
- use consistent spacing between options

### D. Cap the number of visible options

If there are too many similar bookings, dumping the full list increases effort and lowers confidence.

Recommended rule:

- if there is 1 likely booking, show it and ask for confirmation
- if there are 2 or 3 plausible bookings, show all of them
- if there are 4 or more plausible bookings, do not show the full list first; ask a narrowing question or show the top 3 and provide a fallback path

### E. Ask for one simple reply format

Do not make the customer guess how to answer.

The turn should explicitly say they can reply with:

- the option number
- the booking reference
- one extra disambiguator such as destination or travel date

### F. Keep duplicates distinguishable

If two bookings are visually very similar, add the one extra field that actually separates them.

Useful discriminators:

- number of customers on the booking
- multi-sector versus single-sector trip
- outbound date if the routes are the same

## 3. Recommended text rendering pattern

Use this shape for multi-booking disambiguation:

1. short lead-in
2. compact option list
3. one direct question
4. one fallback instruction

Suggested template:

```text
I found a few bookings that could match.

1. 20 Aug 2099, Auckland to Sydney
   Customers: James Demo
   Booking reference: XYZ790

2. 20 Aug 2099, Auckland to Sydney
   Customers: James Demo, Emily Demo
   Booking reference: XYZ791

3. 2 Feb 2025, Auckland to Wellington
   Customers: James Demo
   Booking reference: ABC125

Which booking would you like me to update?
Reply with the number or the booking reference.
```

This works better than the current pattern because:

- the route and date become scannable
- the customer can compare options without reading full sentences
- the final question is clear and singular
- the reply format is explicit

## 4. Recommended logic for when many bookings exist

When 4 or more plausible bookings are returned, use a narrowing step instead of a long list.

Suggested approach:

### Option A: ask a narrowing question first

```text
I found a few bookings that could match.

Is this for:
- Sydney on 20 Aug
- Wellington on 2 Feb

If not, send me the booking reference and I can use that instead.
```

### Option B: show only the top 3 and expose the fallback path

```text
I found a few bookings that could match.

1. 20 Aug 2099, Auckland to Sydney
   Customers: James Demo
   Booking reference: XYZ790

2. 20 Aug 2099, Auckland to Sydney
   Customers: James Demo, Emily Demo
   Booking reference: XYZ791

3. 20 Aug 2099, Auckland to Sydney
   Customers: James Demo
   Booking reference: XYZ792

Which booking would you like me to update?
Reply with the number or booking reference.
If it is another trip, send the destination or travel date.
```

Option A is better when the list is large and varied.

Option B is better when the list is large but mostly near-duplicates.

## 5. Ranking and ordering rules

The display order should not be arbitrary.

Recommended sort order:

1. bookings most relevant to the customer's latest message
2. nearest upcoming travel date
3. bookings with the clearest meal-request fit
4. older or less relevant bookings last

Examples:

- if the customer says "next week", future bookings should rank ahead of past bookings
- if the customer mentions an international long-haul trip, domestic bookings should rank lower
- if the customer mentions "my partner and I", two-customer bookings should rank higher

## 6. Data fields to show and hide

Show by default:

- flight date
- route
- customers
- booking reference

Show only when needed:

- second sector details for multi-sector trips
- extra context that differentiates similar bookings

Do not show by default:

- internal labels
- SSR terminology
- full paragraph descriptions
- unnecessary apology or explanation before the customer has selected the booking

Also keep the customer-facing label aligned with the current prompt rules:

- use `Customers`, not `Passengers`

## 7. Content guidance for Oscar's voice

The tone should feel calm and onto it.

For this specific step:

- acknowledge the request briefly
- avoid sounding uncertain or overly apologetic
- do not imply the meal can be added until the booking is confirmed
- keep the question as a real question

This lines up well with the current rewriter rules around:

- making details easy to verify first
- asking one clean confirmation question
- not creating false momentum

## 8. Recommended implementation plan for text

### Phase 1: define the display contract

- Create a structured booking-option payload for the renderer
- Separate conversational lead-in from booking-list rendering
- Define the exact fields and order for each option

### Phase 2: add deterministic list rendering

- Build one formatter for `1 booking`
- Build one formatter for `2 to 3 bookings`
- Build one formatter for `4+ bookings`
- Keep the list formatting outside the LLM where possible

### Phase 3: add ranking and narrowing logic

- rank bookings against cues in the customer message
- cap the number shown
- add a narrowing-question path for long lists

### Phase 4: test against edge cases

- several near-identical future bookings
- single-sector and multi-sector mixes
- past and future bookings returned together
- solo and multi-customer bookings with the same route
- cases where the customer already supplied the booking reference

## 9. What becomes possible with HTML and JavaScript later

If the surface moves beyond plain text, this interaction gets much easier.

Best next-step opportunities:

- clickable booking cards instead of typed replies
- a prompt-pill action that inserts the booking reference into the user's next message
- expand and collapse for multi-sector itineraries
- clear visual hierarchy with date and route as the main headline
- secondary metadata tucked underneath
- filters such as `upcoming`, `international`, or `travelling with others`
- a dedicated `None of these` action

At that point the ideal pattern is not "smarter text". It is structured data rendered as interactive UI.

The architecture should still stay the same:

- the service layer returns structured booking candidates
- the renderer decides how to display them
- the LLM handles the surrounding conversational copy, not the card layout itself

## 10. Recommended next move

For the current text-only state, the best move is:

1. move to deterministic booking-list rendering
2. reorder each option so date and route come first
3. cap visible options and introduce a narrowing path
4. keep Oscar's turn to one clean booking-selection question

If the team later gets web capability, the first enhancement worth doing is clickable booking cards with a fallback text reply path.
