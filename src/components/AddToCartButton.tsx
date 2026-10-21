import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import type { Product } from '../types/content';

interface AddToCartButtonProps {
  product: Product;
  label?: string;
  tone?: 'teal' | 'light' | 'outline' | 'outlineDark';
  className?: string;
}

const tones = {
  teal: 'bg-teal text-white hover:bg-teal-dark',
  light: 'bg-teal-bright text-ink hover:bg-white',
  outline: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white',
  outlineDark: 'border border-white/30 text-white hover:border-white hover:bg-white/10'
};

export function AddToCartButton({ product, label = 'Add to cart', tone = 'teal', className = '' }: AddToCartButtonProps) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const t = window.setTimeout(() => setAdded(false), 1600);
    return () => window.clearTimeout(t);
  }, [added]);

  const base = `inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 text-sm font-semibold transition-[color,background-color,border-color,transform] duration-150 ease-snap active:scale-[0.98] ${tones[tone]} ${className}`;

  if (product.price === null) {
    return (
      <Link to={{ pathname: '/', hash: '#contact' }} className={base}>
        Ask about pricing
      </Link>);

  }

  return (
    <button
      type="button"
      onClick={() => {
        add();
        setAdded(true);
      }}
      className={base}
      aria-live="polite">
      
      {added ?
      <>
          <CheckIcon className="h-4 w-4" /> Added
        </> :

      label
      }
    </button>);

}