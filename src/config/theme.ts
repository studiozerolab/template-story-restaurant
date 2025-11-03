/**
 * Theme tokens (easy to swap per client).
 * Default palette: Italian-style restaurant (tomato red, basil green, warm wheat).
 * These sync with CSS variables in global.css.
 */
export const theme = {
  colors: {
    surface: "#ffffff",
    alt: "#faf8f6",
    primary: "#9B1B30",     // deep red (tomato sauce)
    accent: "#006E4F",      // basil green
    secondary: "#F2D16B",   // warm wheat
    mid: "#e5e7eb",
    strong: "#d1d5db",
    primaryTint: "#fdeef1", // gentle red tint
    accentTint: "#e9f5f1",  // gentle green tint
  },
  layout: {
    maxWidthPx: 1180,
    sectionY: { base: "4rem", md: "6rem" }, // vertical rhythm
  },
  gallery: {
    defaultRatio: "4/3" as "4/3" | "1/1" | "16/9" | "3/4" | "auto",
    uniformGrid: true, // if false, per-image ratio can vary
  },
} as const;
