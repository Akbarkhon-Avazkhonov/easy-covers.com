import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const latest = [
  {
    title: 'Leather vs Silicone',
    category: 'Phone Cases',
    excerpt: 'Premium feel vs everyday practicality. We settle the debate once and for all.',
    img: '/images/cards/leather-case.jpg',
    rating: 4.8,
    readTime: '6 min',
    href: '/comparison',
    tag: 'Trending',
    tagColor: 'bg-orange-500',
  },
  {
    title: 'AirPods Pro vs Galaxy Buds',
    category: 'Audio',
    excerpt: 'Two premium earbuds, two different ecosystems. Which delivers better value?',
    img: '/images/cards/airpods.jpg',
    rating: 4.7,
    readTime: '7 min',
    href: '/comparison',
    tag: 'New',
    tagColor: 'bg-green-500',
  },
  {
    title: 'MagSafe vs Qi Wireless',
    category: 'Accessories',
    excerpt: 'Faster charging vs universal compatibility — what matters more?',
    img: '/images/cards/magsafe.jpg',
    rating: 4.3,
    readTime: '4 min',
    href: '/comparison',
    tag: null,
    tagColor: '',
  },
  {
    title: 'Tempered Glass vs Plastic Film',
    category: 'Accessories',
    excerpt: 'Your screen protector choice matters more than you think.',
    img: '/images/cards/tempered-glass.jpg',
    rating: 4.6,
    readTime: '5 min',
    href: '/comparison',
    tag: null,
    tagColor: '',
  },
]

export function LatestComparisonsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-3">
              Latest
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Fresh<br />
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Comparisons
              </span>
            </h2>
          </div>
          <Link href="/comparison" className="flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
            All comparisons <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latest.map((item) => (
            <Link key={item.title} href={item.href}>
              <Card className="group overflow-hidden flex flex-col sm:flex-row border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                {/* Image */}
                <div className="relative w-full sm:w-40 h-44 sm:h-auto shrink-0 overflow-hidden bg-muted">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.tag && (
                    <span className={`absolute top-2 left-2 ${item.tagColor} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                      {item.tag}
                    </span>
                  )}
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-primary uppercase mb-1">{item.category}</p>
                    <h3 className="text-base font-bold mb-2 group-hover:text-primary transition" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs">{item.readTime}</span>
                    </div>
                    <span className="ml-auto flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
