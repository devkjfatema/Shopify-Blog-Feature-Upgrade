import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, MinusIcon } from 'lucide-react';
import { TypeBadge } from '../components/TypeBadge';
import { guideNotes, publishingGuide } from '../data/publishingGuide';
import { posts } from '../data/posts';
import type { PostType } from '../types/content';

export function PublishingGuide() {
  const [active, setActive] = useState<PostType>('article');
  const section = publishingGuide.find((s) => s.type === active) ?? publishingGuide[0];
  const example = posts.find((p) => p.type === active);

  return (
    <div className="bg-paper">
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-12 lg:px-8 lg:pt-16">
          <p className="text-sm font-semibold text-teal">For the Paddock Tree team</p>
          <h1 className="mt-2 font-display text-6xl font-bold uppercase leading-none text-ink sm:text-7xl">Publishing to the Journal</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">Three post types, all published from Shopify admin. Pick a template, fill in a few fields, and the layout takes care of itself — no code needed.</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-16">
        <nav aria-label="Post types" className="lg:sticky lg:top-28 lg:self-start">
          <ul role="tablist" className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
            {publishingGuide.map((s) =>
            <li key={s.type} className="shrink-0">
                <button
                role="tab"
                aria-selected={active === s.type}
                onClick={() => setActive(s.type)}
                className={`w-full whitespace-nowrap rounded-md px-4 py-3 text-left font-semibold transition-colors duration-150 ${
                active === s.type ? 'bg-ink text-white' : 'text-ink hover:bg-sand'}`
                }>
                
                  {s.label}
                </button>
              </li>
            )}
          </ul>
        </nav>

        <div role="tabpanel" aria-label={section.label}>
          <TypeBadge type={section.type} />
          <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-none text-ink">{section.label}</h2>
          <p className="mt-3 max-w-2xl text-muted">{section.summary}</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm text-ink">
            Theme template: <code className="rounded bg-sand px-1.5 py-0.5 font-mono text-[13px]">{section.template}</code>
          </p>

          <ol className="mt-10 space-y-0">
            {section.steps.map((step, i) =>
            <li key={step.title} className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 pb-8 last:pb-0">
                {i < section.steps.length - 1 && <span className="absolute left-[19px] top-10 h-[calc(100%-40px)] w-px bg-line" aria-hidden="true" />}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-white">{i + 1}</span>
                <div className="pt-1.5">
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 max-w-2xl leading-relaxed text-muted">{step.detail}</p>
                </div>
              </li>
            )}
          </ol>

          <div className="mt-12 overflow-hidden rounded-xl border border-line bg-white">
            <table className="w-full text-left text-sm">
              <caption className="border-b border-line px-5 py-4 text-left font-semibold text-ink">Fields checklist</caption>
              <thead className="bg-sand/60 text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Field</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Where in Shopify</th>
                  <th scope="col" className="px-5 py-3 text-right font-semibold">Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {section.fields.map((f) =>
                <tr key={f.field}>
                    <td className="px-5 py-3 font-medium text-ink">{f.field}</td>
                    <td className="px-5 py-3 text-muted">{f.where}</td>
                    <td className="px-5 py-3 text-right">
                      {f.required ?
                    <CheckIcon className="ml-auto h-4 w-4 text-teal" aria-label="Required" /> :

                    <MinusIcon className="ml-auto h-4 w-4 text-muted" aria-label="Optional" />
                    }
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {example &&
          <p className="mt-6 text-sm text-muted">
              See it live:{' '}
              <Link to={`/blog/${example.slug}`} className="font-semibold text-teal underline underline-offset-2 hover:text-teal-dark">
                {example.title}
              </Link>
            </p>
          }

          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-3xl font-bold uppercase text-ink">Good to know</h2>
            <dl className="mt-6 grid gap-8 md:grid-cols-3">
              {guideNotes.map((n) =>
              <div key={n.title}>
                  <dt className="font-semibold text-ink">{n.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{n.detail}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>);

}