import React, { useState } from 'react';
import { CheckIcon, Loader2Icon } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    window.setTimeout(() => setStatus('success'), 700);
  };

  if (status === 'success') {
    return (
      <p className="flex items-center gap-2 text-teal-bright" role="status">
        <CheckIcon className="h-5 w-5" /> You’re on the list. Watch your inbox for new Journal posts.
      </p>);

  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="you@example.com"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
          className="h-12 flex-1 rounded-md border border-white/20 bg-white/5 px-4 text-white placeholder:text-white/40 focus:border-teal-bright focus:outline-none" />
        
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-teal-bright px-6 font-semibold text-ink transition-colors duration-150 hover:bg-white disabled:opacity-70">
          
          {status === 'loading' && <Loader2Icon className="h-4 w-4 animate-spin" />}
          Subscribe
        </button>
      </div>
      {status === 'error' &&
      <p id="newsletter-error" className="mt-2 text-sm text-tan-light">
          Please enter a valid email address.
        </p>
      }
    </form>);

}