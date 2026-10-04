"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Small soft soul trail (difference) + a real, non-rotating cursor tip.
 * Trail edges are blurred blobs — short-lived, not a sharp glyph.
 */
export function SoulCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const tip = tipRef.current;
    if (!canvas || !tip) return;

    const touchPrimary = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touchPrimary || reduce) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    document.documentElement.classList.add("soul-cursor-active");

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;

    let sx = -999;
    let sy = -999;
    let px = -999;
    let py = -999;
    let lastMove = 0;
    let active = false;

    // Short linger + quick fade
    const TRAIL_MS = 160;
    const LERP = 0.22;
    const FADE = 0.14;
    const RADIUS = 28;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /** Soft circular brush — smooth edges only */
    const stamp = (x: number, y: number, strength: number, radius: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
      g.addColorStop(0, `rgba(255,255,255,${0.55 * strength})`);
      g.addColorStop(0.35, `rgba(255,255,255,${0.22 * strength})`);
      g.addColorStop(0.7, `rgba(255,255,255,${0.06 * strength})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      if (!active) {
        sx = px;
        sy = py;
        active = true;
      }
      lastMove = performance.now();
    };

    const tick = (now: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${FADE})`;
      ctx.fillRect(0, 0, width, height);

      const moving = active && now - lastMove < TRAIL_MS;
      if (active) {
        const dx = px - sx;
        const dy = py - sy;
        sx += dx * LERP;
        sy += dy * LERP;

        const dist = Math.hypot(px - sx, py - sy);
        const life = moving
          ? 1
          : Math.max(0, 1 - (now - lastMove) / TRAIL_MS);
        const strength = Math.max(
          0.05,
          life * (0.4 + Math.min(1, dist / 24) * 0.6),
        );

        if (life > 0.02) {
          stamp(sx, sy, strength, RADIUS);
          if (moving && dist > 1.5) {
            stamp(sx - dx * 0.35, sy - dy * 0.35, strength * 0.45, RADIUS * 0.85);
          }
        }

        // Real cursor tip — fixed orientation, never rotates
        tip.style.opacity = "1";
        tip.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tip.style.opacity = "0";
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("soul-cursor-active");
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="soul-canvas" aria-hidden="true" />
      <div ref={tipRef} className="soul-tip-arrow" aria-hidden="true">
        {/* Classic OS pointer — tip at top-left (0,0) */}
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M4.2 2.4 L4.2 18.2 L8.6 14.1 L12.4 22.2 L15.1 21 L11.2 12.7 L17.6 12.7 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </>
  );
}
