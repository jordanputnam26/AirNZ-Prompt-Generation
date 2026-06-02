# Sam Follow-up Questions

For discussion with Sam on Monday evening.

## Walkthrough

1. Walk through the initial research and evidence layer:
   - Miro boards
   - workshop notes and transcripts
   - branding, tone of voice, persona, and Oscar personality inputs

2. Walk through the supporting Air NZ artefacts created from that research:
   - `product-context.md`
   - `boundaries.md`
   - `brand-voice-for-conversation.md`
   - `personality-block.md`
   - `conversation-characteristics.md`
   - `failure-modes.md`
   - `scenario-brief.md`

3. Walk through the latest system prompt draft:
   - `scenarios/claim-missing-airpoints/prompt-v2.md`

## Priority questions

1. Air NZ versus Virgin Atlantic:
   - Does he agree that the Virgin Atlantic example feels closer to a front-of-house service agent, while the Air NZ implementation now looks more like a rewriter layer for a service agent?

2. Prompt implications:
   - If Air NZ is really a rewriter architecture, what should change in how we structure the system prompt?

3. Rewriter risk:
   - Are we likely to run into structural problems because the service agent is already producing written outputs and the rewriter is polishing those, rather than generating from a cleaner semantic payload?

4. Few-shot parallel:
   - Is a rewriter vulnerable to the same failure mode as prompts that rely too much on few-shot examples, where the wording becomes brittle, repetitive, or over-shaped by the upstream phrasing?

5. Input shape:
   - Is `user_message + original_response` enough for a good rewriter, or does the rewriter really need a little more structured context such as `response_kind`, `exit_point`, protected values, or required snippets?

6. Skip logic:
   - Which kinds of service outcomes should never be rewritten?
   - Which should always be rewritten?
   - Which are case-by-case?
