import React, { useState } from 'react';
import { CheckIcon, LinkIcon, MailIcon } from 'lucide-react';
import { AddToCartButton } from '../AddToCartButton';
import type { ArticleBlock, Product } from '../../types/content';

interface ArticleAsideProps {
  blocks: ArticleBlock[];
  product?: Product;
  title: string;
}

export function ArticleAside({ blocks, product, title }: ArticleAsideProps) {
  const headings = blocks.filter((b): b is Extract<ArticleBlock, {kind: 'h2';}> => b.kind === 'h2');

  return (
    <div className="space-y-10 lg:sticky lg:top-28">
      {headings.length > 1 &&
      <nav aria-label="In this article" className="hidden lg:block">
          <h2 className="text-sm font-semibold text-muted">In this article</h2>
          <ul className="mt-3 space-y-2.5 border-l border-line">
            {headings.map((h) =>
          <li key={h.id}>
                <a href={`#${h.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-[15px] text-ink/80 transition-colors duration-150 hover:border-teal hover:text-ink">
                  {h.text}
                </a>
              </li>
          )}
          </ul>
        </nav>
      }
      {product && <ProductCallout product={product} />}
      <ShareBar title={title} />
    </div>);

}

export function ProductCallout({ product }: {product: Product;}) {
  return (
    <aside className="rounded-xl bg-white p-5">
      <p className="text-sm font-semibold text-muted">Featured in this post</p>
      <div className="mt-4 flex gap-4">
        <img src={product.image} alt="" className="h-20 w-20 shrink-0 rounded-md object-cover" />
        <div className="min-w-0">
          <p className="font-semibold leading-snug text-ink">{product.name}</p>
          <p className="mt-1 text-sm text-muted">
            {product.size}
            {product.price !== null && ` · $${product.price.toFixed(2)}`}
          </p>
        </div>
      </div>
      <AddToCartButton product={product} className="mt-4 w-full" />
    </aside>);

}

export function ShareBar({ title }: {title: string;}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <p className="text-sm font-semibold text-muted">Share</p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={copy} className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md border border-line bg-white px-3.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink/40">
          {copied ? <CheckIcon className="h-4 w-4 text-teal" /> : <LinkIcon className="h-4 w-4" />}
          {copied ? 'Link copied' : 'Copy link'}
        </button>
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md border border-line bg-white px-3.5 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink/40">
          
          <MailIcon className="h-4 w-4" /> Email
        </a>
      </div>
    </div>);

}