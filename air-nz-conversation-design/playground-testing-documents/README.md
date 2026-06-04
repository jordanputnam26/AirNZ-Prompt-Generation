# Playground Testing

This folder holds downstream testing materials for the Air New Zealand conversation-design work.

It sits after the main prompt-building flow:
- source material
- compressed artefacts
- scenario prompt drafts
- playground testing and client evaluation

## What Belongs Here

- client-facing testing guides
- Tone of Voice Playground instructions
- evaluator checklists
- example test setups
- other documents used to pressure-test the prompt with stakeholders

## What Does Not Belong Here

- raw workshop transcripts
- Miro exports
- personas source files
- core prompt-building artefacts

Those belong elsewhere in this workspace so source evidence, interpreted guidance, and testing outputs stay separate.

## Current Files

- `Air_NZ_Oscar_User_Guide.html`
- `Air_NZ_Oscar_User_Guide_v2.html`
- `Air_NZ_Oscar_User_Guide_v3.html`
- `Air_NZ_Oscar_Evaluation_Checklist_v1.html`
- `Air_NZ_Oscar_Structured_Test_Inputs_v1.md`
- `Add_Meal_Live_Demo_Sequence_v1.md`
- `Add_Meal_Live_Demo_Sequence_v1.html`
- `Airpoints_Claim_Live_Demo_Sequence_v1.md`
- `Airpoints_Claim_Live_Demo_Sequence_v1.html`

Recommended current pack:
- `Air_NZ_Oscar_User_Guide_v3.html`
- `Air_NZ_Oscar_Evaluation_Checklist_v1.html`
- `Add_Meal_Live_Demo_Sequence_v1.html`
- `Airpoints_Claim_Live_Demo_Sequence_v1.html`

The `v3` guide is the current prompt-derived testing guide for Oscar on the `Claim Missing Airpoints` scenario. It supports both:
- structured service-contract tests
- persona-led conversation tests

The checklist is its matching companion document and uses the same sections, checkpoint logic, and evidence standard.

The structured test inputs file contains the full copy-paste payloads for the four core contract-based tests:
- ask_missing
- ask_confirm
- execute
- ineligible

The two `Live_Demo_Sequence` files are now the canonical journey test packs, even though the filenames have not been changed yet. Use them as the single test sequence for:

- Add Meal
- Airpoints Claim

## Relationship To The Prompt Drafts

Use this folder alongside:
- `/Users/jordanputnam/Documents/Air-NZ-Prompt-Building-Workspace/air-nz-conversation-design/artefacts/air-nz/`
- `/Users/jordanputnam/Documents/Air-NZ-Prompt-Building-Workspace/air-nz-conversation-design/scenarios/claim-missing-airpoints/`

The artefacts and prompts define what Oscar should be.

The playground-testing materials define how client teams should test whether Oscar is behaving that way in practice.
