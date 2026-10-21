import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from 'lucide-react';
import { TypeBadge } from '../TypeBadge';
import { formatPostDate, postMeta } from '../../utils/posts';
import type { Post } from '../../types/content';

export function ArticleHeader({ post, tone = 'light' }: {post: Post;tone?: 'light' | 'dark';}) {
  const dark = tone === 'dark';
  return (
    <header className="max-w-4xl">
      <Link to="/blog" className={`inline-flex items-center gap-1 text-sm font-semibold ${dark ? 'text-white/70 hover:text-white' : 'text-muted hover:text-ink'}`}>
        <ChevronLeftIcon className="h-4 w-4" /> The Journal
      </Link>
      <div className="mt-6 flex items-center gap-3">
        <TypeBadge type={post.type} tone={tone} />
        <span className={`text-sm ${dark ? 'text-white/60' : 'text-muted'}`}>{post.category}</span>
      </div>
      <h1 className={`mt-3 font-display text-5xl font-bold leading-[0.95] sm:text-6xl ${dark ? 'text-white' : 'text-ink'}`}>{post.title}</h1>
      <p className={`mt-5 max-w-2xl text-xl leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>{post.excerpt}</p>
      <p className={`mt-6 text-sm ${dark ? 'text-white/55' : 'text-muted'}`}>
        {post.author} · {formatPostDate(post.date)} · {postMeta(post)}
      </p>
    </header>);

}