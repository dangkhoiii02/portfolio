"use client";

import { ChevronDown, Flower2 } from "lucide-react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const speedOptions = [
  { value: 0.25, label: "0.25×" },
  { value: 0.5, label: "0.5×" },
  { value: 1, label: "1×" },
  { value: 0, label: "Off" },
] as const;

type Speed = (typeof speedOptions)[number]["value"];
const defaultSpeed: Speed = 0.25;

const SakuraSettings = createContext<{ speed: Speed; setSpeed: (value: Speed) => void }>({
  speed: defaultSpeed,
  setSpeed: () => {},
});

type Petal = {
  x: number;
  y: number;
  depth: number;
  size: number;
  angle: number;
  phase: number;
  spin: number;
};

const fullTurn = Math.PI * 2;

function createPetals(width: number, height: number): Petal[] {
  const count = Math.min(86, Math.max(27, Math.round(width * height / 19000)));

  return Array.from({ length: count }, () => {
    const depth = Math.random();
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      depth,
      size: 7 + 21 * depth ** 1.65,
      angle: Math.random() * fullTurn,
      phase: Math.random() * fullTurn,
      spin: (Math.random() - 0.5) * 2.15,
    };
  }).sort((a, b) => a.depth - b.depth);
}

function createPetalSprite(dark: boolean) {
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 72;
  const context = sprite.getContext("2d");
  if (!context) return sprite;

  context.translate(36, 36);
  const fill = context.createLinearGradient(-20, -25, 15, 27);
  fill.addColorStop(0, dark ? "#ffdce3" : "#f7cdd6");
  fill.addColorStop(0.5, dark ? "#ebabca" : "#e99eb1");
  fill.addColorStop(1, dark ? "#a75578" : "#bf6282");

  context.beginPath();
  context.moveTo(-10, 27);
  context.bezierCurveTo(-32, 9, -33, -20, -16, -25);
  context.bezierCurveTo(-7, -29, -2, -24, 0, -19);
  context.bezierCurveTo(6, -28, 20, -29, 26, -17);
  context.bezierCurveTo(36, 1, 11, 21, -10, 27);
  context.fillStyle = fill;
  context.fill();

  context.beginPath();
  context.moveTo(-10, 24);
  context.quadraticCurveTo(-5, 5, 0, -18);
  context.strokeStyle = dark ? "#ffe9f25a" : "#fff3f86b";
  context.lineWidth = 1.35;
  context.stroke();

  return sprite;
}

function SakuraCanvas({ speed }: { speed: Speed }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const changeSpeed = useRef<((value: Speed) => void) | null>(null);

  useEffect(() => {
    const layer = canvas.current;
    const context = layer?.getContext("2d");
    if (!layer || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const root = document.documentElement;

    let width = 0;
    let height = 0;
    let petals: Petal[] = [];
    let sprite = createPetalSprite((root.dataset.theme ?? (darkScheme.matches ? "dark" : "light")) === "dark");
    let playback: Speed = defaultSpeed;
    let frame = 0;
    let previousTime = 0;

    function paint(elapsed = 0) {
      if (!context) return;

      context.clearRect(0, 0, width, height);
      if (playback === 0) return;

      for (const petal of petals) {
        petal.phase += elapsed * (0.8 + petal.depth * 0.7);
        petal.x += elapsed * (14 + petal.depth * 23 + Math.sin(petal.phase) * 11);
        petal.y += elapsed * (31 + petal.depth * 40);
        petal.angle += elapsed * petal.spin;

        if (petal.y > height + petal.size) {
          petal.y = -petal.size;
          petal.x = Math.random() * width;
        }
        if (petal.x > width + petal.size) petal.x = -petal.size;

        context.save();
        context.translate(petal.x, petal.y);
        context.rotate(petal.angle + Math.sin(petal.phase) * 0.42);
        context.scale(0.35 + 0.65 * Math.abs(Math.cos(petal.phase)), 1);
        context.globalAlpha = 0.27 + petal.depth * 0.46;
        context.drawImage(sprite, -petal.size / 2, -petal.size / 2, petal.size, petal.size);
        context.restore();
      }
    }

    function tick(timestamp: number) {
      const elapsed = previousTime ? Math.min((timestamp - previousTime) / 1000, 0.05) : 0;
      previousTime = timestamp;
      paint(elapsed * playback);
      frame = requestAnimationFrame(tick);
    }

    function refresh() {
      cancelAnimationFrame(frame);
      previousTime = 0;
      paint();
      if (playback > 0 && !reduceMotion.matches && !document.hidden) {
        frame = requestAnimationFrame(tick);
      }
    }

    function resize() {
      if (!layer || !context) return;

      const bounds = layer.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      layer.width = Math.round(width * ratio);
      layer.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      petals = createPetals(width, height);
      refresh();
    }

    function updateTheme() {
      const dark = (root.dataset.theme ?? (darkScheme.matches ? "dark" : "light")) === "dark";
      sprite = createPetalSprite(dark);
      refresh();
    }

    changeSpeed.current = (next) => {
      playback = next;
      refresh();
    };
    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", refresh);
    darkScheme.addEventListener("change", updateTheme);
    reduceMotion.addEventListener("change", refresh);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      changeSpeed.current = null;
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", refresh);
      darkScheme.removeEventListener("change", updateTheme);
      reduceMotion.removeEventListener("change", refresh);
    };
  }, []);

  useEffect(() => {
    changeSpeed.current?.(speed);
  }, [speed]);

  return <canvas ref={canvas} className="sakura-layer" data-active={speed > 0} aria-hidden="true" />;
}

export function SakuraProvider({ children }: { children: React.ReactNode }) {
  const [speed, setSpeed] = useState<Speed>(defaultSpeed);

  return (
    <SakuraSettings.Provider value={{ speed, setSpeed }}>
      <SakuraCanvas speed={speed} />
      {children}
    </SakuraSettings.Provider>
  );
}

export function SakuraSpeed({ mobile = false }: { mobile?: boolean }) {
  const { speed, setSpeed } = useContext(SakuraSettings);

  return (
    <label className={`sakura-setting${mobile ? " sakura-setting-mobile" : ""}`}>
      <Flower2 size={15} aria-hidden="true" />
      {mobile && <span>Petal speed</span>}
      <select
        value={speed}
        aria-label="Petal animation speed"
        onChange={(event) => {
          const next = speedOptions.find(option => String(option.value) === event.currentTarget.value);
          if (next) setSpeed(next.value);
        }}
      >
        {speedOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <ChevronDown size={13} className="sakura-chevron" aria-hidden="true" />
    </label>
  );
}
