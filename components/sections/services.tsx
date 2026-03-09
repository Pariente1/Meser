import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Lightbulb, Wrench, Sun, Shield, Cable, Zap as Energy, FileCheck, Radio } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Proyecto y construcción eléctrica',
    description: 'Desarrollos habitacionales, industriales y comerciales. Sistemas de generación fotovoltaica residencial, comercial e industrial.'
  },
  {
    icon: FileCheck,
    title: 'Presupuestos y levantamientos',
    description: 'Elaboración de proyectos y trámites ante CFE con estudios precisos.'
  },
  {
    icon: Cable,
    title: 'Alta, media y baja tensión',
    description: 'Diseño y ejecución integral de redes eléctricas garantizando potencia y seguridad normativa.'
  },
  {
    icon: Wrench,
    title: 'Instalación y mantenimiento',
    description: 'Subestaciones de potencia, subestaciones tipo poste, compactas y sumergibles.'
  },
  {
    icon: Shield,
    title: 'Sistemas de tierras y pararrayos',
    description: 'Protección avanzada contra descargas atmosféricas y fallas eléctricas.'
  },
  {
    icon: Energy,
    title: 'Infraestructura eléctrica',
    description: 'Canalizaciones de redes eléctricas en alta, media y baja tensión.'
  },
  {
    icon: Radio,
    title: 'Estudios de alumbrados',
    description: 'Caídas de voltaje, corrección de factor de potencia, armónicas y proyectos especializados.'
  },
  {
    icon: Sun,
    title: 'Plantas fotovoltaicas',
    description: 'Instalación de sistemas solares de alta eficiencia para autogeneración de energía limpia.'
  },
  {
    icon: FileCheck,
    title: 'Dictaminación de instalaciones',
    description: 'Validez para trámites ante Protección Civil con renta de equipo especializado.'
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 px-4 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Meser Ingeniería"
              width={150}
              height={75}
              className="h-16 w-auto"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg">Amplia gama de soluciones adaptadas a tus necesidades</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="bg-card border-border hover:border-accent/50 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Services Info */}
        <div className="mt-12 p-8 rounded-lg bg-accent/5 border border-accent/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">Servicios Complementarios</h3>
          <p className="text-muted-foreground leading-relaxed">
            También ofrecemos renta de equipo para inspección y dictaminación: Analizador de redes, Cámara termográfica, Telurómetro de pinza y de puntas, Probador de resistencia de aislamiento y Secuenciómetro. Proyectos y construcción electromecánica para sectores habitacional, comercial, industrial y agropecuario.
          </p>
        </div>
      </div>
    </section>
  )
}
