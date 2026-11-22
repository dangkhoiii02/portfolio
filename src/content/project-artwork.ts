export const projectArtwork = {
  careflow: {
    src: "/assets/projects/careflow.webp",
    alt: "Illustration of a connected outpatient clinic with a waveform leading to a prescription draft",
  },
  "kiro-chat": {
    src: "/assets/projects/kiro-chat.webp",
    alt: "Illustration of desktop and mobile devices exchanging chat bubbles",
  },
  "course-registration": {
    src: "/assets/projects/course-registration.webp",
    alt: "Illustration of a highlighted enrollment slot in a modular course timetable",
  },
  "masking-denoiser": {
    src: "/assets/projects/masking-denoiser.webp",
    alt: "Illustration of a microcontroller with noisy and filtered audio waveforms",
  },
  grapfity: {
    src: "/assets/projects/grapfity.webp",
    alt: "Illustration of headphones, a vinyl record, and abstract album covers",
  },
  "legal-extraction": {
    src: "/assets/projects/legal-extraction.webp",
    alt: "Illustration of paper documents passing through a scanning frame and becoming structured data cells",
  },
  "facial-liveness": {
    src: "/assets/projects/facial-liveness.webp",
    alt: "Illustration contrasting a three-dimensional face with a flat photo of the same face",
  },
  astroparty: {
    src: "/assets/projects/astroparty.webp",
    alt: "Illustration of spacecraft weaving through asteroids above a ringed planet",
  },
} as const;

export type ProjectArtworkId = Exclude<keyof typeof projectArtwork, "careflow">;
