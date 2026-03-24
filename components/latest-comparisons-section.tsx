import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { comparisons } from '@/lib/comparisons-data'

export function LatestComparisonsSection() {
  const latest = comparisons.slice(0, 4).map((c, i) => ({
    title: c.title,
    category: c.category,
    excerpt: c.excerpt,
    img: c.leftImg,
    rating: c.rating,
    readTime: c.readTime,
    href: `/comparison/${c.slug}`,
    tag: i === 0 ? 'Trending' : i === 1 ? 'New' : null,
    tagColor: i === 0 ? 'bg-orange-500' : i === 1 ? 'bg-green-500' : '',
  }))

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
                <div className="relative w-full sm:w-40 h-44 sm:h-auto shrink-0 overflow-hidden bg-white border-r border-border/10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
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
