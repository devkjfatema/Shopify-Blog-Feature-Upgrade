import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-28 text-center">
      <h1 className="font-display text-6xl font-bold uppercase text-ink">Page not found</h1>
      <p className="mt-4 text-lg text-muted">This page may have moved or been unpublished.</p>
      <Link to="/blog" className="mt-8 inline-flex h-12 items-center rounded-md bg-ink px-6 font-semibold text-white hover:bg-teal-dark">
        Back to the Journal
      </Link>
    </section>);

}