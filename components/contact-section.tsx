import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">Hitta Oss</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Kontakt</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Välkommen att kontakta oss för beställningar eller frågor!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground mb-1">Ring Oss</h3>
                    <a href="tel:023-22044" className="text-2xl font-serif font-bold text-primary hover:underline">
                      023-220 44
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground mb-1">Adress</h3>
                    <p className="text-muted-foreground">
                      Östra Hamngatan 18
                      <br />
                      791 71 Falun
                    </p>
                    <a
                      href="https://maps.google.com/maps?q=%C3%96stra+Hamngatan+18,+Falun,+Sverige"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium mt-2 inline-block"
                    >
                      Visa på karta →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-card-foreground mb-1">Öppettider</h3>
                    <p className="text-muted-foreground">
                      Alla dagar: <strong className="text-card-foreground">15:00 - 21:00</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
            >
              <a href="tel:023-22044">
                <Phone className="h-5 w-5 mr-2" />
                Ring & Beställ Nu
              </a>
            </Button>
          </div>

          {/* Map */}
          <Card className="bg-card border-border/50 overflow-hidden h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.8!2d15.6317!3d60.6065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ssv!2sse!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="American Take Away Falun - Karta"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            />
          </Card>
        </div>
      </div>
    </section>
  )
}
