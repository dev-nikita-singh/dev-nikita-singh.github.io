"use client";

import {
  useRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max 2D lean in degrees (before speed boost). */
  maxTilt?: number;
  style?: CSSProperties;
};

/**
 * Instagram-style 2D tilt: flat rotate + translate from cursor position/speed.
 * No perspective, no rotateX/Y.
 */
export function TiltCard({
  children,
  className,
  maxTilt = 4,
  style,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const target = useRef({ x: 0, y: 0, r: 0 });
  const current = useRef({ x: 0, y: 0, r: 0 });

  const apply = () => {
    const el = ref.current;
    if (!el) return;
    const c = current.current;
    const t = target.current;
    c.x += (t.x - c.x) * 0.18;
    c.y += (t.y - c.y) * 0.18;
    c.r += (t.r - c.r) * 0.18;
    el.style.transform = `translate(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px) rotate(${c.r.toFixed(2)}deg)`;
    if (
      Math.abs(t.x - c.x) > 0.05 ||
      Math.abs(t.y - c.y) > 0.05 ||
      Math.abs(t.r - c.r) > 0.02
    ) {
      rafRef.current = requestAnimationFrame(apply);
    }
  };

  const queue = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(apply);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
    const ny = (e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
    const speed = Math.hypot(e.movementX, e.movementY);
    const boost = Math.min(1.8, 1 + speed / 40);

    // 2D lean + slide toward cursor (Instagram-like flat tilt)
    target.current.x = nx * 14 * boost;
    target.current.y = ny * 10 * boost;
    target.current.r = nx * maxTilt * boost + (e.movementX / 40) * maxTilt * 0.4;
    queue();
  };

  const onPointerLeave = () => {
    target.current = { x: 0, y: 0, r: 0 };
    queue();
  };

  return (
    <div
      ref={ref}
      className={cn("tilt-card will-change-transform", className)}
      style={style}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}
