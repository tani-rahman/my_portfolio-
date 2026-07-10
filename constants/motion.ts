export const motionConfig = {
  duration: { fast: 0.2, base: 0.45, slow: 0.7 },
  ease: [0.22, 1, 0.36, 1] as const,
  distance: 24,
  stagger: 0.08,
} as const;
