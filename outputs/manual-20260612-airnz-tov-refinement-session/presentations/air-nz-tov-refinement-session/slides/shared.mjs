export const colors = {
  ink: "#111111",
  soft: "#6a6a6a",
  faint: "#cfcfcf",
  panel: "#f5f5f5",
  white: "#ffffff",
};

export const fonts = {
  title: "Georgia",
  body: "Aptos",
  mono: "Aptos Mono",
};

export function addRule(slide, ctx, { x, y, w, h = 2, color = colors.ink }) {
  return ctx.addShape(slide, {
    x,
    y,
    width: w,
    height: h,
    fill: color,
    line: ctx.line(color, 0),
  });
}

export function addText(slide, ctx, opts) {
  return ctx.addText(slide, {
    color: colors.ink,
    face: fonts.body,
    ...opts,
  });
}

export function addSection(slide, ctx, text, x = 68, y = 42) {
  return addText(slide, ctx, {
    text,
    x,
    y,
    width: 400,
    height: 24,
    face: fonts.mono,
    fontSize: 12,
    color: colors.soft,
  });
}

export function addTitle(slide, ctx, text, x = 68, y = 86, width = 760, height = 150, size = 42) {
  return addText(slide, ctx, {
    text,
    x,
    y,
    width,
    height,
    face: fonts.title,
    fontSize: size,
  });
}

export function addBody(slide, ctx, text, x, y, width, height, size = 18, color = colors.ink) {
  return addText(slide, ctx, {
    text,
    x,
    y,
    width,
    height,
    fontSize: size,
    color,
  });
}

export function addGhostNumber(slide, ctx, number, x = 1040, y = 520) {
  return addText(slide, ctx, {
    text: number,
    x,
    y,
    width: 180,
    height: 110,
    face: fonts.title,
    fontSize: 88,
    color: colors.faint,
    align: "right",
  });
}

export function addFooter(slide, ctx, leftText, pageNumber) {
  addRule(slide, ctx, { x: 68, y: 680, w: 1144, h: 1, color: colors.faint });
  addText(slide, ctx, {
    text: leftText,
    x: 68,
    y: 690,
    width: 900,
    height: 16,
    face: fonts.mono,
    fontSize: 11,
    color: colors.soft,
  });
  addText(slide, ctx, {
    text: pageNumber,
    x: 1100,
    y: 688,
    width: 112,
    height: 18,
    face: fonts.mono,
    fontSize: 11,
    color: colors.soft,
    align: "right",
  });
}

export function addPanel(slide, ctx, { x, y, width, height, fill = colors.panel }) {
  return ctx.addShape(slide, {
    x,
    y,
    width,
    height,
    fill,
    line: ctx.line(colors.faint, 1),
  });
}

export function addSmallLabel(slide, ctx, text, x, y, width = 220) {
  return addText(slide, ctx, {
    text,
    x,
    y,
    width,
    height: 18,
    face: fonts.mono,
    fontSize: 11,
    color: colors.soft,
  });
}

export function addBigIndex(slide, ctx, number, x, y) {
  return addText(slide, ctx, {
    text: number,
    x,
    y,
    width: 60,
    height: 40,
    face: fonts.title,
    fontSize: 28,
    color: colors.soft,
  });
}
