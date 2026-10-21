import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { images } from '../../data/images';

export function HomeHero() {
  return (
    <section className="bg-ink text-white">
      <div className="grid lg:min-h-[620px] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:py-20 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-14">
          <p className="font-display text-lg font-medium tracking-wide text-tan-light">Proudly ionophore free · HC &amp; CFIA compliant</p>
          <h1 className="mt-4 font-display text-6xl font-bold uppercase leading-[0.88] sm:text-7xl xl:text-8xl">
            Nutrition
            <span className="block text-teal-bright">from the ground up</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
            Natural, premium, efficient feed for Canadian horses — milled without ionophores, so you never have to wonder what’s in the bucket.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={{ pathname: '/', hash: '#shop' }}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-teal-bright px-6 font-semibold text-ink transition-colors duration-150 hover:bg-white">
              
              Shop Equine Concentrate <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              to={{ pathname: '/', hash: '#calculator' }}
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md border border-white/30 px-6 font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10">
              
              How much should I feed?
            </Link>
          </div>
        </div>
        <div className="relative min-h-[320px] sm:min-h-[420px]">
          <img src={images.hero} alt="Bay horse grazing beside a wooden paddock fence at golden hour" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>);

}