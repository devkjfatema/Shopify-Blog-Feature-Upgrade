import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Journal } from './pages/Journal';
import { Article } from './pages/Article';
import { PublishingGuide } from './pages/PublishingGuide';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Journal />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="/publishing-guide" element={<PublishingGuide />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>);

}