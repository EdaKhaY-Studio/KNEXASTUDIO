/**
 * Shared animation variants & hooks for KNEXU STUDIO
 * Uses framer-motion v11
 */

// ── Viewport defaults ──────────────────────────────────────────────────────
export const VIEWPORT = { once: true, margin: '-80px' } as const;

// ── Base variants ──────────────────────────────────────────────────────────

/** Fade up — default entry for most elements */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in — for elements that shouldn't shift */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/** Slide in from left */
export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slide in from right */
export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Scale + fade — great for cards and badges */
export const scaleFade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Stagger container variants ─────────────────────────────────────────────

/** Wrap card grids in this — children animate in sequence */
export const staggerContainer = (stagger = 0.1, delayStart = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delayStart,
    },
  },
});

/** Child card inside a stagger container */
export const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Hover presets ──────────────────────────────────────────────────────────

export const hoverLift = {
  whileHover: { y: -4, scale: 1.02, transition: { duration: 0.25 } },
  whileTap:   { scale: 0.97 },
};

export const hoverGlow = {
  whileHover: { scale: 1.04, transition: { duration: 0.2 } },
  whileTap:   { scale: 0.96 },
};
