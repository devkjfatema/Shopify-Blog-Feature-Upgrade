import { images } from './images';
import type { Product } from '../types/content';

export const products: Product[] = [
{
  slug: 'equine-concentrate',
  name: 'Paddock Tree Equine Concentrate',
  size: '23 kg',
  price: 54.95,
  image: images.feedbag,
  description:
  'Our flagship pelleted concentrate. Natural, premium and efficient — balanced nutrition from the ground up, milled in an ionophore-free facility.',
  tag: 'Flagship'
},
{
  slug: 'sample-pack',
  name: 'Sample Pack — Equine Concentrate',
  size: '1 lb',
  price: 3.0,
  image: images.feeding,
  description: 'Try it before you commit. Enough for a taste test with your fussiest eater.'
},
{
  slug: 'fw-eliminator',
  name: 'FW Eliminator',
  size: '3.6 kg',
  price: null,
  image: images.tub,
  description: 'Targeted digestive support supplement.'
},
{
  slug: 'program-kpi',
  name: 'Program KPI',
  size: '4.0 kg',
  price: null,
  image: images.grooming,
  description: 'Performance support for horses in regular work.'
}];