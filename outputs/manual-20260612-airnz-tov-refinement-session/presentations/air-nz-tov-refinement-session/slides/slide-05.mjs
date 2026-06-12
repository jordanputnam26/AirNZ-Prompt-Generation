import { addBody, addFooter, addGhostNumber, addPanel, addRule, addSection, addSmallLabel, addText, addTitle, colors, fonts } from "./shared.mjs";

function loopStep(slide, ctx, { n, title, body, x, y, w = 250 }) {
  addText(slide, ctx, {
    text: n,
    x,
    y,
    width: 42,
    height: 26,
    face: fonts.title,
    fontSize: 24,
    color: colors.soft,
  });
  addBody(slide, ctx, title, x + 34, y - 2, w - 34, 48, 20);
  addBody(slide, ctx, body, x + 34, y + 52, w, 84, 15, colors.soft);
}

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();

  addSection(slide, ctx, "ITERATION DISCIPLINE");
  addTitle(slide, ctx, "We tune one layer at a time.", 68, 84, 700, 92, 40);
  addBody(
    slide,
    ctx,
    "The safest way to improve tone is to isolate the variable, assign ownership, and re-run the same contrasting states after every change.",
    68,
    176,
    700,
    72,
    18,
    colors.soft,
  );

  loopStep(slide, ctx, {
    n: "01",
    title: "Run the canonical pack",
    body: "Use frustrated, clean, and handoff cases so the contrast between moments stays visible.",
    x: 96,
    y: 286,
  });
  loopStep(slide, ctx, {
    n: "02",
    title: "Mark the failure precisely",
    body: "Is it early certainty, repetition, wrong pacing, poor explanation, weak handoff, or something else?",
    x: 382,
    y: 286,
  });
  loopStep(slide, ctx, {
    n: "03",
    title: "Assign the owner",
    body: "Flow design, Service Agent block, or System Prompt. Do not patch all three at once.",
    x: 650,
    y: 286,
    w: 220,
  });
  loopStep(slide, ctx, {
    n: "04",
    title: "Patch one layer only",
    body: "Keep the change narrow enough that we can explain what moved and why.",
    x: 240,
    y: 440,
  });
  loopStep(slide, ctx, {
    n: "05",
    title: "Re-run regressions",
    body: "Check the same states again so a fix for warmth does not quietly damage clarity or trust.",
    x: 526,
    y: 440,
  });

  addPanel(slide, ctx, { x: 940, y: 250, width: 240, height: 330, fill: colors.panel });
  addSmallLabel(slide, ctx, "Operating rules", 964, 272, 180);
  addBody(
    slide,
    ctx,
    "- keep claims in an \"I can look into it\" mode until checked\n- do not do a big tone pass before scope is clear\n- treat repeated misunderstanding and handoff as flow problems first\n- keep the test pack stable while the prompt changes",
    964,
    300,
    180,
    228,
    15,
  );

  addGhostNumber(slide, ctx, "05");
  addFooter(slide, ctx, "Based on current testing practice and June feedback synthesis", "05");
  return slide;
}
