import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function shouldAnimate(): boolean {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function animateLineReveal(
  containerSelector: string,
  options?: {
    start?: string;
    duration?: number;
    stagger?: number;
    ease?: string;
  },
) {
  const lines = document.querySelectorAll<HTMLElement>(
    `${containerSelector} [data-line]`,
  );
  if (!lines.length) return;
  const opts = {
    start: "top 85%",
    duration: 1.1,
    stagger: 0.1,
    ease: "expo.out",
    ...options,
  };
  ScrollTrigger.batch(lines, {
    onEnter: (els) =>
      gsap.to(els, {
        y: "0%",
        duration: opts.duration,
        stagger: opts.stagger,
        ease: opts.ease,
      }),
    start: opts.start,
  });
}

export function animateFadeIn(
  containerSelector: string,
  options?: {
    start?: string;
    duration?: number;
    stagger?: number;
    ease?: string;
  },
) {
  const fades = document.querySelectorAll<HTMLElement>(
    `${containerSelector} [data-fade]`,
  );
  if (!fades.length) return;
  const opts = {
    start: "top 90%",
    duration: 1,
    stagger: 0.1,
    ease: "expo.out",
    ...options,
  };
  ScrollTrigger.batch(fades, {
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: opts.duration,
        stagger: opts.stagger,
        ease: opts.ease,
      }),
    start: opts.start,
  });
}

export function animateZoomIn(
  containerSelector: string,
  options?: {
    start?: string;
    duration?: number;
    stagger?: number;
    ease?: string;
  },
) {
  const els = document.querySelectorAll<HTMLElement>(
    `${containerSelector} [data-zoom]`,
  );
  if (!els.length) return;
  const opts = {
    start: "top 85%",
    duration: 1.2,
    stagger: 0.15,
    ease: "expo.out",
    ...options,
  };
  ScrollTrigger.batch(els, {
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        scale: 1,
        duration: opts.duration,
        stagger: opts.stagger,
        ease: opts.ease,
      }),
    start: opts.start,
  });
}

export function animateStaggerList(
  containerSelector: string,
  options?: {
    start?: string;
    duration?: number;
    stagger?: number;
    ease?: string;
  },
) {
  const els = document.querySelectorAll<HTMLElement>(
    `${containerSelector} [data-stagger]`,
  );
  if (!els.length) return;
  const opts = {
    start: "top 85%",
    duration: 0.9,
    stagger: 0.08,
    ease: "expo.out",
    ...options,
  };
  ScrollTrigger.batch(els, {
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: opts.duration,
        stagger: opts.stagger,
        ease: opts.ease,
      }),
    start: opts.start,
  });
}


