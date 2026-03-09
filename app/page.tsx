import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { CategoriesSection } from '@/components/categories-section'
import { FeaturedProducts } from '@/components/featured-products'
import { ScoreBreakdownSection } from '@/components/score-breakdown-section'
import { LatestComparisonsSection } from '@/components/latest-comparisons-section'
import { MethodologySection } from '@/components/methodology-section'
import { BlogSection } from '@/components/blog-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* 1 — Hero: VS battle slider */}
      <HeroSection />

      {/* 2 — Trust stats bar */}
      <StatsSection />

      {/* 3 — Browse by category */}
      <CategoriesSection />

      {/* 4 — Top-picked products */}
      <FeaturedProducts />

      {/* 5 — Score breakdown chart */}
      <ScoreBreakdownSection />

      {/* 6 — Latest comparison cards */}
      <LatestComparisonsSection />

      {/* 7 — Testing methodology */}
      <MethodologySection />

      {/* 8 — Blog articles */}
      <BlogSection />

      {/* 9 — Reader testimonials */}
      <TestimonialsSection />

      {/* 10 — Newsletter CTA */}
      <CTASection />

      <Footer />
    </main>
  )
}
