import React from 'react';
import { useParams } from 'react-router-dom';
import { ArticleHeader } from '../components/article/ArticleHeader';
import { ArticleBody } from '../components/article/ArticleBody';
import { ArticleAside, ProductCallout, ShareBar } from '../components/article/ArticleAside';
import { PhotoGallery } from '../components/article/PhotoGallery';
import { VideoPlayer } from '../components/article/VideoPlayer';
import { RelatedPosts } from '../components/article/RelatedPosts';
import { NotFound } from './NotFound';
import { posts } from '../data/posts';
import { products } from '../data/products';

export function Article() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <NotFound />;

  const product = products.find((p) => p.slug === post.productSlug);

  if (post.type === 'video' && post.video) {
    return (
      <article>
        <section className="bg-ink pb-14 pt-10 text-white lg:pb-20">
          <div className="mx-auto max-w-7xl space-y-10 px-5 lg:px-8">
            <ArticleHeader post={post} tone="dark" />
            <VideoPlayer video={post.video} poster={post.image} title={post.title} />
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
          <div>
            <h2 className="mb-6 font-display text-3xl font-bold uppercase text-ink">Show notes</h2>
            <ArticleBody blocks={post.body} />
          </div>
          <ArticleAside blocks={[]} product={product} title={post.title} />
        </section>
        <RelatedPosts current={post} />
      </article>);

  }

  if (post.type === 'photo' && post.gallery) {
    return (
      <article>
        <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8 lg:pt-14">
          <ArticleHeader post={post} />
        </div>
        <figure className="mx-auto mt-10 max-w-[1600px] lg:px-8">
          <img src={post.image} alt={post.gallery[0]?.caption ?? ''} className="aspect-[21/9] w-full object-cover lg:rounded-xl" />
        </figure>
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <ArticleBody blocks={post.body} />
            <ShareBar title={post.title} />
          </div>
          <div className="mt-10">
            <PhotoGallery images={post.gallery} />
          </div>
          {product &&
          <div className="mt-10 max-w-sm">
              <ProductCallout product={product} />
            </div>
          }
        </div>
        <RelatedPosts current={post} />
      </article>);

  }

  return (
    <article>
      <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8 lg:pt-14">
        <ArticleHeader post={post} />
      </div>
      <figure className="mx-auto mt-10 max-w-7xl lg:px-8">
        <img src={post.image} alt="" className="aspect-[16/8] w-full object-cover lg:rounded-xl" />
      </figure>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 lg:px-8">
        <ArticleBody blocks={post.body} />
        <ArticleAside blocks={post.body} product={product} title={post.title} />
      </div>
      <RelatedPosts current={post} />
    </article>);

}