"use client";

import { useCallback, useEffect, useRef } from "react";

type LightboxProps = {
  images: { src: string; caption: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
};

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const next = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [closeRef, onClose, prev, next]);

  const current = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}: ${current.caption}`}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0e231c]/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream-soft/25 text-2xl text-cream-soft transition-colors hover:border-peach hover:text-peach-light sm:right-6 sm:top-6"
      >
        ×
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
        className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream-soft/25 text-cream-soft transition-colors hover:border-peach hover:text-peach-light sm:left-6"
      >
        ‹
      </button>

      <div
        className="animate-pop-in flex max-h-[88vh] w-full max-w-5xl flex-col items-center px-14 sm:px-24"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.caption}
          className="max-h-[78vh] w-auto max-w-full object-contain"
        />
        <div className="mt-4 flex items-center gap-4">
          <p className="text-sm text-cream-soft/85">{current.caption}</p>
          <span className="font-display text-xs text-peach-light">
            {index + 1} / {images.length}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
        className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream-soft/25 text-cream-soft transition-colors hover:border-peach hover:text-peach-light sm:right-6"
      >
        ›
      </button>
    </div>
  );
}