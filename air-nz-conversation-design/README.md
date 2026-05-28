# Air NZ Conversation Design Workspace

This workspace is the source system for building customer-facing conversation prompts for the Air New Zealand servicing agent. It is designed to follow Sam Netherwood's conversation design flow:

1. Establish foundations
2. Turn foundations into model guidance
3. Create the prompt from a brief
4. Test and refine

The point of this workspace is not to jump straight to prompt writing. It is to capture the durable source artefacts that future prompts should be built from and evaluated against.

## What lives here

- `source-material/`
  - Notes on the raw inputs used to build the artefacts
- `artefacts/air-nz/`
  - Shared, reusable foundation files for the Air NZ servicing agent
- `scenarios/`
  - Scenario-specific working files that will later support prompt drafting and review

## Source artefact flow

The artefacts in `artefacts/air-nz/` should be treated as the foundations layer:

- `product-context.md`
- `boundaries.md`
- `brand-voice-for-conversation.md`
- `personality-block.md`
- `conversation-characteristics.md`
- `failure-modes.md`

These are the files a prompt builder should read before generating a scenario prompt. They translate workshop material, product context, servicing constraints, and brand intent into reusable model guidance.

## How to use these artefacts to create a scenario prompt

Use this order:

1. Read the shared Air NZ artefacts under `artefacts/air-nz/`.
2. Create or update the scenario brief for the specific servicing journey.
3. Add scenario-specific test cases and review notes.
4. Draft `prompt-v1.md` only when the scenario brief is specific enough and the available tooling, handoff rules, and output contract are clear.
5. Test the prompt against realistic customer inputs and failure modes, then refine from root cause rather than patching tone line by line.

## Working principles

- Foundations before prompts.
- Treat the markdown files as reusable source files, not presentation docs.
- Use implementation intentions over long example libraries.
- Keep role and relationship guidance near the top of future prompts.
- Put hard boundaries and output contracts near the end of future prompts.
- Define register shifts by conversational context, not generic personality adjectives.
- Make unresolved dependencies explicit.

## Current status

This first pass focuses on the shared foundations for the Air NZ servicing agent in the `Claim Missing Airpoints` R1 servicing scope. `prompt-v1.md` has intentionally not been created yet.

## Expected next step

Create the scenario brief for `Claim Missing Airpoints`.

Do that before generating any `prompt-v1.md` files.

## Deferred work

`Add SSR for Flight Booking` is currently deferred. Keep any SSR material as future scaffolding only and do not treat it as active prompt-building scope until the project is explicitly widened again.
