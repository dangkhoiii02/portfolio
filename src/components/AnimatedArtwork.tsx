"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type AnimatedArtworkProps = {
  asset: string;
  label: string;
  width: number;
  height: number;
};

export default function AnimatedArtwork({ asset, label, width, height }: AnimatedArtworkProps) {
  const [playing, setPlaying] = useState(true);
  const poster = `/assets/${asset}.webp`;
  const animation = `/assets/${asset}.gif`;
  const Icon = playing ? Pause : Play;

  return (
    <div className="animated-artwork">
      <picture>
        <source media="(prefers-reduced-motion: reduce)" srcSet={poster} />
        <Image
          src={playing ? animation : poster}
          width={width}
          height={height}
          alt=""
          unoptimized
        />
      </picture>
      <button
        type="button"
        className="artwork-animation-button"
        aria-label={`${playing ? "Pause" : "Play"} ${label} animation`}
        onClick={() => setPlaying(current => !current)}
      >
        <Icon size={16} aria-hidden="true" />
        <span>{playing ? "Pause" : "Play"}</span>
      </button>
    </div>
  );
}
