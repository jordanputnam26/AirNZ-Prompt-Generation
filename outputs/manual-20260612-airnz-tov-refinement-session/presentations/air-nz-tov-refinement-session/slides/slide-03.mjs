import { addBody, addFooter, addGhostNumber, addPanel, addRule, addSection, addSmallLabel, addText, addTitle, colors, fonts } from "./shared.mjs";

function step(slide, ctx, { n, x, title, body }) {
  addText(slide, ctx, {
    text: n,
    x,
    y: 254,
    width: 38,
    height: 30,
    face: fonts.title,
    fontSize: 26,
    color: colors.soft,
  });
  addBody(slide, ctx, title, x, 292, 178, 64, 24);
  addBody(slide, ctx, body, x, 360, 178, 122, 16, colors.soft);
}

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();

  addSection(slide, ctx, "PROCESS");
  addTitle(slide, ctx, "We build the rewriter as the last layer, not the first.", 68, 84, 880, 92, 40);
  addBody(
    slide,
    ctx,
    "The workspace follows a foundations-before-prompts flow so the tone work stays grounded in service design, not line editing in isolation.",
    68,
    176,
    760,
    70,
    18,
    colors.soft,
  );

  addRule(slide, ctx, { x: 98, y: 232, w: 1080, h: 1, color: colors.faint });
  step(slide, ctx, {
    n: "01",
    x: 98,
    title: "Discovery sessions",
    body: "Workshop notes, transcripts, service constraints, and voice cues.",
  });
  step(slide, ctx, {
    n: "02",
    x: 320,
    title: "Foundation artefacts",
    body: "Brand voice, boundaries, personality, failure modes, and conversation characteristics.",
  });
  step(slide, ctx, {
    n: "03",
    x: 542,
    title: "Scenario brief + tests",
    body: "Define the job, the limits, and the cases that should pressure-test the journey.",
  });
  step(slide, ctx, {
    n: "04",
    x: 764,
    title: "Service Agent block",
    body: "Carry the turn brief: task, facts, next action, protected values, and boundaries.",
  });
  step(slide, ctx, {
    n: "05",
    x: 986,
    title: "Oscar rewriter",
    body: "Turn the grounded turn brief into customer-facing Air NZ language.",
  });

  addPanel(slide, ctx, { x: 68, y: 560, width: 1144, height: 86, fill: colors.panel });
  addSmallLabel(slide, ctx, "Why this matters", 92, 578, 200);
  addBody(
    slide,
    ctx,
    "If we skip straight to prompt tuning, we lose the ability to tell whether a weak output is a tone issue, a flow issue, or a missing service instruction.",
    92,
    602,
    980,
    30,
    18,
  );

  addGhostNumber(slide, ctx, "03");
  addFooter(slide, ctx, "Source flow from air-nz-conversation-design/README.md", "03");
  return slide;
}
