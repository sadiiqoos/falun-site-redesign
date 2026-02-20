import { Button } from "@/components/ui/button"
import { Phone, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
        }}
      />

      {/* Statue of Liberty on right side */}
      <div className="absolute right-0 bottom-0 h-full w-1/2 z-0 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1503594384566-461fe158e797?q=80&w=800&auto=format&fit=crop"
          alt="Statue of Liberty"
          className="h-full w-full object-contain object-right-bottom opacity-40"
        />
      </div>

      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2d5c]/70 via-transparent to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-white/90 font-serif italic tracking-wide mb-2 text-xl md:text-2xl drop-shadow-lg">Falun</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-4 leading-tight italic drop-shadow-lg">
          American
          <br />
          Take Away
        </h1>
        <p className="text-white tracking-[0.3em] uppercase text-sm md:text-base mb-10 drop-shadow-md">
          It's Your American Pizza Place
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="tel:023-22044">
              <Phone className="h-5 w-5 mr-2" />
              Ring & Beställ: 023-220 44
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#1a2d5c] px-8 py-6 text-lg bg-transparent rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <a href="#meny">Se Menyn</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#meny" aria-label="Scrolla ner till menyn">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </a>
        </div>
      </div>
    </section>
  )
}
