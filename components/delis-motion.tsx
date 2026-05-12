"use client";

import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { deliWhileInViewViewport, type DeliScrollTriggerViewport } from "@/lib/delis-motion-viewport";
import { useDeliCompactViewport } from "@/lib/use-deli-compact-viewport";

export const deliEase = [0.22, 1, 0.36, 1] as const;

export const deliViewport = deliWhileInViewViewport;

export const deliSectionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 44 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
} as const;

export type DeliSectionMotion = keyof typeof deliSectionVariants;

export const deliSectionTransition = { duration: 0.68, ease: deliEase } as const;

export function DelisMotionShell({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/** Header sans animation — évite écran vide si JS / motion ou préférences système bloquent le rendu. */
export function DelisHeaderBar({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={className}>{children}</div>;
}

/** Hero : léger fade + léger décalage vertical uniquement (pas de blur). */
export function DelisHeroIntro({ className, children }: { className?: string; children: ReactNode }) {
  const compact = useDeliCompactViewport();
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const y = compact ? 14 : 22;
  const duration = compact ? 0.42 : 0.55;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: deliEase, delay: compact ? 0 : 0.04 }}
    >
      {children}
    </motion.div>
  );
}

export function DelisSection({
  id,
  className,
  children,
  motion: motionName = "fadeUp",
  transition = deliSectionTransition,
  viewport = deliWhileInViewViewport,
  "aria-label": ariaLabel,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  motion?: DeliSectionMotion;
  transition?: { duration: number; ease: readonly [number, number, number, number] };
  viewport?: DeliScrollTriggerViewport;
  "aria-label"?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <section id={id} aria-label={ariaLabel} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={deliSectionVariants[motionName]}
      transition={transition}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function DelisStagger({
  className,
  children,
  stagger = 0.08,
  delayChildren = 0.06,
  viewport = deliWhileInViewViewport,
}: {
  className?: string;
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  viewport?: DeliScrollTriggerViewport;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function DelisStaggerItem({
  children,
  className,
  slide = "up",
  duration = 0.5,
}: {
  children: ReactNode;
  className?: string;
  slide?: "up" | "left" | "right";
  duration?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const dir =
    slide === "left" ? { x: -22, y: 0 } : slide === "right" ? { x: 22, y: 0 } : { x: 0, y: 22 };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...dir },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration, ease: deliEase } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Rubrique menu : même entrée que les sections (`fadeUp` + viewport commun). */
export function DelisMenuCategory({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const compact = useDeliCompactViewport();
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={deliWhileInViewViewport}
      variants={deliSectionVariants.fadeUp}
      transition={
        compact ? { duration: 0.52, ease: deliEase } : deliSectionTransition
      }
    >
      {children}
    </motion.div>
  );
}

export function DelisCarteIntroReveal({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const compact = useDeliCompactViewport();
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={compact ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={
        compact
          ? { once: true, amount: 0.08, margin: "0px 0px 56px 0px" }
          : { once: true, amount: 0.1, margin: "0px 0px 104px 0px" }
      }
      transition={{ duration: compact ? 0.32 : 0.42, ease: deliEase }}
    >
      {children}
    </motion.div>
  );
}

export function DelisReveal({
  children,
  className,
  delay = 0,
  duration = 0.58,
  viewport = deliWhileInViewViewport,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewport?: DeliScrollTriggerViewport;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration, delay, ease: deliEase }}
    >
      {children}
    </motion.div>
  );
}

export function DelisFooter({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <footer className={className}>{children}</footer>;

  return (
    <motion.footer
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={deliWhileInViewViewport}
      transition={{ duration: 0.48, ease: deliEase }}
    >
      {children}
    </motion.footer>
  );
}
