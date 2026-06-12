import { addBody, addFooter, addGhostNumber, addPanel, addRule, addSection, addSmallLabel, addText, addTitle, colors, fonts } from "./shared.mjs";

function agendaStep(slide, ctx, { time, title, body, y }) {
  addText(slide, ctx, {
    text: time,
    x: 92,
    y,
    width: 110,
    height: 26,
    face: fonts.mono,
    fontSize: 14,
    color: colors.soft,
  });
  addBody(slide, ctx, title, 220, y - 2, 360, 28, 22);
  addBody(slide, ctx, body, 220, y + 30, 430, 46, 16, colors.soft);
}

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();

  addSection(slide, ctx, "WORKSHOP PLAN");
  addTitle(slide, ctx, "The best use of the session is to inspect one real turn live.", 68, 84, 900, 92, 40);
  addBody(
    slide,
    ctx,
    "A short presentation is enough. The main value is in watching how we separate service truth, turn strategy, and wording in real time.",
    68,
    176,
    760,
    70,
    18,
    colors.soft,
  );

  addRule(slide, ctx, { x: 188, y: 274, w: 2, h: 298, color: colors.ink });
  agendaStep(slide, ctx, {
    time: "00-10 min",
    title: "Walk the stack",
    body: "Discovery inputs -> foundation artefacts -> scenario brief -> Service Agent block -> rewriter.",
    y: 286,
  });
  agendaStep(slide, ctx, {
    time: "10-30 min",
    title: "Tune one live example",
    body: "Pick a claim or limit turn and call whether the issue is tone, flow, or service instruction.",
    y: 382,
  });
  agendaStep(slide, ctx, {
    time: "30-40 min",
    title: "Capture the decisions",
    body: "Document what changed, which layer moved, and what we need to re-test afterwards.",
    y: 478,
  });

  addPanel(slide, ctx, { x: 796, y: 262, width: 340, height: 300, fill: colors.panel });
  addSmallLabel(slide, ctx, "What Lauren can help call", 822, 286, 200);
  addBody(
    slide,
    ctx,
    "- where a response needs more warmth versus more certainty\n- when a repeated explanation is still useful versus just repetitive\n- which moments should feel like hold, repair, or handoff\n- what should stay generic in the rewriter versus journey-specific in the Service Agent block",
    822,
    316,
    250,
    210,
    16,
  );

  addGhostNumber(slide, ctx, "07");
  addFooter(slide, ctx, "Designed for a live TOV refinement workshop", "07");
  return slide;
}
