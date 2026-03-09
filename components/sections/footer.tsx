import { Zap } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-primary-foreground py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-secondary" />
              <div>
                <p className="font-bold text-lg">Meser</p>
                <p className="text-sm font-light">Ingeniería</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Soluciones profesionales de ingeniería eléctrica desde 1981
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-semibold mb-3 text-secondary">Enlaces</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-secondary transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-3 text-secondary">Servicios</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-secondary transition-colors">Proyectos Eléctricos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Paneles Solares</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Mantenimiento</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Consultoría</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-3 text-secondary">Contacto</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="text-secondary">→</span>
                <a href="tel:6677152887" className="hover:text-secondary transition-colors">
                  (667) 715-2887
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">→</span>
                <a href="mailto:info@meseringenieria.com" className="hover:text-secondary transition-colors">
                  info@meseringenieria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              © {currentYear} Meser Ingeniería. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-secondary transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
