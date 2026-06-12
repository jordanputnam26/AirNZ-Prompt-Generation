import { addBody, addFooter, addGhostNumber, addPanel, addRule, addSection, addSmallLabel, addTitle, colors } from "./shared.mjs";

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();

  addSection(slide, ctx, "FLOW STATES");
  addTitle(slide, ctx, "Most flow-state behaviour lives upstream of tone.", 68, 84, 860, 90, 40);
  addBody(
    slide,
    ctx,
    "The sentence can be well written and still feel wrong if the underlying move is wrong, repeated, too certain, or timed badly.",
    68,
    176,
    760,
    68,
    18,
    colors.soft,
  );

  addPanel(slide, ctx, { x: 68, y: 272, width: 1144, height: 102, fill: colors.white });
  addSmallLabel(slide, ctx, "FOUNDATIONS", 94, 292, 180);
  addBody(
    slide,
    ctx,
    "Brand voice\nBoundaries\nConversation characteristics",
    94,
    314,
    280,
    48,
    20,
  );
  addBody(
    slide,
    ctx,
    "Defines the enduring Air NZ service posture.\nThis is the stable voice and behaviour layer.",
    476,
    308,
    420,
    52,
    18,
    colors.soft,
  );

  addPanel(slide, ctx, { x: 68, y: 396, width: 1144, height: 126, fill: colors.panel });
  addSmallLabel(slide, ctx, "SERVICE AGENT BLOCK", 94, 416, 220);
  addBody(
    slide,
    ctx,
    "service_type\nresponse_kind\nexit_point\ncustomer_facing_task\nfacts_to_include\nnext_action",
    94,
    438,
    310,
    72,
    18,
  );
  addBody(
    slide,
    ctx,
    "This is where most conversation states are currently expressed.\nIt carries the turn strategy before wording happens.",
    476,
    440,
    470,
    58,
    20,
  );

  addPanel(slide, ctx, { x: 68, y: 544, width: 1144, height: 102, fill: colors.white });
  addSmallLabel(slide, ctx, "REWRITER", 94, 564, 180);
  addBody(
    slide,
    ctx,
    "PROGRESS\nLIMIT\nHOLD\nREPAIR\nHANDOFF",
    94,
    586,
    220,
    50,
    20,
  );
  addBody(
    slide,
    ctx,
    "Chooses the right move and translates the block into Oscar-language.\nIt should not invent service truth or rewrite the journey logic.",
    476,
    582,
    500,
    56,
    18,
    colors.soft,
  );

  addGhostNumber(slide, ctx, "04");
  addFooter(slide, ctx, "Grounded in feedback-session-synthesis-v1.md and oscar-rewriter-system-prompt-v8.md", "04");
  return slide;
}
