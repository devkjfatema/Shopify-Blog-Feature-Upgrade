import React from 'react';
import { FileTextIcon, ImagesIcon, PlayIcon } from 'lucide-react';
import { postTypeLabels } from '../utils/posts';
import type { PostType } from '../types/content';

const icons = { article: FileTextIcon, photo: ImagesIcon, video: PlayIcon };

export function TypeBadge({ type, tone = 'light' }: {type: PostType;tone?: 'light' | 'dark';}) {
  const Icon = icons[type];
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${tone === 'dark' ? 'text-teal-bright' : 'text-teal'}`}>
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {postTypeLabels[type]}
    </span>);

}