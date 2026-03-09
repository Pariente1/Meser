'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="w-full py-20 px-4 bg-card transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Estamos listos para ayudarte</h2>
          <p className="text-muted-foreground text-lg">Solicita una cotización o contáctanos para cualquier consulta</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="space-y-6">
            {/* Dirección */}
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <CardTitle>Ubicación</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lago de Cuitzeo 1227<br />
                  Las Quintas, Culiacán<br />
                  Sinaloa, México
                </p>
              </CardContent>
            </Card>

            {/* Teléfono */}
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <CardTitle>Teléfono</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="tel:6677152887" className="text-primary hover:underline block">
                  (667) 715-2887
                </a>
                <a href="tel:6670000000" className="text-primary hover:underline block">
                  (667) 000-0000
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@meseringenieria.com" className="text-primary hover:underline">
                  info@meseringenieria.com
                </a>
              </CardContent>
            </Card>

            {/* Horario */}
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                  <CardTitle>Horario</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-muted-foreground">
                  <span className="font-semibold">Lunes – Viernes:</span> 8:00 AM – 6:00 PM
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Sábado:</span> 9:00 AM – 2:00 PM
                </p>
              </CardContent>
            </Card>

            {/* Redes Sociales */}
            <Card className="bg-background border-border">
              <CardHeader className="pb-3">
                <CardTitle>Síguenos</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <a href="#" className="p-2 rounded-lg bg-accent text-accent-foreground hover:opacity-80 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-accent text-accent-foreground hover:opacity-80 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle>Solicitud de Cotización</CardTitle>
              <CardDescription>Completa el formulario y nos pondremos en contacto contigo pronto</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nombre</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-card border-border text-foreground"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Teléfono</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(667) 000-0000"
                    className="bg-card border-border text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="bg-card border-border text-foreground min-h-32"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {submitted ? '✓ Mensaje enviado' : 'Enviar cotización'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
