import React from 'react';
import type { ArticleBlock } from '../../types/content';

export function ArticleBody({ blocks }: {blocks: ArticleBlock[];}) {
  return (
    <div className="max-w-[680px] text-[18px] leading-[1.75] text-ink/90">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'p':
            return (
              <p key={i} className="mb-6">
                {block.text}
              </p>);

          case 'h2':
            return (
              <h2 key={i} id={block.id} className="mb-4 mt-12 scroll-mt-28 font-display text-3xl font-bold leading-tight text-ink">
                {block.text}
              </h2>);

          case 'quote':
            return (
              <blockquote key={i} className="my-10 border-l-4 border-teal pl-6">
                <p className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">“{block.text}”</p>
                {block.cite && <footer className="mt-3 text-base text-muted">— {block.cite}</footer>}
              </blockquote>);

          case 'list':
            return (
              <ul key={i} className="mb-6 space-y-2 pl-1">
                {block.items.map((item) =>
                <li key={item} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                )}
              </ul>);

          case 'image':
            return (
              <figure key={i} className="my-10">
                <img src={block.src} alt={block.caption ?? ''} loading="lazy" className="w-full rounded-lg" />
                {block.caption && <figcaption className="mt-3 text-sm text-muted">{block.caption}</figcaption>}
              </figure>);

          default:
            return null;
        }
      })}
    </div>);

}