import { images } from './images';
import type { Post } from '../types/content';

const sampleVideoId = 'aqz-KE-bpKQ';

export const posts: Post[] = [
{
  slug: 'what-ionophore-free-means',
  type: 'article',
  title: 'What “ionophore free” actually means for your horse',
  excerpt:
  'Ionophores are common in livestock feed — and dangerous to horses. Here’s why our mill never handles them, and what to look for on any bag you buy.',
  category: 'Nutrition',
  date: '2026-10-14',
  readMinutes: 6,
  author: 'The Paddock Tree Team',
  image: images.feeding,
  featured: true,
  productSlug: 'equine-concentrate',
  body: [
  { kind: 'p', text: 'If you’ve ever read the fine print on a feed bag, you may have seen the words “ionophore free.” It’s one of the most important — and least explained — claims in equine nutrition.' },
  { kind: 'h2', id: 'what-are-ionophores', text: 'What are ionophores?' },
  { kind: 'p', text: 'Ionophores such as monensin and lasalocid are additives used in cattle and poultry rations to improve feed efficiency. In those species they’re safe at the right dose. In horses, even trace amounts can be toxic to the heart muscle.' },
  { kind: 'quote', text: 'Horses are many times more sensitive to monensin than cattle. Cross-contamination at the mill is the real risk.', cite: 'Paddock Tree Nutrition Team' },
  { kind: 'h2', id: 'cross-contamination', text: 'Where the risk comes from' },
  { kind: 'p', text: 'Most incidents don’t come from intentional inclusion — they come from shared equipment. When a mill produces medicated cattle feed and horse feed on the same lines, residue can carry over.' },
  { kind: 'list', items: ['Ask whether your feed is milled in a dedicated or ionophore-free facility', 'Look for Health Canada and CFIA compliance on the label', 'Be cautious with multi-species “all-stock” feeds'] },
  { kind: 'image', src: images.barn, caption: 'Every batch of Paddock Tree feed is produced without ionophores on site.' },
  { kind: 'h2', id: 'our-approach', text: 'Our approach' },
  { kind: 'p', text: 'We built Paddock Tree around a simple rule: no ionophores, ever. That means no shared lines, no carry-over risk and full HC and CFIA compliance on every bag.' }]

},
{
  slug: 'reading-a-feed-tag',
  type: 'video',
  title: 'Reading a feed tag in four minutes',
  excerpt: 'Crude protein, NSC, guaranteed analysis — our nutrition team walks through a real tag line by line.',
  category: 'Nutrition',
  date: '2026-10-08',
  readMinutes: 4,
  author: 'The Paddock Tree Team',
  image: images.vet,
  productSlug: 'equine-concentrate',
  video: {
    id: sampleVideoId,
    duration: '4:12',
    chapters: [
    { seconds: 0, label: 'Why the tag matters' },
    { seconds: 48, label: 'Guaranteed analysis' },
    { seconds: 112, label: 'Protein and amino acids' },
    { seconds: 176, label: 'Sugar and starch (NSC)' },
    { seconds: 220, label: 'Ingredient order' }]

  },
  body: [
  { kind: 'p', text: 'Feed tags are legally required, but they’re rarely easy to read. In this short video we break down what each section tells you and what to compare between brands.' },
  { kind: 'list', items: ['Guaranteed analysis shows minimums and maximums, not exact amounts', 'Ingredients are listed by weight, heaviest first', 'Feeding directions are based on body weight and workload'] }]

},
{
  slug: 'foaling-season',
  type: 'photo',
  title: 'Foaling season, in pictures',
  excerpt: 'Misty mornings, wobbly first steps and a lot of hay. A look at spring on the farm.',
  category: 'Behind the Barn',
  date: '2026-10-01',
  readMinutes: 2,
  author: 'The Paddock Tree Team',
  image: images.foals,
  body: [
  { kind: 'p', text: 'Spring is the busiest — and most rewarding — time of year. Here are a few of our favourite moments from this year’s foaling season.' }],

  gallery: [
  { src: images.foals, caption: 'First walk through the morning mist.' },
  { src: images.eye, caption: 'Mom keeping a watchful eye.' },
  { src: images.barn, caption: 'The foaling barn, quiet before sunrise.' },
  { src: images.hero, caption: 'Turnout once everyone is steady on their feet.' },
  { src: images.grooming, caption: 'Daily handling starts early.' },
  { src: images.feeding, caption: 'Mares in late gestation need extra support.' }]

},
{
  slug: 'winter-diet-prep',
  type: 'article',
  title: 'Preparing your horse’s diet for a Canadian winter',
  excerpt: 'Cold snaps raise energy needs fast. How to adjust forage, concentrate and water before the first freeze.',
  category: 'Seasonal',
  date: '2026-09-24',
  readMinutes: 7,
  author: 'The Paddock Tree Team',
  image: images.winter,
  productSlug: 'equine-concentrate',
  body: [
  { kind: 'p', text: 'Horses generate most of their body heat by digesting fibre. When temperatures drop, the single best thing you can do is increase good-quality forage.' },
  { kind: 'h2', id: 'forage-first', text: 'Forage first' },
  { kind: 'p', text: 'For every 10°C drop below freezing, many horses need 10–20% more digestible energy. Free-choice hay covers most of that gap.' },
  { kind: 'h2', id: 'water', text: 'Keep water flowing' },
  { kind: 'p', text: 'Reduced water intake in winter is a leading cause of impaction colic. Heated buckets or tank heaters are worth every penny.' },
  { kind: 'h2', id: 'concentrate', text: 'Topping up with concentrate' },
  { kind: 'list', items: ['Weigh feed rather than using scoops', 'Make changes gradually over 7–10 days', 'Monitor body condition every two weeks'] }]

},
{
  slug: 'ration-balancer-vs-complete-feed',
  type: 'article',
  title: 'Ration balancer vs. complete feed: which does your horse need?',
  excerpt: 'Easy keeper or hard keeper? The answer changes what belongs in the bucket.',
  category: 'Nutrition',
  date: '2026-09-16',
  readMinutes: 5,
  author: 'The Paddock Tree Team',
  image: images.feedbag,
  productSlug: 'equine-concentrate',
  body: [
  { kind: 'p', text: 'Not every horse needs a big scoop of grain. Many do best on quality forage plus a concentrated source of vitamins, minerals and protein.' },
  { kind: 'h2', id: 'easy-keepers', text: 'Easy keepers' },
  { kind: 'p', text: 'Horses that hold weight on forage alone usually benefit from a low-intake, nutrient-dense concentrate.' },
  { kind: 'h2', id: 'hard-keepers', text: 'Hard keepers and performance horses' },
  { kind: 'p', text: 'Horses in heavy work or struggling with weight need more calories — fed in small, frequent meals.' }]

},
{
  slug: 'a-morning-in-the-barn',
  type: 'photo',
  title: 'A morning in the barn',
  excerpt: 'From the first feed at 6am to turnout. Quiet routines, captured.',
  category: 'Behind the Barn',
  date: '2026-09-09',
  readMinutes: 2,
  author: 'The Paddock Tree Team',
  image: images.barn,
  body: [{ kind: 'p', text: 'Routines matter to horses. Here’s what a typical morning looks like for the herd.' }],
  gallery: [
  { src: images.barn, caption: '6:00 — Lights on.' },
  { src: images.feeding, caption: '6:15 — Breakfast, weighed and served.' },
  { src: images.grooming, caption: '7:30 — Grooming and a once-over.' },
  { src: images.hero, caption: '8:00 — Turnout.' }]

},
{
  slug: 'body-condition-scoring',
  type: 'video',
  title: 'How to body condition score your horse',
  excerpt: 'A hands-on guide to the 1–9 Henneke scale, so you can track changes before they show.',
  category: 'Horse Care',
  date: '2026-08-28',
  readMinutes: 6,
  author: 'The Paddock Tree Team',
  image: images.grooming,
  video: {
    id: sampleVideoId,
    duration: '6:30',
    chapters: [
    { seconds: 0, label: 'The Henneke scale' },
    { seconds: 90, label: 'Neck and withers' },
    { seconds: 180, label: 'Ribs and loin' },
    { seconds: 300, label: 'Tailhead' }]

  },
  body: [{ kind: 'p', text: 'Body condition scoring takes two minutes and is the best early warning system you have. Score monthly and write it down.' }]
},
{
  slug: 'transitioning-feeds',
  type: 'article',
  title: 'Transitioning feeds without upsetting the gut',
  excerpt: 'A simple 10-day schedule to switch feeds safely.',
  category: 'Nutrition',
  date: '2026-08-19',
  readMinutes: 4,
  author: 'The Paddock Tree Team',
  image: images.feeding,
  productSlug: 'sample-pack',
  body: [
  { kind: 'p', text: 'The microbes in a horse’s hindgut adapt slowly. Sudden changes can trigger colic or loose manure.' },
  { kind: 'h2', id: 'schedule', text: 'A 10-day schedule' },
  { kind: 'list', items: ['Days 1–3: 25% new feed', 'Days 4–6: 50% new feed', 'Days 7–9: 75% new feed', 'Day 10: 100% new feed'] }]

},
{
  slug: 'summer-hydration',
  type: 'article',
  title: 'Hydration tips for hot summer rides',
  excerpt: 'Electrolytes, water and when to hose down.',
  category: 'Seasonal',
  date: '2026-07-30',
  readMinutes: 5,
  author: 'The Paddock Tree Team',
  image: images.hero,
  body: [
  { kind: 'p', text: 'A working horse can lose 10–15 litres of sweat an hour in hot weather. Replacing water and salt is essential.' },
  { kind: 'h2', id: 'electrolytes', text: 'Electrolytes' },
  { kind: 'p', text: 'Offer free-choice salt year-round and consider an electrolyte on heavy-work days.' }]

},
{
  slug: 'portraits-from-the-paddock',
  type: 'photo',
  title: 'Portraits from the paddock',
  excerpt: 'Close-ups of the horses who make this work worth it.',
  category: 'Behind the Barn',
  date: '2026-07-15',
  readMinutes: 1,
  author: 'The Paddock Tree Team',
  image: images.eye,
  body: [{ kind: 'p', text: 'A small series of portraits from summer turnout.' }],
  gallery: [
  { src: images.eye, caption: 'Willow.' },
  { src: images.foals, caption: 'Clover and her filly.' },
  { src: images.hero, caption: 'Rowan, grazing.' },
  { src: images.winter, caption: 'The geldings in last winter’s snow.' },
  { src: images.grooming, caption: 'Maple, mid-groom.' }]

},
{
  slug: 'senior-horses-weight',
  type: 'article',
  title: 'Senior horses: keeping weight on after 20',
  excerpt: 'Dental changes, digestion and the small adjustments that make a big difference.',
  category: 'Horse Care',
  date: '2026-06-26',
  readMinutes: 6,
  author: 'The Paddock Tree Team',
  image: images.grooming,
  productSlug: 'equine-concentrate',
  body: [
  { kind: 'p', text: 'As horses age, their ability to chew and digest fibre declines. Weight loss is often the first sign.' },
  { kind: 'h2', id: 'dental', text: 'Start with the teeth' },
  { kind: 'p', text: 'Book a dental exam at least once a year for horses over 20.' }]

},
{
  slug: 'inside-our-mill',
  type: 'video',
  title: 'Inside our CFIA-compliant mill',
  excerpt: 'See how every bag is made — and why ionophores never come through the door.',
  category: 'Behind the Barn',
  date: '2026-06-10',
  readMinutes: 3,
  author: 'The Paddock Tree Team',
  image: images.barn,
  video: {
    id: sampleVideoId,
    duration: '3:05',
    chapters: [
    { seconds: 0, label: 'Ingredients arrive' },
    { seconds: 70, label: 'Milling and pelleting' },
    { seconds: 140, label: 'Quality checks' }]

  },
  body: [{ kind: 'p', text: 'A short tour of where your horse’s feed comes from.' }]
},
{
  slug: 'hoof-health-feed',
  type: 'article',
  title: 'Hoof health starts in the feed bucket',
  excerpt: 'Biotin, zinc and copper — and why balance matters more than mega-doses.',
  category: 'Horse Care',
  date: '2026-05-22',
  readMinutes: 5,
  author: 'The Paddock Tree Team',
  image: images.hero,
  body: [
  { kind: 'p', text: 'It takes about a year to grow a new hoof wall. Nutrition today shows up in next year’s feet.' },
  { kind: 'h2', id: 'minerals', text: 'Key minerals' },
  { kind: 'list', items: ['Zinc and copper in the right ratio', 'Biotin for horses with weak walls', 'Adequate quality protein'] }]

},
{
  slug: 'spring-grass-laminitis',
  type: 'article',
  title: 'Spring grass and laminitis risk',
  excerpt: 'Why the first green pasture of the year needs a careful plan.',
  category: 'Seasonal',
  date: '2026-05-05',
  readMinutes: 5,
  author: 'The Paddock Tree Team',
  image: images.foals,
  body: [
  { kind: 'p', text: 'Spring grass can be very high in sugar, especially on sunny days after cold nights.' },
  { kind: 'h2', id: 'turnout-plan', text: 'A gradual turnout plan' },
  { kind: 'p', text: 'Start with 15 minutes a day and increase slowly over two to three weeks.' }]

}];