import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-20 pb-20 px-4 bg-background transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge 45 Años */}
        <div className="inline-block">
          <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-2 text-base">
            <Zap className="w-4 h-4 mr-2" />
            45 Años de Experiencia
          </Badge>
        </div>

        {/* Título Principal */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            <span className="text-primary">Meser</span>
            <span className="block">Ingeniería</span>
          </h1>
          
          <div className="h-1 w-24 mx-auto bg-accent rounded-full" />
        </div>

        {/* Slogan */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
          Potencia, Innovación, Futuro Energético
        </p>

        {/* Descripción breve */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Soluciones profesionales de ingeniería eléctrica para proyectos industriales, comerciales y residenciales
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Solicitar Cotización
          </Button>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Nuestros Servicios
          </Button>
        </div>
      </div>
    </section>
  )
}
