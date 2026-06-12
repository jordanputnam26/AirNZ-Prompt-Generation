import { addBody, addFooter, addGhostNumber, addRule, addSection, addSmallLabel, addText, addTitle, colors, fonts } from "./shared.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();

  addSection(slide, ctx, "AIR NZ / OSCAR");
  addTitle(slide, ctx, "Tone of voice refinement for the rewriter.", 68, 104, 760, 170, 48);
  addBody(
    slide,
    ctx,
    "A short map of how we are iterating on wording, flow states, and behavioural safety without breaking the service logic underneath.",
    68,
    286,
    640,
    120,
    22,
    colors.soft,
  );

  addRule(slide, ctx, { x: 780, y: 104, w: 2, h: 420, color: colors.ink });
  addSmallLabel(slide, ctx, "Session", 824, 118, 220);
  addBody(slide, ctx, "Lauren deep dive\nTuesday 9:30 AEST / 11:30 NZT", 824, 142, 280, 86, 20);

  addSmallLabel(slide, ctx, "Focus", 824, 256, 220);
  addBody(
    slide,
    ctx,
    "1. Progressive iteration\n2. Conversation flow states\n3. What belongs in which layer",
    824,
    280,
    290,
    116,
    20,
  );

  addSmallLabel(slide, ctx, "Grounded in", 824, 430, 220);
  addBody(
    slide,
    ctx,
    "workspace artefacts\nService Agent blocks\nJune feedback synthesis",
    824,
    454,
    280,
    110,
    18,
  );

  addGhostNumber(slide, ctx, "01", 1010, 540);
  addFooter(slide, ctx, "Air NZ TOV refinement session", "01");
  return slide;
}
