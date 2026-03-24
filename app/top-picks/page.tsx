import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Star, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products'

export default function TopPicksPage() {
  const p1 = products.find(p => p.id === 'custom-embossed-iphone')
  const p2 = products.find(p => p.id === 'spigen-tough-magsafe')
  const p3 = products.find(p => p.id === 'anker-magsafe-bank')
  const p4 = products.find(p => p.id === 'zagg-invisible-shield')

  const topPicks = [
    {
      rank: 1,
      title: p1?.name || 'Leather Case Pro Max',
      rating: Math.round((p1?.score || 93) / 20),
      image: p1?.image || '',
      pros: p1?.pros || [],
      cons: p1?.cons || [],
      bestFor: 'Those who value premium executive quality and timeless style over rugged utility.',
      category: p1?.category || 'Premium'
    },
    {
      rank: 2,
      title: p2?.name || 'Spigen Tough Armor',
      rating: Math.round((p2?.score || 92) / 20),
      image: p2?.image || '',
      pros: p2?.pros || [],
      cons: p2?.cons || [],
      bestFor: 'Everyday users seeking the ultimate rugged drop protection at a fair price.',
      category: p2?.category || 'Rugged'
    },
    {
      rank: 3,
      title: p3?.name || 'Anker Power Bank',
      rating: Math.round((p3?.score || 92) / 20),
      image: p3?.image || '',
      pros: p3?.pros || [],
      cons: p3?.cons || [],
      bestFor: 'Power users out all day who need convenient magnetic charging anywhere.',
      category: p3?.category || 'Accessories'
    },
    {
      rank: 4,
      title: p4?.name || 'ZAGG Invisible Shield',
      rating: Math.round((p4?.score || 91) / 20),
      image: p4?.image || '',
      pros: p4?.pros || [],
      cons: p4?.cons || [],
      bestFor: 'Protecting your extremely expensive screen with the absolute strongest glass available.',
      category: p4?.category || 'Screen Protectors'
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-yellow-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-full text-sm font-bold mb-4">
                ⭐ Editor's Choice
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
                  Our Top Recommended Picks
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                The absolute best phone cases and accessories based on extensive testing and real-world usage
              </p>
            </div>
          </div>
        </section>

        {/* Top Picks */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {topPicks.map((pick) => (
                <Card key={pick.rank} className="p-6 md:p-8 border-2 hover:shadow-lg transition">
                  <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 items-start">
                    {/* Rank and Image */}
                    <div className="flex flex-col items-center justify-center gap-2 xl:col-span-1">
                      <div className="relative w-40 h-40 rounded-xl overflow-hidden border border-border shadow-sm bg-white p-4">
                        <Image src={pick.image} alt={pick.title} fill className="object-contain p-2" />
                      </div>
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mt-2">
                        #{pick.rank} Overall
                      </div>
                    </div>

                    {/* Info */}
                    <div className="xl:col-span-2">
                      <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {pick.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-bold">
                          {pick.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < pick.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-muted-foreground">{pick.rating}/5</span>
                      </div>
                      <p className="text-sm text-foreground mb-3 font-semibold">Perfect For: <span className="text-muted-foreground font-normal">{pick.bestFor}</span></p>
                      
                    </div>

                    {/* Pros & Cons */}
                    <div className="xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                      <div className="bg-green-500/5 rounded-lg p-4 border border-green-500/10">
                        <h4 className="font-bold text-green-700 text-sm mb-3 uppercase flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> Pros
                        </h4>
                        <ul className="space-y-2">
                          {pick.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-foreground flex items-start gap-2">
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-red-500/5 rounded-lg p-4 border border-red-500/10 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-red-700 text-sm mb-3 uppercase flex items-center gap-2">
                            <XCircle className="w-4 h-4" /> Cons
                          </h4>
                          <ul className="space-y-2">
                            {pick.cons.map((con, i) => (
                              <li key={i} className="text-sm text-foreground flex items-start gap-2">
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6 flex justify-end">
                          <Link href={`/comparison`}>
                            <Button className="w-full sm:w-auto shadow-md">
                              Compare Options <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Buying Guide */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-500/10 to-orange-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                How to Choose the Right Gear?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-5 border-2 hover:border-primary/50 transition">
                  <p className="font-bold mb-2 flex items-center gap-2">🎯 For Business & Executives</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Go for the <strong>Custom Embossed Leather Case</strong>. It provides superior genuine leather quality, professional bespoke aesthetics, and a completely personalized touch representing your brand.</p>
                </Card>
                <Card className="p-5 border-2 hover:border-primary/50 transition">
                  <p className="font-bold mb-2 flex items-center gap-2">🛡️ For Ultimate Drop Security</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Choose the <strong>Spigen Tough Armor</strong>. With extreme impact foam and a kickstand, it is the undisputed industry leader for guaranteeing your device survives brutal falls.</p>
                </Card>
                <Card className="p-5 border-2 hover:border-primary/50 transition">
                  <p className="font-bold mb-2 flex items-center gap-2">🔋 Never Run Out Of Battery</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">The <strong>Anker Ultra-Slim MagSafe</strong> snaps instantly to your phone and provides perfect pocketable confidence that you're never going to be stranded without power.</p>
                </Card>
                <Card className="p-5 border-2 hover:border-primary/50 transition">
                  <p className="font-bold mb-2 flex items-center gap-2">💎 Display Protection Obsessed</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">The <strong>ZAGG Invisible Shield</strong> guarantees optical clarity while using the strongest reinforced materials on the market. Screens are expensive; replace the protector, not the display.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
