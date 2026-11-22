export const articles = [
  {
    slug: "careflow-event-delivery",
    title: "Reliable event delivery in CareFlow",
    topic: "Distributed systems",
    summary: "How the outpatient queue publishes events, retries delivery, and handles duplicates.",
    visual: "careflow",
    sections: [
      {
        heading: "Record the event with the queue update",
        body: "CareFlow’s queue issues tickets, checks patients in, and updates their status during a visit. The service uses a transactional outbox so the status change and the event describing that change are recorded together in PostgreSQL. This keeps the event available for delivery even when publishing to RabbitMQ needs a retry.",
      },
      {
        heading: "Handle duplicate deliveries",
        body: "Retrying publication means the same event may arrive more than once. CareFlow uses event IDs and idempotent consumers to limit repeated effects. A shared event envelope carries the event version and correlation ID so participating services can trace the same workflow.",
      },
      {
        heading: "Keep delivery and access control separate",
        body: "The notification service consumes queue events, resolves the recipient, and updates the web or mobile client through WebSocket and STOMP. The socket is verified at connection time and again before messages are sent.",
      },
    ],
    href: "/projects#careflow",
    linkLabel: "View the CareFlow project",
  },
  {
    slug: "vietnamese-asr-evaluation",
    title: "Evaluating Vietnamese speech recognition",
    topic: "Applied AI",
    summary: "What fine-tuning Qwen3-ASR changed for CareFlow’s Voice Prescription workflow, and what the transcript benchmark can measure.",
    visual: "voice",
    sections: [
      {
        heading: "Build a held-out audio set",
        body: "I created a synthetic corpus using two Vietnamese text-to-speech voices and saved spoken text separately from canonical labels. The pipeline standardized audio with FFmpeg, then checked for overlapping name groups and duplicate audio hashes across the training and development splits.",
      },
      {
        heading: "Compare adapters on the same clips",
        body: "I fine-tuned LoRA adapters for Qwen3-ASR 0.6B on Apple Silicon. With the same 2,383 held-out synthetic audio clips and no extra context, word error rate went from 20.36% with the first adapter to 13.73% with the second adapter.",
      },
      {
        heading: "Evaluate prescription drafts separately",
        body: "Word error rate measures transcript quality. Drafts require a separate evaluation of medication, dose, and other extracted fields. A local worker integrated into CareFlow’s AI Service returns a draft for a clinician to review and edit before signing.",
      },
    ],
    href: "/projects#voice-prescription",
    linkLabel: "View Voice Prescription in CareFlow",
  },
  {
    slug: "concurrent-course-enrollment",
    title: "Keeping concurrent enrollments consistent",
    topic: "Backend engineering",
    summary: "Why course capacity belongs in the same transaction as the enrollment.",
    visual: "course",
    sections: [
      {
        heading: "Protect the last available seat",
        body: "Two students can submit an enrollment request while only one seat is available. If both requests read capacity before either writes its enrollment, a separate availability check can leave the database overbooked.",
      },
      {
        heading: "Coordinate writes in PostgreSQL",
        body: "For the ASP.NET Core registration API, I used PostgreSQL transactions and locking to coordinate enrollment requests and keep available seats consistent. The relational schema also defines constraints for the underlying course and enrollment records.",
      },
    ],
    href: "https://github.com/dangkhoiii02/CourseRegistrationSystem_KTVTKPM",
    linkLabel: "View the enrollment repository",
  },
  {
    slug: "esp32-audio-streaming",
    title: "Streaming microphone audio from an ESP32-S3",
    topic: "Embedded systems",
    summary: "How separate capture and network tasks move PCM audio from a device to a denoising app.",
    visual: "embedded",
    sections: [
      {
        heading: "Separate capture from transmission",
        body: "The ESP32-S3 reads microphone audio through I2S and DMA, then converts the input to 16-bit PCM. Separate FreeRTOS tasks capture and transmit frames, with a queue between them so the microphone loop and network work can run independently.",
      },
      {
        heading: "Run denoising in the Python app",
        body: "The firmware sends binary frames over Wi-Fi using WebSocket and exposes counters for overrun and reconnect debugging. The receiving Python app runs the TensorFlow Lite denoiser. I verified the capture and streaming path on the physical device.",
      },
    ],
    href: "https://github.com/dangkhoiii02/masking_denoiser",
    linkLabel: "View the denoiser repository",
  },
] as const;

export type ArticleVisual = typeof articles[number]["visual"];
