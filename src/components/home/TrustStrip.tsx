import React from 'react';
import { BadgeCheckIcon, LeafIcon, ShieldCheckIcon } from 'lucide-react';

const claims = [
{ Icon: ShieldCheckIcon, title: 'Ionophore free', text: 'Never milled alongside medicated livestock feed.' },
{ Icon: BadgeCheckIcon, title: 'HC & CFIA compliant', text: 'Meets Health Canada and CFIA standards on every bag.' },
{ Icon: LeafIcon, title: 'Natural · Premium · Efficient', text: 'Nutrient-dense pellets, so you feed less and waste less.' }];


export function TrustStrip() {
  return (
    <section aria-label="Why Paddock Tree" className="border-b border-line bg-sand">
      <ul className="mx-auto grid max-w-7xl divide-y divide-line px-5 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
        {claims.map(({ Icon, title, text }) =>
        <li key={title} className="flex gap-4 py-6 md:px-8 md:first:pl-0 md:last:pr-0">
            <Icon className="mt-0.5 h-6 w-6 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="font-semibold text-ink">{title}</p>
              <p className="mt-0.5 text-sm text-muted">{text}</p>
            </div>
          </li>
        )}
      </ul>
    </section>);

}