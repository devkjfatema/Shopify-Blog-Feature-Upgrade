import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../contexts/CartContext';

type NavItem = {label: string;to: string | {pathname: string;hash: string;};};

const navItems: NavItem[] = [
{ label: 'Shop', to: { pathname: '/', hash: '#shop' } },
{ label: 'Feeding calculator', to: { pathname: '/', hash: '#calculator' } },
{ label: 'Journal', to: '/blog' },
{ label: 'About', to: { pathname: '/', hash: '#about' } },
{ label: 'Contact', to: { pathname: '/', hash: '#contact' } }];


export function SiteHeader() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  return (
    <>
      <div className="bg-teal-dark px-4 py-2 text-center text-sm text-white">
        Proudly ionophore free · HC &amp; CFIA compliant ·{' '}
        <Link to={{ pathname: '/', hash: '#shop' }} className="font-semibold underline underline-offset-2">
          Try a 1 lb sample for $3
        </Link>
      </div>
      <header className="sticky top-0 z-40 bg-ink text-white">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          <Logo />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) =>
              <li key={item.label}>
                  {typeof item.to === 'string' ?
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                  `whitespace-nowrap text-[15px] font-medium transition-colors duration-150 hover:text-teal-bright ${isActive ? 'text-teal-bright' : 'text-white/85'}`
                  }>
                  
                      {item.label}
                    </NavLink> :

                <Link to={item.to} className="whitespace-nowrap text-[15px] font-medium text-white/85 transition-colors duration-150 hover:text-teal-bright">
                      {item.label}
                    </Link>
                }
                </li>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-1">
            <button type="button" aria-label="Search" className="rounded-full p-2.5 text-white/85 transition-colors duration-150 hover:bg-white/10 hover:text-white">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Account" className="hidden rounded-full p-2.5 text-white/85 transition-colors duration-150 hover:bg-white/10 hover:text-white sm:block">
              <UserIcon className="h-5 w-5" />
            </button>
            <button type="button" aria-label={`Cart, ${count} items`} className="relative rounded-full p-2.5 text-white/85 transition-colors duration-150 hover:bg-white/10 hover:text-white">
              <ShoppingBagIcon className="h-5 w-5" />
              {count > 0 &&
              <span className="absolute right-0.5 top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-teal-bright px-1 text-[11px] font-bold text-ink">
                  {count}
                </span>
              }
            </button>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="rounded-full p-2.5 text-white lg:hidden">
              
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open &&
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="border-t border-white/10 bg-ink lg:hidden">
            
              <ul className="mx-auto max-w-7xl px-5 py-3">
                {navItems.map((item) =>
              <li key={item.label}>
                    <Link to={item.to} className="block border-b border-white/10 py-3.5 font-display text-2xl font-semibold uppercase tracking-wide last:border-0">
                      {item.label}
                    </Link>
                  </li>
              )}
              </ul>
            </motion.nav>
          }
        </AnimatePresence>
      </header>
    </>);

}