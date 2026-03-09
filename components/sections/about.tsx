import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Target, Lightbulb, Heart, Shield, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'El mejor precio',
    description: 'Del mercado local y nacional'
  },
  {
    icon: Shield,
    title: 'La mayor preparación',
    description: 'Ingenieros capacitados y experimentados'
  },
  {
    icon: Zap,
    title: 'Disponibilidad',
    description: 'Usted es nuestra prioridad'
  },
  {
    icon: Target,
    title: 'Estimaciones precisas',
    description: 'Sin sorpresas'
  }
]

const values = [
  { icon: Heart, label: 'Perseverancia' },
  { icon: Shield, label: 'Lealtad' },
  { icon: Award, label: 'Integridad' },
  { icon: Lightbulb, label: 'Honestidad' },
  { icon: Target, label: 'Visión' },
  { icon: Zap, label: 'Audacia' }
]

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-4 bg-card transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ¿Por qué Nosotros? */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">¿Por qué Nosotros?</h2>
            <p className="text-muted-foreground text-lg">Nuestros principios te garantizan calidad y confianza</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <Card key={idx} className="bg-background border-border">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Misión, Visión, Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Misión */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-primary">Misión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Satisfacer las necesidades de nuestros clientes proyectando y construyendo instalaciones para el transporte, distribución y control de energía eléctrica y comunicaciones.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Otorgando garantía en cada uno de nuestros trabajos.
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-primary">Visión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                Ser la mejor empresa del país en el sector de proyecto, estudio, presupuestación y construcción de obra eléctrica.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Garantizando la mayor calidad en los trabajos contratados.
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="text-primary">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{value.label}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
