"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** A decorative, morphing parametric surface. All geometry is generated locally. */
export function KineticSculpture({ mode }: { mode: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const targetMode = useRef(mode);
  useEffect(() => {
    targetMode.current = mode;
  }, [mode]);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const context = element.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const root = document.documentElement;
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastFrame = 0;
    let visible = true;
    let angle = 0.45;
    let pointerX = 0;
    let pointerY = 0;
    let easeX = 0;
    let easeY = 0;
    let weights = [1, 0, 0, 0];
    let dragX = 0;
    let dragging = false;
    let lastPointerX = 0;
    let disposed = false;
    const lines: [number, number][][] = [];
    for (let row = 0; row < 23; row++) {
      lines.push(Array.from({ length: 81 }, (_, i) => [i / 80, row / 23]));
    }
    for (let col = 0; col < 37; col++) {
      lines.push(Array.from({ length: 45 }, (_, i) => [col / 37, i / 44]));
    }
    // The same mesh coordinates give each form a continuous transition.
    const surfaces = lines.map((line) =>
      line.map(([a, b]) => {
        const u = a * Math.PI * 2;
        const v = b * Math.PI * 2;
        return [
          [
            (128 + 49 * Math.cos(v)) * Math.cos(u),
            (128 + 49 * Math.cos(v)) * Math.sin(u),
            49 * Math.sin(v),
          ],
          [
            (112 + 25 * Math.cos(3 * u) + 39 * Math.cos(v)) * Math.cos(u),
            (112 + 25 * Math.cos(3 * u) + 39 * Math.cos(v)) * Math.sin(u),
            42 * Math.sin(3 * u) + 39 * Math.sin(v),
          ],
          [
            165 * Math.sin(v / 2) * Math.cos(u),
            165 * Math.sin(v / 2) * Math.sin(u),
            165 * Math.cos(v / 2),
          ],
          [
            (113 + 28 * Math.cos(5 * u) + 32 * Math.cos(v)) * Math.cos(u),
            (113 + 28 * Math.cos(5 * u) + 32 * Math.cos(v)) * Math.sin(u),
            32 * Math.sin(v) + 28 * Math.sin(5 * u),
          ],
        ];
      }),
    );

    const paused = () => reduced.matches || root.dataset.motion === "off";
    const render = (time: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      if (time - lastFrame < (finePointer.matches ? 25 : 38)) {
        frame = requestAnimationFrame(render);
        return;
      }
      const delta = Math.min((time - lastFrame) / 1000 || 0.03, 0.08);
      lastFrame = time;
      const staticMode = paused();
      if (!staticMode) {
        angle += delta * 0.17;
        easeX += (pointerX - easeX) * 0.07;
        easeY += (pointerY - easeY) * 0.07;
      } else {
        easeX = 0;
        easeY = 0;
      }
      weights = weights.map((weight, i) =>
        staticMode
          ? Number(i === targetMode.current)
          : weight + (Number(i === targetMode.current) - weight) * 0.075,
      );
      if (width > 0 && element.dataset.ready !== "true")
        element.dataset.ready = "true";
      context.clearRect(0, 0, width, height);
      const rotation = (staticMode ? 0.45 : angle) + dragX + easeX * 0.7;
      const tilt = 0.88 + easeY * 0.45;
      const sinR = Math.sin(rotation),
        cosR = Math.cos(rotation);
      const sinT = Math.sin(tilt),
        cosT = Math.cos(tilt);
      const scale = Math.min(width, height) / 440;
      context.lineWidth = 0.68;
      for (let lineIndex = 0; lineIndex < surfaces.length; lineIndex++) {
        const line = surfaces[lineIndex];
        let depth = 0;
        context.beginPath();
        for (let pointIndex = 0; pointIndex < line.length; pointIndex++) {
          const shapes = line[pointIndex];
          let x = 0,
            y = 0,
            z = 0;
          for (let shape = 0; shape < 4; shape++) {
            x += shapes[shape][0] * weights[shape];
            y += shapes[shape][1] * weights[shape];
            z += shapes[shape][2] * weights[shape];
          }
          const rx = x * cosR - y * sinR;
          const ry = x * sinR + y * cosR;
          const sy = ry * cosT - z * sinT;
          const sz = ry * sinT + z * cosT;
          const perspective = 650 / (650 - sz);
          const px = width * 0.5 + rx * perspective * scale;
          const py = height * 0.48 + sy * perspective * scale;
          if (pointIndex === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
          depth += sz;
        }
        const alpha = Math.max(
          0.17,
          Math.min(0.68, 0.35 + depth / line.length / 550),
        );
        context.strokeStyle = `rgba(72, 94, 49, ${alpha})`;
        context.stroke();
      }
      if (!staticMode) frame = requestAnimationFrame(render);
    };
    const wake = () => {
      if (!frame && !disposed && visible && !document.hidden)
        frame = requestAnimationFrame(render);
    };
    const resize = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      element.width = Math.round(width * ratio);
      element.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      wake();
    });
    resize.observe(element);
    const intersection = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        if (!visible) {
          cancelAnimationFrame(frame);
          frame = 0;
        } else wake();
      },
      { rootMargin: "100px" },
    );
    intersection.observe(element);
    const pointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || paused()) return;
      const rect = element.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
      if (dragging) {
        dragX += (event.clientX - lastPointerX) * 0.008;
        lastPointerX = event.clientX;
      }
    };
    const pointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || paused()) return;
      dragging = true;
      lastPointerX = event.clientX;
      element.setPointerCapture(event.pointerId);
    };
    const pointerUp = () => {
      dragging = false;
    };
    const pointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
    };
    element.addEventListener("pointermove", pointerMove);
    element.addEventListener("pointerdown", pointerDown);
    element.addEventListener("pointerup", pointerUp);
    element.addEventListener("lostpointercapture", pointerUp);
    element.addEventListener("pointerleave", pointerLeave);
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else wake();
    };
    const mutation = new MutationObserver(wake);
    mutation.observe(root, {
      attributes: true,
      attributeFilter: ["data-motion", "data-atlas-mode"],
    });
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", wake);
    wake();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      mutation.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", wake);
      element.removeEventListener("pointermove", pointerMove);
      element.removeEventListener("pointerdown", pointerDown);
      element.removeEventListener("pointerup", pointerUp);
      element.removeEventListener("lostpointercapture", pointerUp);
      element.removeEventListener("pointerleave", pointerLeave);
    };
  }, []);

  useEffect(() => {
    // Wake the static canvas too when a keyboard user selects another form.
    document.documentElement.dataset.atlasMode = String(mode);
  }, [mode]);

  return <canvas className="kinetic-canvas" ref={canvas} aria-hidden="true" />;
}

/** Adds progressive motion; the server-rendered page remains readable without JS. */
export function MotionDirector() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const selector =
      ".chapter-label, .section-heading h1, .section-heading h2, .subject, .activity-entry, .research-art, .research-copy, .award, .about h1, .about h2, .about-grid p, .interlude, .destination, .about-link, .page-turn";
    const observed = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.inview = "true";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -35px 0px" },
    );
    const scan = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        const kind = element.matches("h1,h2")
          ? "title"
          : element.matches(".research-art")
            ? "diagram"
            : element.matches(".subject")
              ? "subject"
              : "rise";
        element.dataset.reveal = kind;
        if (element.matches(".subject, .award")) {
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min((Array.from(element.parentElement?.children || []).indexOf(element) % 3) * 75, 150)}ms`,
          );
        }
        if (element.matches(".research-art")) {
          element
            .querySelectorAll<SVGGeometryElement>("path,ellipse,circle")
            .forEach((shape, i) => {
              shape.setAttribute("pathLength", "1");
              shape.style.setProperty(
                "--draw-delay",
                `${Math.min(i * 45, 450)}ms`,
              );
            });
        }
        observer.observe(element);
      });
    };
    scan();
    root.classList.add("motion-ready");
    const mutations = new MutationObserver(scan);
    mutations.observe(document.querySelector("main") || document.body, {
      childList: true,
      subtree: true,
    });
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current: HTMLElement | null = null;
    let pointerFrame = 0;
    const reset = () => {
      current?.style.removeProperty("--magnet-x");
      current?.style.removeProperty("--magnet-y");
      current = null;
    };
    const pointer = (event: PointerEvent) => {
      if (
        !finePointer.matches ||
        reduced.matches ||
        root.dataset.motion === "off"
      )
        return;
      const target = (event.target as Element).closest<HTMLElement>(
        ".round-link, .index-button, .atlas-controls button, .contact-title",
      );
      if (target !== current) {
        reset();
        current = target;
      }
      if (!target) return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        if (current !== target) return;
        const rect = target.getBoundingClientRect();
        const amount = target.matches(".contact-title") ? 0.035 : 0.15;
        target.style.setProperty(
          "--magnet-x",
          `${(event.clientX - rect.left - rect.width / 2) * amount}px`,
        );
        target.style.setProperty(
          "--magnet-y",
          `${(event.clientY - rect.top - rect.height / 2) * amount}px`,
        );
      });
    };
    const leave = (event: PointerEvent) => {
      if (!event.relatedTarget || !(event.relatedTarget instanceof Node))
        reset();
    };
    document.addEventListener("pointermove", pointer, { passive: true });
    document.addEventListener("pointerout", leave);
    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(pointerFrame);
      reset();
      document.removeEventListener("pointermove", pointer);
      document.removeEventListener("pointerout", leave);
    };
  }, [pathname]);
  return null;
}
