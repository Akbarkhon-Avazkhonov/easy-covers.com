import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Phone Cases',
    desc: 'Leather, silicone, TPU and more',
    img: '/images/cards/leather-case.jpg',
    href: '/comparison',
    accent: 'bg-amber-50',
    count: 24,
  },
  {
    title: 'Smartphones',
    desc: 'iOS vs Android showdowns',
    img: '/images/cards/iphone.jpg',
    href: '/comparison',
    accent: 'bg-gray-50',
    count: 12,
  },
  {
    title: 'Earbuds & Audio',
    desc: 'Wireless audio comparisons',
    img: '/images/cards/airpods.jpg',
    href: '/comparison',
    accent: 'bg-violet-50',
    count: 9,
  },
  {
    title: 'Accessories',
    desc: 'Chargers, cables, screen guards',
    img: '/images/cards/magsafe.jpg',
    href: '/comparison',
    accent: 'bg-orange-50',
    count: 18,
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold mb-3">
              Browse by Category
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Find What<br />
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                You Need
              </span>
            </h2>
          </div>
          <Link href="/comparison" className="flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
            View all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href}>
              <div className={`group ${cat.accent} rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-background/90 text-xs font-bold px-2 py-1 rounded-full border border-border">
                    {cat.count} articles
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cat.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
