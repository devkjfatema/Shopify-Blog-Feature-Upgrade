import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { GalleryImage } from '../../types/content';

export function PhotoGallery({ images }: {images: GalleryImage[];}) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: 1 | -1) => setActive((i) => i === null ? i : (i + dir + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, step]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) =>
        <figure key={`${img.src}-${i}`} className="mb-4 break-inside-avoid">
            <button
            type="button"
            onClick={() => setActive(i)}
            className="group block w-full overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            aria-label={`Open photo ${i + 1}: ${img.caption}`}>
            
              <img src={img.src} alt={img.caption} loading="lazy" className="w-full transition-transform duration-300 ease-snap group-hover:scale-[1.02]" />
            </button>
            <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>
          </figure>
        )}
      </div>

      <AnimatePresence>
        {active !== null &&
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-ink/95 text-white"
          onClick={close}>
          
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-white/70">
                {active + 1} / {images.length}
              </span>
              <button ref={closeRef} type="button" onClick={close} aria-label="Close photo viewer" className="rounded-full p-2 hover:bg-white/10">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-4 sm:px-20" onClick={(e) => e.stopPropagation()}>
              <img src={images[active].src} alt={images[active].caption} className="max-h-[78vh] max-w-full rounded-md object-contain" />
              <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 rounded-full bg-white/10 p-3 hover:bg-white/20 sm:left-6">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 rounded-full bg-white/10 p-3 hover:bg-white/20 sm:right-6">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <p className="px-5 py-6 text-center text-white/85">{images[active].caption}</p>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}