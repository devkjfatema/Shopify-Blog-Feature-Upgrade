import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PostCard } from '../PostCard';
import { TypeBadge } from '../TypeBadge';
import { posts } from '../../data/posts';
import { formatPostDate, postMeta, sortByNewest } from '../../utils/posts';

export function JournalPreview() {
  const sorted = sortByNewest(posts);
  const lead = sorted.find((p) => p.featured) ?? sorted[0];
  const others = sorted.filter((p) => p.slug !== lead.slug).slice(0, 3);

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase leading-none text-ink sm:text-5xl">From the Journal</h2>
            <p className="mt-3 text-muted">Feeding advice, barn stories and videos from our team.</p>
          </div>
          <Link to="/blog" className="hidden items-center gap-1.5 whitespace-nowrap font-semibold text-teal hover:text-teal-dark sm:inline-flex">
            Visit the Journal <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Link to={`/blog/${lead.slug}`} className="group lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-sand">
              <img src={lead.image} alt="" className="h-full w-full object-cover transition-transform duration-300 ease-snap group-hover:scale-[1.02]" />
            </div>
            <div className="mt-5">
              <TypeBadge type={lead.type} />
              <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-ink transition-colors duration-150 group-hover:text-teal sm:text-4xl">{lead.title}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{lead.excerpt}</p>
              <p className="mt-3 text-sm text-muted">
                {formatPostDate(lead.date)} · {postMeta(lead)}
              </p>
            </div>
          </Link>
          <div className="divide-y divide-line border-t border-line lg:col-span-5 lg:border-t-0">
            {others.map((p) =>
            <PostCard key={p.slug} post={p} variant="compact" />
            )}
            <Link to="/blog" className="flex items-center gap-1.5 pt-5 font-semibold text-teal hover:text-teal-dark sm:hidden">
              Visit the Journal <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>);

}