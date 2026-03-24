'use client'

import { ProductCard } from './product-card'
import Link from 'next/link'
import { products } from '@/lib/products'

export function FeaturedProducts() {
  const p1 = products.find(p => p.id === 'custom-embossed-iphone')
  const p2 = products.find(p => p.id === 'elago-mag-silicone')
  const p3 = products.find(p => p.id === 'apple-finewoven')

  const topProducts = [
    {
      title: p1?.name || 'Leather Case',
      description: p1?.pros[0] || 'Premium protection with elegant style',
      image: p1?.image || '',
      badge: 'Premium',
      rating: 5,
      link: `/comparison/custom-embossed-vs-apple-finewoven`
    },
    {
      title: p2?.name || 'Silicone Case',
      description: p2?.pros[0] || 'Lightweight and convenient protection',
      image: p2?.image || '',
      badge: 'Popular',
      rating: 4.5,
      link: `/comparison/apple-finewoven-vs-elago-magnetic`
    },
    {
      title: p3?.name || 'Eco Case',
      description: p3?.pros[1] || 'Eco-friendly choice for the planet',
      image: p3?.image || '',
      badge: 'Eco-Friendly',
      rating: 4.5,
      link: `/comparison/custom-embossed-vs-apple-finewoven`
    },
  ]

  return (
    <section id="picks" className="py-16 md:py-24 bg-gradient-to-b from-background via-purple-500/5 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
            ⭐ Top Picks
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Our Best<br />
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Recommendations
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoroughly tested products that truly deserve your attention
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topProducts.map((product, idx) => (
            <Link key={idx} href={product.link}>
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
                badge={product.badge}
                rating={product.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
