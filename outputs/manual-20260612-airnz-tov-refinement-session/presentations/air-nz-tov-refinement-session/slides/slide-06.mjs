import { addBody, addFooter, addGhostNumber, addPanel, addSection, addSmallLabel, addTitle, colors } from "./shared.mjs";

function insight(slide, ctx, { x, title, body }) {
  addPanel(slide, ctx, { x, y: 262, width: 250, height: 320, fill: colors.white });
  addSmallLabel(slide, ctx, "CURRENT LEARNING", x + 24, 286, 160);
  addBody(slide, ctx, title, x + 24, 314, 196, 110, 26);
  addBody(slide, ctx, body, x + 24, 438, 196, 110, 16, colors.soft);
}

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();

  addSection(slide, ctx, "WHAT WE HAVE LEARNED");
  addTitle(slide, ctx, "The strongest learnings so far are structural.", 68, 84, 820, 92, 40);
  addBody(
    slide,
    ctx,
    "The voice is improving, but the bigger gains are coming from separating the move, the service truth, and the final wording.",
    68,
    176,
    760,
    72,
    18,
    colors.soft,
  );

  insight(slide, ctx, {
    x: 68,
    title: "Early certainty breaks trust.",
    body: "Claim openers should not sound like a claim is underway before the system has actually checked it.",
  });
  insight(slide, ctx, {
    x: 352,
    title: "Repetition reads as lower capability.",
    body: "Repeated reasons, confirmations, and re-greetings make Oscar feel effortful instead of capable.",
  });
  insight(slide, ctx, {
    x: 636,
    title: "Directness has to flex by moment.",
    body: "Clear path means brisk momentum. Constrained path means calm, plain softening without woolliness.",
  });
  insight(slide, ctx, {
    x: 920,
    title: "Most flow fixes are Service Agent fixes.",
    body: "A good sentence cannot rescue a turn whose brief is repeated, under-specified, or strategically wrong.",
  });

  addGhostNumber(slide, ctx, "06");
  addFooter(slide, ctx, "Sourced from feedback-session-synthesis-v1.md, jane-feedback-summary-v1.md, donni-feedback-summary-v1.md", "06");
  return slide;
}
