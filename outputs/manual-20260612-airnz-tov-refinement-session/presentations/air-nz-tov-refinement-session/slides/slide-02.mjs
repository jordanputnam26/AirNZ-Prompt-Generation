import { addBody, addFooter, addGhostNumber, addRule, addSection, addText, addTitle, colors, fonts } from "./shared.mjs";

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();

  addSection(slide, ctx, "SESSION FRAMING");
  addTitle(slide, ctx, "Two questions are driving the session.", 68, 84, 780, 90, 40);
  addBody(
    slide,
    ctx,
    "The deck only needs to orient the room. The useful part is making the logic legible enough that we can tune a real example together.",
    68,
    172,
    760,
    70,
    18,
    colors.soft,
  );

  addRule(slide, ctx, { x: 638, y: 260, w: 1, h: 300, color: colors.faint });

  addText(slide, ctx, {
    text: "01",
    x: 68,
    y: 274,
    width: 70,
    height: 46,
    face: fonts.title,
    fontSize: 34,
    color: colors.soft,
  });
  addText(slide, ctx, {
    text: "How do we progressively iterate\nthe tone without over-adjusting\nthe prompt or changing\nbehaviour somewhere else?",
    x: 148,
    y: 278,
    width: 392,
    height: 164,
    fontSize: 26,
  });
  addBody(
    slide,
    ctx,
    "This is the scope-control problem: what to change, where to change it, and how to avoid regressions.",
    148,
    470,
    390,
    88,
    17,
    colors.soft,
  );

  addText(slide, ctx, {
    text: "02",
    x: 690,
    y: 274,
    width: 70,
    height: 46,
    face: fonts.title,
    fontSize: 34,
    color: colors.soft,
  });
  addText(slide, ctx, {
    text: "How do the conversation\nmodes stack together\nunderneath the final wording,\nespecially when a turn\nbecomes plan, action, hold,\nrepair, or handoff?",
    x: 770,
    y: 278,
    width: 360,
    height: 184,
    fontSize: 26,
  });
  addBody(
    slide,
    ctx,
    "This is the flow-state problem: which decisions belong in the service layer, and which belong in the rewriter.",
    770,
    486,
    360,
    88,
    17,
    colors.soft,
  );

  addRule(slide, ctx, { x: 68, y: 590, w: 1090, h: 1, color: colors.ink });
  addBody(
    slide,
    ctx,
    "The answer to both questions is the same: treat tone, turn strategy, and service truth as separate variables.",
    68,
    608,
    980,
    38,
    22,
  );

  addGhostNumber(slide, ctx, "02");
  addFooter(slide, ctx, "Framed from Lauren's notes for the deep dive", "02");
  return slide;
}
