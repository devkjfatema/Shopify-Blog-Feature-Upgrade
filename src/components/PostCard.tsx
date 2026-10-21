import React from 'react';
import { Link } from 'react-router-dom';
import { ImagesIcon, PlayIcon } from 'lucide-react';
import { TypeBadge } from './TypeBadge';
import { formatPostDate, postMeta } from '../utils/posts';
import type { Post } from '../types/content';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'compact';
}

export function PostCard({ post, variant = 'default' }: PostCardProps) {
  if (variant === 'compact') {
    return (
      <Link to={`/blog/${post.slug}`} className="group grid grid-cols-[112px_minmax(0,1fr)] gap-4 py-5 sm:grid-cols-[140px_minmax(0,1fr)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-sand">
          <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-snap group-hover:scale-[1.03]" />
          <MediaOverlay post={post} small />
        </div>
        <div className="flex flex-col">
          <TypeBadge type={post.type} />
          <h3 className="mt-1 font-display text-xl font-semibold leading-tight text-ink transition-colors duration-150 group-hover:text-teal">{post.title}</h3>
          <p className="mt-auto pt-2 text-sm text-muted">
            {formatPostDate(post.date)} · {postMeta(post)}
          </p>
        </div>
      </Link>);

  }

  return (
    <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand">
        <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-snap group-hover:scale-[1.03]" />
        <MediaOverlay post={post} />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <TypeBadge type={post.type} />
        <span className="text-sm text-muted">{post.category}</span>
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink transition-colors duration-150 group-hover:text-teal">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
      <p className="mt-auto pt-4 text-sm text-muted">
        {formatPostDate(post.date)} · {postMeta(post)}
      </p>
    </Link>);

}

function MediaOverlay({ post, small = false }: {post: Post;small?: boolean;}) {
  if (post.type === 'video') {
    return (
      <span className="absolute inset-0 flex items-center justify-center">
        <span className={`flex items-center justify-center rounded-full bg-white/95 text-ink shadow-lg ${small ? 'h-9 w-9' : 'h-14 w-14'}`}>
          <PlayIcon className={`${small ? 'h-4 w-4' : 'h-6 w-6'} translate-x-[1px] fill-ink`} aria-hidden="true" />
        </span>
        {!small &&
        <span className="absolute bottom-3 right-3 rounded bg-ink/85 px-2 py-0.5 text-xs font-semibold text-white">{post.video?.duration}</span>
        }
      </span>);

  }
  if (post.type === 'photo' && !small) {
    return (
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded bg-ink/85 px-2 py-0.5 text-xs font-semibold text-white">
        <ImagesIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {post.gallery?.length}
      </span>);

  }
  return null;
}