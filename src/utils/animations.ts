import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function shouldAnimate(): boolean {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type AnimType = "line" | "fade" | "zoom" | "stagger";

type AnimOpts = {
  start?: string;
  duration?: number;
  stagger?: number;
  ease?: string;
};

const DEFAULTS: Record<
  AnimType,
  { selector: string; vars: Record<string, unknown>; opts: AnimOpts }
> = {
  line: {
    selector: "[data-line]",
    vars: { y: "0%" },
    opts: { start: "top 85%", duration: 1.1, stagger: 0.1, ease: "expo.out" },
  },
  fade: {
    selector: "[data-fade]",
    vars: { opacity: 1, y: 0 },
    opts: { start: "top 90%", duration: 1, stagger: 0.1, ease: "expo.out" },
  },
  zoom: {
    selector: "[data-zoom]",
    vars: { opacity: 1, scale: 1 },
    opts: { start: "top 85%", duration: 1.2, stagger: 0.15, ease: "expo.out" },
  },
  stagger: {
    selector: "[data-stagger]",
    vars: { opacity: 1, y: 0 },
    opts: { start: "top 85%", duration: 0.9, stagger: 0.08, ease: "expo.out" },
  },
};

function animate(container: string, type: AnimType, overrides?: AnimOpts) {
  const { selector, vars, opts } = DEFAULTS[type];
  const els = document.querySelectorAll<HTMLElement>(`${container} ${selector}`);
  if (!els.length) return;
  const merged = { ...opts, ...overrides };
  ScrollTrigger.batch(els, {
    onEnter: (batch) => gsap.to(batch, { ...vars, duration: merged.duration, stagger: merged.stagger, ease: merged.ease }),
    start: merged.start,
  });
}

export const animateLineReveal = (c: string, o?: AnimOpts) => animate(c, "line", o);
export const animateFadeIn = (c: string, o?: AnimOpts) => animate(c, "fade", o);
export const animateZoomIn = (c: string, o?: AnimOpts) => animate(c, "zoom", o);
export const animateStaggerList = (c: string, o?: AnimOpts) => animate(c, "stagger", o);


