"use client";

import { animate, motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigationDuration, navigationEase, navigationIndex } from "@/content/navigation";

export function RouteContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const from = previousPath.current;
    previousPath.current = pathname;
    if (from === pathname || !content.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fromIndex = navigationIndex(from);
    const toIndex = navigationIndex(pathname);
    const horizontalOffset = fromIndex >= 0 && toIndex >= 0 ? Math.sign(fromIndex - toIndex) * 10 : 0;
    const animation = content.current.animate([
      { opacity: 0.85, transform: `translate3d(${horizontalOffset}px, 5px, 0)` },
      { opacity: 1, transform: "translate3d(0, 0, 0)" },
    ], {
      duration: navigationDuration,
      easing: `cubic-bezier(${navigationEase.join(", ")})`,
    });
    return () => animation.cancel();
  }, [pathname]);

  return (
    <main id="main-content" tabIndex={-1}>
      <div className="route-content" ref={content}>{children}</div>
    </main>
  );
}

export function Reveal({ children, className, delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className ? `reveal ${className}` : "reveal"}
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.13 }}
      transition={{ duration: 0.48, delay, ease: [0.21, 0.65, 0.34, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 63%"] });
  return (
    <div className="timeline" ref={ref}>
      <motion.div className="timeline-progress" style={{ scaleY: scrollYProgress }} aria-hidden="true" />
      <ol>{children}</ol>
    </div>
  );
}

export function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const number = ref.current;
    if (!number || !inView || reducedMotion) return;

    const animation = animate(0, value, {
      duration: 1.15,
      ease: "easeOut",
      onUpdate(latest) {
        number.textContent = latest.toFixed(decimals);
      },
    });
    return () => animation.stop();
  }, [decimals, inView, reducedMotion, value]);

  return <span ref={ref} aria-hidden="true">{value.toFixed(decimals)}</span>;
}
