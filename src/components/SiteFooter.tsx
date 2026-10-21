import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { NewsletterForm } from './NewsletterForm';

const columns: {heading: string;links: {label: string;to: string;}[];}[] = [
{
  heading: 'Shop',
  links: [
  { label: 'Equine Concentrate', to: '/#shop' },
  { label: 'Sample Pack', to: '/#shop' },
  { label: 'Supplements', to: '/#shop' }]

},
{
  heading: 'Learn',
  links: [
  { label: 'The Journal', to: '/blog' },
  { label: 'Feeding calculator', to: '/#calculator' },
  { label: 'Publishing guide (admin)', to: '/publishing-guide' }]

},
{
  heading: 'Company',
  links: [
  { label: 'About us', to: '/#about' },
  { label: 'Contact', to: '/#contact' }]

}];


export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase leading-none">Feed notes, monthly</h2>
            <p className="mt-3 max-w-md text-white/70">New Journal posts, seasonal feeding tips and first access to new products. No spam.</p>
            <div className="mt-6 max-w-md">
              <NewsletterForm />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) =>
            <div key={col.heading}>
                <h3 className="text-sm font-semibold text-tan-light">{col.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) =>
                <li key={l.label}>
                      <Link to={l.to} className="text-white/75 transition-colors duration-150 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p className="text-sm text-white/55">© 2026 Paddock Tree Nutraceuticals. Natural · Premium · Efficient.</p>
        </div>
      </div>
    </footer>);

}