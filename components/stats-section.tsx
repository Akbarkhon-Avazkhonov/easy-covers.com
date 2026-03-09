import { Users, BarChart2, ShieldCheck, Star } from 'lucide-react'

const stats = [
  { icon: BarChart2, value: '200+', label: 'Products Tested' },
  { icon: Users, value: '85K+', label: 'Monthly Readers' },
  { icon: ShieldCheck, value: '100%', label: 'Independent Reviews' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
]

export function StatsSection() {
  return (
    <section className="py-14 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-4xl font-bold text-background" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {value}
              </p>
              <p className="text-sm text-background/60 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
