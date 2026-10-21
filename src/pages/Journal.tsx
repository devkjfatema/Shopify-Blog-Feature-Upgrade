import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchIcon, XIcon } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { TypeBadge } from '../components/TypeBadge';
import { posts } from '../data/posts';
import { formatPostDate, postMeta, sortByNewest } from '../utils/posts';
import type { PostCategory, PostType } from '../types/content';

const PAGE_SIZE = 9;

const typeFilters: {value: PostType | 'all';label: string;}[] = [
{ value: 'all', label: 'All' },
{ value: 'article', label: 'Articles' },
{ value: 'photo', label: 'Photo stories' },
{ value: 'video', label: 'Videos' }];


const categories: PostCategory[] = ['Nutrition', 'Horse Care', 'Seasonal', 'Behind the Barn'];

export function Journal() {
  const [type, setType] = useState<PostType | 'all'>('all');
  const [category, setCategory] = useState<PostCategory | 'all'>('all');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const sorted = useMemo(() => sortByNewest(posts), []);
  const featured = sorted.find((p) => p.featured) ?? sorted[0];
  const q = query.trim().toLowerCase();
  const isFiltering = type !== 'all' || category !== 'all' || q !== '';

  const filtered = useMemo(
    () =>
    sorted.filter(
      (p) =>
      (isFiltering || p.slug !== featured.slug) && (
      type === 'all' || p.type === type) && (
      category === 'all' || p.category === category) && (
      q === '' || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
    ),
    [sorted, isFiltering, featured.slug, type, category, q]
  );

  useEffect(() => setVisible(PAGE_SIZE), [type, category, q]);

  const typeCount = (t: PostType | 'all') => t === 'all' ? posts.length : posts.filter((p) => p.type === t).length;
  const reset = () => {
    setType('all');
    setCategory('all');
    setQuery('');
  };

  return (
    <div className="bg-paper">
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 pb-10 pt-12 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:pt-16">
          <div>
            <h1 className="font-display text-6xl font-bold uppercase leading-none text-ink sm:text-7xl">The Journal</h1>
            <p className="mt-3 max-w-xl text-lg text-muted">Feeding advice, seasonal care, barn stories and videos from the Paddock Tree team.</p>
          </div>
          <div className="relative w-full lg:w-80">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <label htmlFor="journal-search" className="sr-only">
              Search the Journal
            </label>
            <input
              id="journal-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts"
              className="h-12 w-full rounded-md border border-line bg-white pl-10 pr-4 text-ink placeholder:text-muted focus:border-teal focus:outline-none" />
            
          </div>
        </div>
      </section>

      {!isFiltering &&
      <section className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
          <Link to={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-xl bg-ink text-white lg:grid-cols-12">
            <div className="aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
              <img src={featured.image} alt="" className="h-full w-full object-cover transition-transform duration-300 ease-snap group-hover:scale-[1.02]" />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="rounded bg-tan-light px-2 py-0.5 text-xs font-semibold text-ink">Featured</span>
                <TypeBadge type={featured.type} tone="dark" />
              </div>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">{featured.title}</h2>
              <p className="mt-4 leading-relaxed text-white/70">{featured.excerpt}</p>
              <p className="mt-6 text-sm text-white/55">
                {formatPostDate(featured.date)} · {postMeta(featured)}
              </p>
            </div>
          </Link>
        </section>
      }

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-center md:justify-between">
          <div role="tablist" aria-label="Post type" className="-mx-1 flex gap-1 overflow-x-auto px-1">
            {typeFilters.map((f) =>
            <button
              key={f.value}
              role="tab"
              aria-selected={type === f.value}
              onClick={() => setType(f.value)}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ${
              type === f.value ? 'bg-ink text-white' : 'text-ink hover:bg-sand'}`
              }>
              
                {f.label}
                <span className={`text-xs ${type === f.value ? 'text-white/60' : 'text-muted'}`}>{typeCount(f.value)}</span>
              </button>
            )}
          </div>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1" aria-label="Topic">
            <TopicChip active={category === 'all'} onClick={() => setCategory('all')}>
              All topics
            </TopicChip>
            {categories.map((c) =>
            <TopicChip key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </TopicChip>
            )}
          </div>
        </div>

        {filtered.length === 0 ?
        <div className="py-20 text-center">
            <p className="font-display text-3xl font-bold uppercase text-ink">No posts match</p>
            <p className="mt-2 text-muted">Try a different search or topic.</p>
            <button onClick={reset} className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-teal-dark">
              <XIcon className="h-4 w-4" /> Clear filters
            </button>
          </div> :

        <>
            <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(0, visible).map((post, i) =>
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: Math.min(i % PAGE_SIZE * 0.04, 0.3), ease: [0.23, 1, 0.32, 1] }}>
              
                  <PostCard post={post} />
                </motion.li>
            )}
            </ul>
            <div className="mt-14 flex flex-col items-center gap-4">
              <p className="text-sm text-muted">
                Showing {Math.min(visible, filtered.length)} of {filtered.length} posts
              </p>
              {visible < filtered.length &&
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex h-12 items-center rounded-md border border-ink px-8 font-semibold text-ink transition-colors duration-150 hover:bg-ink hover:text-white">
              
                  Load more posts
                </button>
            }
            </div>
          </>
        }
      </section>
    </div>);

}

function TopicChip({ active, onClick, children }: {active: boolean;onClick: () => void;children: React.ReactNode;}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-150 ${
      active ? 'border-teal bg-teal-light font-semibold text-teal-dark' : 'border-line text-muted hover:border-ink/30 hover:text-ink'}`
      }>
      
      {children}
    </button>);

}