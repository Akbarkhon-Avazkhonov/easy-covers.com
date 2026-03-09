import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Alex M.',
    role: 'iPhone 16 user',
    stars: 5,
    text: "I was about to spend $90 on a leather case. EasyCo's breakdown saved me from a purchase I would've regretted. The cons section is brutally honest.",
    avatar: 'AM',
    color: 'bg-purple-500',
  },
  {
    name: 'Sarah K.',
    role: 'Tech blogger',
    stars: 5,
    text: "Finally a comparison site that doesn't just repost specs. The drop test results are exactly the kind of real data I want before recommending anything to my audience.",
    avatar: 'SK',
    color: 'bg-orange-500',
  },
  {
    name: 'James R.',
    role: 'Samsung Galaxy user',
    stars: 5,
    text: "I read the iPhone vs Samsung article three times. It changed my mind. No fluff, no filler — just the facts laid out clearly.",
    avatar: 'JR',
    color: 'bg-cyan-500',
  },
  {
    name: 'Priya N.',
    role: 'Environmental scientist',
    stars: 4,
    text: "Loved the eco-friendly case comparison. Rare to see environmental impact included as a real metric. Will bookmark this for every future purchase.",
    avatar: 'PN',
    color: 'bg-green-500',
  },
  {
    name: 'Tom B.',
    role: 'Gadget enthusiast',
    stars: 5,
    text: "The scoring system is transparent and the methodology page explains everything. I trust these reviews more than any retailer review section.",
    avatar: 'TB',
    color: 'bg-rose-500',
  },
  {
    name: 'Lisa C.',
    role: 'UX Designer',
    stars: 5,
    text: "The way the pros and cons are visualised makes it so easy to make a decision at a glance. Brilliant design, brilliant content.",
    avatar: 'LC',
    color: 'bg-indigo-500',
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
                "{t.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.avatar}
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
