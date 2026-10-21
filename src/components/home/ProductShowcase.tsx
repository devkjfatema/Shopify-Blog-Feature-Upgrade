import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { AddToCartButton } from '../AddToCartButton';
import { products } from '../../data/products';

export function ProductShowcase() {
  const [flagship, ...rest] = products;

  return (
    <section id="shop" className="scroll-mt-24 bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold uppercase leading-none text-ink sm:text-5xl">Shop the program</h2>
          <a href="#shop" className="hidden items-center gap-1.5 whitespace-nowrap font-semibold text-teal hover:text-teal-dark sm:inline-flex">
            View all products <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <article className="grid overflow-hidden rounded-xl bg-white md:grid-cols-2 lg:col-span-7">
            <div className="relative aspect-[4/5] bg-sand md:aspect-auto">
              <img src={flagship.image} alt={flagship.name} className="absolute inset-0 h-full w-full object-cover" />
              {flagship.tag && <span className="absolute left-4 top-4 rounded bg-ink px-2.5 py-1 text-xs font-semibold text-white">{flagship.tag}</span>}
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-sm text-muted">{flagship.size}</p>
              <h3 className="mt-1 font-display text-3xl font-bold uppercase leading-none text-ink">{flagship.name}</h3>
              <p className="mt-4 leading-relaxed text-muted">{flagship.description}</p>
              <p className="mt-6 font-display text-4xl font-bold text-ink">${flagship.price?.toFixed(2)}</p>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <AddToCartButton product={flagship} />
                <Link to={{ pathname: '/', hash: '#calculator' }} className="text-center text-sm font-semibold text-teal hover:text-teal-dark">
                  Calculate how much you’ll need
                </Link>
              </div>
            </div>
          </article>

          <ul className="divide-y divide-line lg:col-span-5">
            {rest.map((p) =>
            <li key={p.slug} className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-5 py-5 first:pt-0 sm:grid-cols-[120px_minmax(0,1fr)]">
                <div className="aspect-square overflow-hidden rounded-lg bg-sand">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-snug text-ink">{p.name}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                      {p.size} · {p.price === null ? 'Contact for pricing' : `$${p.price.toFixed(2)}`}
                    </p>
                  </div>
                  <AddToCartButton product={p} label="Add" tone="outline" className="self-start px-4 sm:self-auto" />
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}