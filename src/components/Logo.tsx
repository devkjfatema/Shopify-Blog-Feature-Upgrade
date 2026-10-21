import React from 'react';
import { Link } from 'react-router-dom';
import { TreeDeciduousIcon } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-bright" aria-label="Paddock Tree Nutraceuticals home">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-tan-light">
        <TreeDeciduousIcon className="h-6 w-6 text-teal-bright" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-bold uppercase tracking-wide text-white">Paddock Tree</span>
        <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-tan-light">Nutraceuticals</span>
      </span>
    </Link>);

}