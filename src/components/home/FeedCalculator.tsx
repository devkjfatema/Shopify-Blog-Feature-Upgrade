import React, { useMemo, useState } from 'react';
import { AddToCartButton } from '../AddToCartButton';
import { products } from '../../data/products';

type Workload = 'maintenance' | 'light' | 'moderate' | 'heavy' | 'breeding';

const workloads: {value: Workload;label: string;rate: number;}[] = [
{ value: 'maintenance', label: 'Maintenance', rate: 0.1 },
{ value: 'light', label: 'Light work', rate: 0.15 },
{ value: 'moderate', label: 'Moderate work', rate: 0.2 },
{ value: 'heavy', label: 'Heavy work', rate: 0.25 },
{ value: 'breeding', label: 'Broodmare', rate: 0.22 }];


const BAG_KG = 23;

export function FeedCalculator() {
  const [weight, setWeight] = useState(500);
  const [workload, setWorkload] = useState<Workload>('moderate');
  const [limitedForage, setLimitedForage] = useState(false);
  const product = products[0];

  const result = useMemo(() => {
    const rate = workloads.find((w) => w.value === workload)?.rate ?? 0.2;
    const raw = weight / 100 * rate * (limitedForage ? 1.25 : 1);
    const daily = Math.round(raw * 20) / 20;
    const bagDays = Math.floor(BAG_KG / daily);
    const monthly = daily * 30 / BAG_KG * (product.price ?? 0);
    return { daily, perFeed: daily / 2, bagDays, monthly };
  }, [weight, workload, limitedForage, product.price]);

  return (
    <section id="calculator" className="scroll-mt-24 border-y border-line bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase leading-none text-ink sm:text-5xl">How much should I feed?</h2>
          <p className="mt-3 max-w-lg text-muted">Tell us about your horse and we’ll estimate a daily ration of Equine Concentrate — and how long a bag will last.</p>

          <div className="mt-10 space-y-9">
            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="weight" className="font-semibold text-ink">
                  Body weight
                </label>
                <span className="font-display text-2xl font-bold text-ink">{weight} kg</span>
              </div>
              <input id="weight" type="range" min={250} max={750} step={25} value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-3 w-full" />
              <div className="mt-1 flex justify-between text-xs text-muted">
                <span>Pony · 250 kg</span>
                <span>Draft cross · 750 kg</span>
              </div>
            </div>

            <fieldset>
              <legend className="font-semibold text-ink">Workload</legend>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {workloads.map((w) =>
                <label
                  key={w.value}
                  className={`flex h-11 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border px-3 text-sm font-medium transition-colors duration-150 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-teal ${
                  workload === w.value ? 'border-ink bg-ink text-white' : 'border-line text-ink hover:border-ink/40'}`
                  }>
                  
                    <input type="radio" name="workload" value={w.value} checked={workload === w.value} onChange={() => setWorkload(w.value)} className="sr-only" />
                    {w.label}
                  </label>
                )}
              </div>
            </fieldset>

            <label className="flex cursor-pointer items-start gap-3">
              <input type="checkbox" checked={limitedForage} onChange={(e) => setLimitedForage(e.target.checked)} className="mt-1 h-4 w-4 accent-teal" />
              <span>
                <span className="font-semibold text-ink">Limited hay or pasture</span>
                <span className="block text-sm text-muted">Hard keepers or horses with restricted forage need a little more.</span>
              </span>
            </label>
          </div>
        </div>

        <div className="flex flex-col rounded-xl bg-ink p-7 text-white sm:p-10" aria-live="polite">
          <p className="text-sm text-white/60">Estimated daily ration</p>
          <p className="mt-1 font-display text-7xl font-bold leading-none sm:text-8xl">
            {result.daily.toFixed(2)}
            <span className="ml-2 text-3xl text-white/60">kg</span>
          </p>
          <p className="mt-2 text-white/70">Split into two feeds of about {result.perFeed.toFixed(2)} kg</p>

          <dl className="mt-8 grid grid-cols-2 border-t border-white/15 pt-6">
            <div>
              <dt className="text-sm text-white/60">One 23 kg bag lasts</dt>
              <dd className="mt-1 font-display text-3xl font-bold">{result.bagDays} days</dd>
            </div>
            <div>
              <dt className="text-sm text-white/60">About</dt>
              <dd className="mt-1 font-display text-3xl font-bold">
                ${result.monthly.toFixed(0)}
                <span className="text-lg font-semibold text-white/60"> /month</span>
              </dd>
            </div>
          </dl>

          <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
            <AddToCartButton product={product} label="Add a 23 kg bag" tone="light" className="flex-1" />
            <AddToCartButton product={products[1]} label="Try a $3 sample" tone="outlineDark" className="flex-1" />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/50">A starting guide only. Always feed alongside quality forage and adjust to body condition. Talk to our team for a tailored plan.</p>
        </div>
      </div>
    </section>);

}