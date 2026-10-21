import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { TrustStrip } from '../components/home/TrustStrip';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { FeedCalculator } from '../components/home/FeedCalculator';
import { JournalPreview } from '../components/home/JournalPreview';
import { SocialWall } from '../components/home/SocialWall';
import { AboutStrip } from '../components/home/AboutStrip';

export function Home() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ProductShowcase />
      <FeedCalculator />
      <JournalPreview />
      <AboutStrip />
      <SocialWall />
    </>);

}