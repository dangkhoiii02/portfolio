"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const poster = "/assets/technical-toolkit.webp";
const animation = "/assets/technical-toolkit.gif";

export default function ToolkitArtwork() {
  const [playing, setPlaying] = useState(true);
  const label = playing ? "Pause toolkit animation" : "Play toolkit animation";
  const Icon = playing ? Pause : Play;

  return (
    <div className="toolkit-artwork">
      <picture>
        <source media="(prefers-reduced-motion: reduce)" srcSet={poster} />
        <Image
          src={playing ? animation : poster}
          width={960}
          height={384}
          alt=""
          unoptimized
        />
      </picture>
      <button
        type="button"
        className="toolkit-animation-button"
        aria-label={label}
        onClick={() => setPlaying(current => !current)}
      >
        <Icon size={16} aria-hidden="true" />
        <span>{playing ? "Pause" : "Play"}</span>
      </button>
    </div>
  );
}
