export type PostType = 'article' | 'photo' | 'video';

export type PostCategory = 'Nutrition' | 'Horse Care' | 'Seasonal' | 'Behind the Barn';

export type ArticleBlock =
{kind: 'p';text: string;} |
{kind: 'h2';id: string;text: string;} |
{kind: 'quote';text: string;cite?: string;} |
{kind: 'list';items: string[];} |
{kind: 'image';src: string;caption?: string;};

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface VideoChapter {
  seconds: number;
  label: string;
}

export interface PostVideo {
  id: string;
  duration: string;
  chapters: VideoChapter[];
}

export interface Post {
  slug: string;
  type: PostType;
  title: string;
  excerpt: string;
  category: PostCategory;
  date: string;
  readMinutes: number;
  author: string;
  image: string;
  featured?: boolean;
  body: ArticleBlock[];
  gallery?: GalleryImage[];
  video?: PostVideo;
  productSlug?: string;
}

export interface Product {
  slug: string;
  name: string;
  size: string;
  price: number | null;
  image: string;
  description: string;
  tag?: string;
}

export interface SocialPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  postedAgo: string;
  source: 'brand' | 'community';
  handle: string;
}

export interface GuideStep {
  title: string;
  detail: string;
}

export interface GuideField {
  field: string;
  where: string;
  required: boolean;
}

export interface GuideSection {
  type: PostType;
  label: string;
  summary: string;
  template: string;
  steps: GuideStep[];
  fields: GuideField[];
}