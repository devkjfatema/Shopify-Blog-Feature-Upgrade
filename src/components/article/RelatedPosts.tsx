import React from 'react';
import { PostCard } from '../PostCard';
import { posts } from '../../data/posts';
import { sortByNewest } from '../../utils/posts';
import type { Post } from '../../types/content';

export function RelatedPosts({ current }: {current: Post;}) {
  const others = sortByNewest(posts).filter((p) => p.slug !== current.slug);
  const sameTopic = others.filter((p) => p.category === current.category);
  const related = [...sameTopic, ...others.filter((p) => p.category !== current.category)].slice(0, 3);

  return (
    <section className="border-t border-line bg-paper py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-4xl font-bold uppercase leading-none text-ink">Keep reading</h2>
        <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) =>
          <li key={p.slug}>
              <PostCard post={p} />
            </li>
          )}
        </ul>
      </div>
    </section>);

}