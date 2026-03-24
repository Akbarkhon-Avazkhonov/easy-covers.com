import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Marcus Webb',
    role: 'iPhone 16 user',
    stars: 5,
    text: "I was about to spend $90 on a leather case. EasyCovers's breakdown saved me from a purchase I would've regretted. The cons section is brutally honest.",
    avatar: '/images/avatars/marcus.jpg',
  },
  {
    name: 'Sofia Laurent',
    role: 'Tech blogger',
    stars: 5,
    text: "Finally a comparison site that doesn't just repost specs. The drop test results are exactly the kind of real data I want before recommending anything to my audience.",
    avatar: '/images/avatars/sofia.jpg',
  },
  {
    name: 'Daniel Park',
    role: 'Samsung Galaxy user',
    stars: 5,
    text: "I read the iPhone vs Samsung article three times. It changed my mind. No fluff, no filler — just the facts laid out clearly.",
    avatar: '/images/avatars/daniel.jpg',
  },
  {
    name: 'Priya Nair',
    role: 'Environmental scientist',
    stars: 4,
    text: "Loved the eco-friendly case comparison. Rare to see environmental impact included as a real metric. Will bookmark this for every future purchase.",
    avatar: '/images/avatars/priya.jpg',
  },
  {
    name: 'Ryan Okafor',
    role: 'Gadget enthusiast',
    stars: 5,
    text: "The scoring system is transparent and the methodology page explains everything. I trust these reviews more than any retailer review section.",
    avatar: '/images/avatars/ryan.jpg',
  },
  {
    name: 'Claire Dubois',
    role: 'UX Designer',
    stars: 5,
    text: "The way the pros and cons are visualised makes it so easy to make a decision at a glance. Brilliant design, brilliant content.",
    avatar: '/images/avatars/claire.jpg',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-accent/20 text-cyan-700 rounded-full text-xs font-bold mb-3">
            Reader Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            What Readers<br />
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6 hover:shadow-lg transition-shadow border-2">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                &quot;{t.text}&quot;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-border">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
