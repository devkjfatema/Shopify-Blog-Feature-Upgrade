import React, { useState } from 'react';
import { PlayIcon } from 'lucide-react';
import { formatTimestamp } from '../../utils/posts';
import type { PostVideo } from '../../types/content';

interface VideoPlayerProps {
  video: PostVideo;
  poster: string;
  title: string;
}

export function VideoPlayer({ video, poster, title }: VideoPlayerProps) {
  const [start, setStart] = useState<number | null>(null);
  const playing = start !== null;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
        {playing ?
        <iframe
          key={start}
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&start=${start}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full" /> :


        <button type="button" onClick={() => setStart(0)} className="group absolute inset-0" aria-label={`Play video: ${title}`}>
            <img src={poster} alt="" className="h-full w-full object-cover opacity-90" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-ink shadow-xl transition-transform duration-150 ease-snap group-hover:scale-105 group-active:scale-95">
                <PlayIcon className="h-8 w-8 translate-x-0.5 fill-ink" />
              </span>
            </span>
            <span className="absolute bottom-4 right-4 rounded bg-ink/85 px-2 py-1 text-sm font-semibold text-white">{video.duration}</span>
          </button>
        }
      </div>

      {video.chapters.length > 0 &&
      <nav aria-label="Video chapters">
          <h2 className="text-sm font-semibold text-white/60">Chapters</h2>
          <ol className="mt-3 divide-y divide-white/10 border-y border-white/10">
            {video.chapters.map((c) =>
          <li key={c.seconds}>
                <button
              type="button"
              onClick={() => setStart(c.seconds)}
              className={`flex w-full items-center gap-4 py-3 text-left transition-colors duration-150 hover:text-teal-bright ${start === c.seconds ? 'text-teal-bright' : 'text-white'}`}>
              
                  <span className="w-12 shrink-0 font-mono text-sm text-white/55">{formatTimestamp(c.seconds)}</span>
                  <span className="font-medium">{c.label}</span>
                </button>
              </li>
          )}
          </ol>
        </nav>
      }
    </div>);

}