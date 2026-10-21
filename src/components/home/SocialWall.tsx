import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AtSignIcon, HeartIcon, HashIcon } from 'lucide-react';
import { socialPosts } from '../../data/social';

type Filter = 'all' | 'brand' | 'community';

const filters: {value: Filter;label: string;}[] = [
{ value: 'all', label: 'Everything' },
{ value: 'brand', label: '@paddocktree' },
{ value: 'community', label: '#PaddockTreeHorses' }];


export function SocialWall() {
  const [filter, setFilter] = useState<Filter>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 600);
    return () => window.clearTimeout(t);
  }, []);

  const visible = socialPosts.filter((p) => filter === 'all' || p.source === filter).slice(0, 9);

  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-teal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              Updated 2 hours ago
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-none text-ink sm:text-5xl">Live from the barn</h2>
            <p className="mt-3 max-w-xl text-muted">Fresh from our Instagram and riders across Canada. Tag <strong className="font-semibold text-ink">#PaddockTreeHorses</strong> to be featured.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div role="tablist" aria-label="Filter social posts" className="inline-flex rounded-md bg-white p-1">
              {filters.map((f) =>
              <button
                key={f.value}
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={`whitespace-nowrap rounded px-3 py-2 text-sm font-medium transition-colors duration-150 ${filter === f.value ? 'bg-ink text-white' : 'text-ink hover:bg-sand'}`}>
                
                  {f.label}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
          {loading ?
          Array.from({ length: 9 }).map((_, i) =>
          <div key={i} className={`aspect-square animate-pulse rounded-lg bg-line ${i === 0 ? 'col-span-2 row-span-2' : ''}`} />
          ) :
          visible.map((post, i) =>
          <motion.a
            key={`${filter}-${post.id}`}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: Math.min(i * 0.04, 0.3), ease: [0.23, 1, 0.32, 1] }}
            className={`group relative block aspect-square overflow-hidden rounded-lg bg-line ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            aria-label={`${post.handle}: ${post.caption}`}>
            
                  <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 flex flex-col justify-end bg-ink/70 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4">
                    <p className="flex items-center gap-1 text-xs font-semibold text-tan-light">
                      {post.source === 'brand' ? <AtSignIcon className="h-3 w-3" /> : <HashIcon className="h-3 w-3" />}
                      {post.handle.replace('@', '')} · {post.postedAgo}
                    </p>
                    <p className={`mt-1 text-white ${i === 0 ? 'text-base' : 'line-clamp-2 text-sm'}`}>{post.caption}</p>
                    <p className="mt-2 flex items-center gap-1 text-xs text-white/80">
                      <HeartIcon className="h-3.5 w-3.5" /> {post.likes}
                    </p>
                  </div>
                </motion.a>
          )}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-md bg-ink px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-teal-dark">
            Follow @paddocktree on Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center whitespace-nowrap rounded-md border border-ink/20 px-5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink">
            Join us on Facebook
          </a>
        </div>
      </div>
    </section>);

}