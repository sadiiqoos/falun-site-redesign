import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">American Take Away</h3>
            <p className="text-background/70 leading-relaxed">
              Pizzeria i Falun som serverar äkta amerikansk pizza med tjocka frasiga bottnar och generösa pålägg sedan
              starten.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Snabblänkar</h4>
            <nav className="space-y-2">
              <a href="#meny" className="block text-background/70 hover:text-background transition-colors">
                Meny
              </a>
              <a href="#your-choice" className="block text-background/70 hover:text-background transition-colors">
                Your Choice
              </a>
              <a href="#tillbehor" className="block text-background/70 hover:text-background transition-colors">
                Tillbehör
              </a>
              <a href="#kontakt" className="block text-background/70 hover:text-background transition-colors">
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Kontakt</h4>
            <div className="space-y-3 text-background/70">
              <a href="tel:023-22044" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                023-220 44
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Östra Hamngatan 18, 791 71 Falun</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Öppet alla dagar 15-21</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} American Take Away Falun. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}
