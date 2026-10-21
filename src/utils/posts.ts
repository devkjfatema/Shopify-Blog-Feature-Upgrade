import { format, parseISO } from 'date-fns';
import type { Post, PostType } from '../types/content';

export const postTypeLabels: Record<PostType, string> = {
  article: 'Article',
  photo: 'Photo story',
  video: 'Video'
};

export function formatPostDate(iso: string): string {
  return format(parseISO(iso), 'MMM d, yyyy');
}

export function postMeta(post: Post): string {
  if (post.type === 'photo') return `${post.gallery?.length ?? 0} photos`;
  if (post.type === 'video') return post.video?.duration ?? '';
  return `${post.readMinutes} min read`;
}

export function formatTimestamp(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function sortByNewest(list: Post[]): Post[] {
  return [...list].sort((a, b) => b.date.localeCompare(a.date));
}