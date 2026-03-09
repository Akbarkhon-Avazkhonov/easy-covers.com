import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProConComparison } from '@/components/pro-con-comparison'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export default function ComparisonPage() {
  const leatherPros = [
    'Premium feel in hand',
    'Improves with age (patina)',
    'Excellent drop protection',
    'Breathable material',
    'Stylish appearance',
    'Durability with proper care',
  ]

  const leatherCons = [
    'Expensive ($50+)',
    'Requires regular maintenance',
    'Can stain fingers',
    'May get scratched over time',
    'Sensitive to moisture',
  ]

  const siliconePros = [
    'Affordable price ($10-20)',
    'Easy to clean (just wipe)',
    'Excellent grip',
    'Soft feel',
    'Good drop protection',
    'Many colors and designs',
  ]

  const siliconeCons = [
    'Collects dust and dirt',
    'Gets sticky over time',
    'Can stain clothing',
    'Less durable',
    'Looks cheap',
    'Can yellow in the sun',
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background via-purple-500/5 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 text-balance"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Leather vs Silicone
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Complete comparison of the two most popular materials for smartphone cases
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">⚔️ Comparison</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-bold">📋 Guide</span>
              <span className="px-3 py-1 bg-accent/10 text-cyan-600 rounded-full text-sm font-bold">2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Intro */}
          <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-purple-50/50 to-orange-50/50 rounded-xl border border-purple-200/20">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              When it comes to protecting your smartphone, choosing the right case material is a crucial decision. In this detailed comparison, we'll examine the two most popular materials: classic leather and modern silicone.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Both materials have their strengths and weaknesses, and your choice will depend on your priorities - whether that's style, functionality, or price.
            </p>
          </div>

          {/* Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Pros and Cons
            </h2>
            <ProConComparison
              productName="Leather vs Silicone"
              pros={leatherPros}
              cons={siliconeCons}
            />
          </div>

          {/* Detailed Comparison */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Detailed Comparison
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Leather Card */}
              <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center text-2xl">
                    🧥
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Leather Case
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Premium material that provides elegance and reliable protection.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Price</p>
                    <p className="text-sm font-bold">$50 - $100+</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Durability</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Style</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Silicone Card */}
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                    🏰
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Silicone Case
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  Practical choice that provides good protection at an affordable price.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Price</p>
                    <p className="text-sm font-bold">$10 - $20</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Durability</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">Practicality</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Conclusion */}
          <Card className="p-6 md:p-8 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border-2 border-purple-200/30">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Who Wins?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <span className="font-bold text-foreground">Leather Wins If:</span> You value premium quality, durability, and are willing to invest in a good case. Leather becomes more beautiful with age and lasts for years.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground">Silicone Wins If:</span> You want a practical, affordable case that simply protects your phone without extra hassle. Ideal for an active lifestyle.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
