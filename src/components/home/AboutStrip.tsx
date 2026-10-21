import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../data/images';

export function AboutStrip() {
  return (
    <section id="about" className="scroll-mt-24 bg-paper pb-16 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="aspect-[3/2] overflow-hidden rounded-xl bg-sand">
          <img src={images.barn} alt="Sunlit barn aisle with horses looking over their stall doors" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold uppercase leading-none text-ink sm:text-5xl">Built by horse people, for horse people</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Paddock Tree started with a simple frustration: too many feeds were made on the same lines as medicated cattle rations. So we built a feed that never is. Every bag is ionophore free, Health Canada and CFIA compliant, and designed to do more with less.
          </p>
          <Link to="/blog/inside-our-mill" className="mt-6 inline-flex font-semibold text-teal underline underline-offset-4 hover:text-teal-dark">
            Watch: inside our mill
          </Link>
        </div>
      </div>
    </section>);

}