"use client";

import { useEffect, useRef } from "react";

const playbackSpeed = 0.5;

type Shard = {
  x: number;
  y: number;
  depth: number;
  size: number;
  shape: number;
  angle: number;
  phase: number;
  spin: number;
};

const fullTurn = Math.PI * 2;
const shardSpriteSize = 88;
type Point = readonly [number, number];
const silhouettes = [
  [[-29, -24], [19, -17], [28, 4], [-3, 29]],
  [[-11, -32], [23, -6], [9, 18], [-21, 28], [-27, -3]],
  [[-33, 16], [-9, -22], [32, -11], [9, 10]],
  [[-25, -23], [6, -29], [25, 19], [-12, 27], [-6, 5]],
] as const satisfies Point[][];
const facetColors = {
  dark: ["#d6fff3d9", "#7d92dea3", "#578981a0", "#b4a2ed9c", "#6ac6c5bb"],
  light: ["#effff9f4", "#8a9bcc94", "#6285767d", "#a89bd5a0", "#83b7b0a8"],
};

function createShards(width: number, height: number): Shard[] {
  const count = Math.min(80, Math.max(26, Math.round(width * height / 20000)));

  return Array.from({ length: count }, () => {
    const depth = Math.random();
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      depth,
      size: 7 + 35 * depth ** 1.7,
      shape: Math.floor(Math.random() * silhouettes.length),
      angle: Math.random() * fullTurn,
      phase: Math.random() * fullTurn,
      spin: (Math.random() - 0.5) * 2.15,
    };
  }).sort((a, b) => a.depth - b.depth);
}

function createShardSprite(points: readonly Point[], base: string, dark: boolean) {
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = shardSpriteSize;
  const context = sprite.getContext("2d");
  if (!context) return sprite;

  context.translate(shardSpriteSize / 2, shardSpriteSize / 2);
  const outline = new Path2D();
  points.forEach(([x, y], index) => {
    if (index === 0) outline.moveTo(x, y);
    else outline.lineTo(x, y);
  });
  outline.closePath();
  context.save();
  context.clip(outline);
  context.fillStyle = base;
  context.globalAlpha = 0.5;
  context.fillRect(-36, -36, 72, 72);
  context.globalAlpha = 1;

  const colors = dark ? facetColors.dark : facetColors.light;
  const center: Point = [0, -3];
  points.forEach(([x, y], index) => {
    const [endX, endY] = points[(index + 1) % points.length];
    const gradient = context.createLinearGradient(center[0], center[1], (x + endX) / 2, (y + endY) / 2);
    gradient.addColorStop(0, base);
    gradient.addColorStop(1, colors[index]);
  context.beginPath();
    context.moveTo(...center);
    context.lineTo(x, y);
    context.lineTo(endX, endY);
    context.closePath();
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = dark ? "#b3e9dc43" : "#6a8f8750";
    context.lineWidth = 0.9;
    context.stroke();
  });

  const sheen = context.createLinearGradient(-19, -19, 17, 22);
  sheen.addColorStop(0.25, "#efffff00");
  sheen.addColorStop(0.41, dark ? "#cbf9ff64" : "#fbfffff0");
  sheen.addColorStop(0.62, "#efffff00");
  context.fillStyle = sheen;
  context.fillRect(-36, -36, 72, 72);
  context.restore();

  const rim = context.createLinearGradient(-24, -27, 24, 28);
  rim.addColorStop(0, dark ? "#ebfffa" : "#557c76");
  rim.addColorStop(0.46, dark ? "#84b3adde" : "#8ca2b0b0");
  rim.addColorStop(1, dark ? "#bcb5ffe0" : "#645499a8");
  context.lineJoin = "round";
  context.lineWidth = 1.6;
  context.strokeStyle = rim;
  context.stroke(outline);

  const [x, y] = points[0];
  const [endX, endY] = points[1];
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + (endX - x) * 0.69, y + (endY - y) * 0.69);
  context.strokeStyle = dark ? "#f1fffb" : "#ffffff";
  context.lineWidth = 2.35;
  context.stroke();

  return sprite;
}

function createGlintSprite(dark: boolean) {
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = 40;
  const context = sprite.getContext("2d");
  if (!context) return sprite;

  context.translate(20, 20);
  const halo = context.createRadialGradient(0, 0, 0, 0, 0, 17);
  halo.addColorStop(0, dark ? "#b0eaffb8" : "#a1a8ebad");
  halo.addColorStop(1, "#a1a8eb00");
  context.fillStyle = halo;
  context.fillRect(-20, -20, 40, 40);
  context.fillStyle = dark ? "#e8fbff" : "#6965a4";
  context.beginPath();
  context.moveTo(0, -14);
  context.lineTo(1.8, -1.6);
  context.lineTo(10, 0);
  context.lineTo(1.8, 1.6);
  context.lineTo(0, 14);
  context.lineTo(-1.8, 1.6);
  context.lineTo(-10, 0);
  context.lineTo(-1.8, -1.6);
  context.closePath();
  context.fill();
  return sprite;
}

export function GlassBackground() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const layer = canvas.current;
    const context = layer?.getContext("2d");
    if (!layer || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const root = document.documentElement;

    const getSprites = () => {
      const dark = (root.dataset.theme ?? (darkScheme.matches ? "dark" : "light")) === "dark";
      const base = getComputedStyle(layer).color;
      return {
        shards: silhouettes.map(points => createShardSprite(points, base, dark)),
        glint: createGlintSprite(dark),
      };
    };

    let width = 0;
    let height = 0;
    let shards: Shard[] = [];
    let sprites = getSprites();
    let frame = 0;
    let previousTime = 0;

    function paint(elapsed = 0) {
      if (!context) return;

      context.clearRect(0, 0, width, height);

      for (const shard of shards) {
        shard.phase += elapsed * (0.8 + shard.depth * 0.7);
        shard.x += elapsed * (16 + shard.depth * 22 + Math.sin(shard.phase) * 9);
        shard.y += elapsed * (29 + shard.depth * 37);
        shard.angle += elapsed * shard.spin;

        if (shard.y > height + shard.size) {
          shard.y = -shard.size;
          shard.x = Math.random() * width;
        }
        if (shard.x > width + shard.size) shard.x = -shard.size;

        const face = Math.abs(Math.cos(shard.phase));
        const brightness = 0.33 + shard.depth * 0.49;
        const flash = Math.max(0, Math.sin(shard.phase + shard.shape)) ** 12;
        const halfSize = shard.size / 2;

        context.save();
        context.translate(shard.x, shard.y);
        context.rotate(shard.angle + Math.sin(shard.phase) * 0.22);
        context.scale(0.26 + 0.74 * face, 1);
        context.globalAlpha = brightness * (0.63 + face * 0.37);
        context.drawImage(sprites.shards[shard.shape], -halfSize, -halfSize, shard.size, shard.size);

        if (shard.depth > 0.58 && flash > 0.06) {
          const [edgeX, edgeY] = silhouettes[shard.shape][0];
          const size = shard.size * 0.7;
          const scale = shard.size / shardSpriteSize;
          context.globalAlpha = brightness * flash;
          context.drawImage(sprites.glint, edgeX * scale - size / 2, edgeY * scale - size / 2, size, size);
        }
        context.restore();
      }
    }

    function tick(timestamp: number) {
      const elapsed = previousTime ? Math.min((timestamp - previousTime) / 1000, 0.05) : 0;
      previousTime = timestamp;
      paint(elapsed * playbackSpeed);
      frame = requestAnimationFrame(tick);
    }

    function refresh() {
      cancelAnimationFrame(frame);
      previousTime = 0;
      paint();
      if (!reduceMotion.matches && !document.hidden) {
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
      shards = createShards(width, height);
      refresh();
    }

    function updateTheme() {
      sprites = getSprites();
      refresh();
    }

    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", refresh);
    darkScheme.addEventListener("change", updateTheme);
    reduceMotion.addEventListener("change", refresh);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", refresh);
      darkScheme.removeEventListener("change", updateTheme);
      reduceMotion.removeEventListener("change", refresh);
    };
  }, []);

  return <canvas ref={canvas} className="glass-layer" aria-hidden="true" />;
}
