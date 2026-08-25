"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type VideoExplainerProps = {
  src: string;
  /** Optional manual poster override. If omitted, a frame is auto-captured from `src`. */
  poster?: string;
  /** Timestamp (seconds) to grab the auto-captured frame from. */
  captureAt?: number;
  captionsSrc?: string;
  title?: string;
  description?: string;
  duration?: string;
  /** Filename shown in the chrome bar above the video, purely cosmetic. */
  fileLabel?: string;
};

const quickFacts = [
  { label: "REAL PROCESS", detail: "Not a highlight reel" },
  { label: "NO SCRIPT READ", detail: "Actual working session" },
  { label: "4 MIN", detail: "Respects your time" },
];

export function VideoExplainer({
  src,
  poster,
  captureAt = 1.5,
  captionsSrc,
  title = "What Hobblitt does, in four minutes.",
  description = "One team, three capabilities, and how we actually take a problem from 'we're stuck' to something built.",
  duration,
  fileLabel = "hobblitt-overview.mp4",
}: VideoExplainerProps) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const captureVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  useEffect(() => {
    if (poster) return;

    const video = captureVideoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const handleLoadedMetadata = () => {
      const target = Math.min(captureAt, Math.max(video.duration - 0.1, 0));
      video.currentTime = target;
    };

    const handleSeeked = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx || !video.videoWidth) return;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setFrameReady(true);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [poster, captureAt]);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      playerRef.current?.play();
    });
  };

  return (
    <section className="border-t border-[#E2E8F0]/10 bg-[#111827] px-margin py-28 md:py-36">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-14 lg:grid-cols-[0.32fr_0.68fr]">
          {/* Label */}
          <div>
            <span className="type-caption text-[9px] text-[#22B8F0]">
              01 / SEE HOW IT WORKS
            </span>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22B8F0] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22B8F0]" />
              </span>
              <p className="type-caption text-[9px] text-[#64748B]">
                NOT A PITCH DECK. THE ACTUAL PROCESS.
              </p>
            </div>

            <h2 className="type-h1 mt-5 max-w-4xl text-4xl md:text-6xl lg:text-7xl">
              {title}
            </h2>

            <p className="type-body mt-6 max-w-2xl text-base leading-7 text-[#94A3B8] md:text-lg">
              {description}
            </p>

            {/* Quick facts strip — gives the left column weight so it
                doesn't read as bare next to the video frame */}
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-px overflow-hidden border border-[#E2E8F0]/10 bg-[#E2E8F0]/10 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-[#111827] px-5 py-4">
                  <p className="type-caption text-[8px] text-[#22B8F0]">
                    {fact.label}
                  </p>
                  <p className="type-body mt-1.5 text-xs text-[#64748B]">
                    {fact.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Hidden capture video */}
            {!poster && (
              <video
                ref={captureVideoRef}
                src={src}
                muted
                playsInline
                preload="metadata"
                className="hidden"
                aria-hidden="true"
                tabIndex={-1}
              />
            )}

            {/* Video frame */}
            <div className="relative mx-auto mt-14 w-full max-w-[1100px]">
              {/* Ambient glow behind the frame */}
              <div className="pointer-events-none absolute -inset-6 -z-10 bg-[#22B8F0]/[0.04] blur-[60px]" />

              <div className="border border-[#E2E8F0]/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,0.7)]">
                {/* Chrome bar */}
                <div className="flex items-center justify-between border-b border-[#E2E8F0]/10 bg-[#0B1120] px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#475569]" />
                    <span className="h-2 w-2 rounded-full bg-[#475569]" />
                    <span className="h-2 w-2 rounded-full bg-[#22B8F0]" />
                  </div>
                  <span className="type-caption text-[8px] text-[#475569]">
                    {fileLabel}
                  </span>
                  {duration ? (
                    <span className="type-caption text-[8px] text-[#475569]">
                      {duration}
                    </span>
                  ) : (
                    <span className="w-8" aria-hidden="true" />
                  )}
                </div>

                <div className="relative aspect-video w-full overflow-hidden bg-[#0B1120]">
                  <div className="hero-grid pointer-events-none absolute inset-0 opacity-25" />
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22B8F0]/[0.08] blur-[100px]" />

                  {isPlaying ? (
                    <video
                      ref={playerRef}
                      className="relative z-[1] h-full w-full object-cover"
                      src={src}
                      controls
                      playsInline
                      autoPlay
                      onEnded={() => setIsPlaying(false)}
                    >
                      {captionsSrc && (
                        <track
                          kind="captions"
                          src={captionsSrc}
                          srcLang="en"
                          label="English"
                          default
                        />
                      )}
                    </video>
                  ) : (
                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label="Play video"
                      className="group absolute inset-0 z-[1] h-full w-full"
                    >
                      {/* Skeleton shimmer while capturing */}
                      {!poster && !frameReady && (
                        <div className="skeleton-shimmer absolute inset-0" />
                      )}

                      {poster && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={poster}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity duration-300 group-hover:opacity-90"
                        />
                      )}

                      {!poster && (
                        <canvas
                          ref={canvasRef}
                          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                            frameReady
                              ? "opacity-75 group-hover:opacity-90"
                              : "opacity-0"
                          }`}
                        />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/85 via-[#0B1120]/10 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/30 via-transparent to-[#0B1120]/30" />

                      {/* Play control */}
                      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4">
                        <div className="relative">
                          <span className="signal-ring signal-ring-one absolute inset-0 -m-5 rounded-full border border-[#22B8F0]/40" />
                          <span className="signal-ring signal-ring-two absolute inset-0 -m-9 rounded-full border border-[#22B8F0]/20" />
                          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#22B8F0] shadow-[0_0_50px_rgba(34,184,240,0.5)] transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                            <Play className="ml-1 size-6 fill-[#111827] text-[#111827] md:size-7" />
                          </span>
                        </div>

                        <span className="type-caption text-[8px] text-[#F8FAFC] opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                          WATCH THE OVERVIEW
                        </span>
                      </div>

                      {duration && (
                        <span className="type-caption absolute bottom-5 right-5 border border-[#F8FAFC]/20 bg-[#0B1120]/70 px-3 py-2 text-[8px] text-[#F8FAFC] backdrop-blur-sm">
                          {duration}
                        </span>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
