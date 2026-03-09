import Image from 'next/image'
import { Search, FlaskConical, BarChart3, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Research',
    desc: 'We study specs, manufacturer claims, and user reports before touching a product.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: FlaskConical,
    title: 'Lab Testing',
    desc: 'Every product goes through standardised drop, grip, and durability tests.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    desc: 'Results are scored across 12 metrics and compared side-by-side.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: CheckCircle,
    title: 'Honest Verdict',
    desc: 'We publish an unbiased verdict — no sponsored outcomes, ever.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-full min-h-80">
            <Image
              src="/images/sections/methodology.jpg"
              alt="Our testing methodology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-white/80 text-sm font-medium">Independent testing since 2022</span>
              <p className="text-white text-xl font-bold mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Real tests. Real results.
              </p>
            </div>
          </div>

          {/* Right — steps */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4">
              How We Test
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Our Testing<br />
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Methodology
              </span>
            </h2>

            <div className="flex flex-col gap-5">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className={`shrink-0 w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-muted-foreground">0{idx + 1}</span>
                        <h3 className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
