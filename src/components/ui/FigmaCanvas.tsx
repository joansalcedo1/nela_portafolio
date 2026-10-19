"use client";

import { useEffect, useRef, useState } from "react";

interface FigmaCanvasProps {
  width: number;
  height: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Escala un lienzo de ancho/alto fijo (tomado 1:1 de las coordenadas de Figma)
 * al ancho real del contenedor, preservando la composición de collage sin reflow.
 */
export function FigmaCanvas({ width, height, className = "", children }: FigmaCanvasProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full  ${className}`}
      style={{ height: height * scale }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          "--figma-canvas-scale": scale,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
