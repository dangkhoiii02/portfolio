import { AudioLines } from "lucide-react";
import Image from "next/image";
import type { ArticleVisual } from "@/content/articles";
import { projectArtwork } from "@/content/project-artwork";

const images = {
  careflow: projectArtwork.careflow.src,
  course: projectArtwork["course-registration"].src,
  embedded: projectArtwork["masking-denoiser"].src,
};

export default function ArticleArtwork({ visual }: { visual: ArticleVisual }) {
  return (
    <div className={`article-art article-art-${visual}`} aria-hidden="true">
      {visual === "voice" ? (
        <AudioLines className="wave-graphic" size={112} strokeWidth={1.3} />
      ) : (
        <Image src={images[visual]} alt="" fill sizes="(max-width: 600px) 90vw, 760px" />
      )}
    </div>
  );
}
