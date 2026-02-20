import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, Droplets, GlassWater, PartyPopper } from "lucide-react"

const sides = [
  { name: "Garlic Bread", price: "40:-" },
  { name: "Garlic Bread Surprise", price: "45:-" },
  { name: "Cheesy Garlic Bread", description: "Med mozzarellaost", price: "50:-" },
]

const extras = [
  { name: "Smaksatta Kanter", description: "Vitlök eller rostad lök", price: "S: 5:- | M: 8:- | L: 12:-" },
  { name: "Ostfyllda Kanter", price: "S: 20:- | M: 30:- | L: 40:-" },
  { name: "Pizza Sallad", description: "Vitkålssallad", price: "20cl: 20:- | 50cl: 25:-" },
  { name: "Coleslaw Sallad", price: "20cl: 25:- | 50cl: 35:-" },
]

const sauces = ["Kebabsås", "Vitlöksås", "Bearnaisesås", "Gräddfilsås"]

const drinks = [
  { size: "33cl", price: "20:-" },
  { size: "50cl", price: "27:-" },
]

const kidsPizzas = [
  { name: "Clown No.1", ingredients: "Tomat, ost, skinka", price: "70:-" },
  { name: "Clown No.2", ingredients: "Köttfärssås", price: "70:-" },
  { name: "Clown Special", ingredients: "Valfri topping", price: "75:-" },
]

export function SidesSection() {
  return (
    <section id="tillbehor" className="py-20 bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <p className="text-accent font-medium tracking-widest uppercase text-sm">Komplettera Din Beställning</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Tillbehör & Extras</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-0 shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-primary/10">
                  <UtensilsCrossed className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground">Sidorätter</h3>
              </div>
              <div className="space-y-4">
                {sides.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-card-foreground">{item.name}</p>
                      {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                    </div>
                    <span className="font-bold text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-primary to-primary/70"></div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-primary/10">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-card-foreground">Extras</h3>
              </div>
              <div className="space-y-4">
                {extras.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start gap-2 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-card-foreground">{item.name}</p>
                      {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-0 shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <CardContent className="p-6">
              {/* Sauces */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Droplets className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-card-foreground">Såser</h3>
                  <span className="ml-auto text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    15:- st
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sauces.map((sauce) => (
                    <span
                      key={sauce}
                      className="inline-block bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:from-primary/10 hover:to-accent/10 transition-all cursor-default"
                    >
                      {sauce}
                    </span>
                  ))}
                </div>
              </div>

              {/* Drinks */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-accent/20">
                    <GlassWater className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-card-foreground">Läsk</h3>
                </div>
                <div className="flex gap-4">
                  {drinks.map((drink) => (
                    <div key={drink.size} className="flex-1 text-center p-3 bg-secondary/50 rounded-xl">
                      <p className="text-sm text-muted-foreground">{drink.size}</p>
                      <p className="font-bold text-primary text-lg">{drink.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-0 shadow-xl rounded-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <PartyPopper className="w-8 h-8 text-accent" />
                <h3 className="text-3xl font-serif font-bold text-foreground">Kids Club Pizza</h3>
                <PartyPopper className="w-8 h-8 text-accent scale-x-[-1]" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                {kidsPizzas.map((pizza, index) => (
                  <div
                    key={pizza.name}
                    className="text-center p-6 bg-gradient-to-br from-white to-secondary/30 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-border/30"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold text-xl shadow-md">
                      {index + 1}
                    </div>
                    <p className="font-bold text-card-foreground text-lg">{pizza.name}</p>
                    <p className="text-sm text-muted-foreground mb-3">{pizza.ingredients}</p>
                    <p className="font-bold text-primary text-xl">{pizza.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Extra topping: 6:-
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
