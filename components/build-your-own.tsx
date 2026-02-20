import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const standardToppings = [
  "Ananas",
  "Bacon",
  "Banan",
  "Lök",
  "Bearnaisesås",
  "Färska champinjoner",
  "Färska tomater",
  "Färsk paprika",
  "Färsk vitlök",
  "Gräddfilsdressing",
  "Grön chili",
  "Guacamole",
  "Jalapenos",
  "Kronärtskocka",
  "Mexikansk köttfärs",
  "Mozarellaost",
  "Musslor",
  "Oliver",
  "Pfefferoni",
  "Räkor",
  "Salsa",
  "Skinka",
  "Sparris",
  "Tonfisk",
]

const premiumToppings = ["Lufttorkad skinka", "Gorgonzola", "Kyckling", "Peperonikorv"]

export function BuildYourOwn() {
  return (
    <section id="your-choice" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">Create Your Own</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Your Choice</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create your own perfect pizza with our fresh ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Base Pizza */}
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif">Grund: Margharita</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Tomat och ost som bas</p>
              <div className="flex flex-wrap gap-4 text-lg font-medium text-primary">
                <span>S: 97:-</span>
                <span>M: 133:-</span>
                <span>L: 185:-</span>
              </div>
            </CardContent>
          </Card>

          {/* Cheese Crust */}
          <Card className="bg-card border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif">Ostfyllda Kanter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Extra ost i kanterna</p>
              <div className="flex flex-wrap gap-4 text-lg font-medium text-primary">
                <span>S: 20:-</span>
                <span>M: 30:-</span>
                <span>L: 40:-</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Toppings */}
        <div className="mt-12 max-w-5xl mx-auto">
          <Card className="bg-secondary border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Standard Toppings</CardTitle>
              <p className="text-muted-foreground">S: 10:- | M: 20:- | L: 30:- per styck</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {standardToppings.map((topping) => (
                  <span
                    key={topping}
                    className="inline-block bg-background text-foreground px-3 py-1.5 rounded-full text-sm border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {topping}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Premium Toppings</CardTitle>
              <p className="text-muted-foreground">S: 20:- | M: 30:- | L: 40:- per styck</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {premiumToppings.map((topping) => (
                  <span
                    key={topping}
                    className="inline-block bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium"
                  >
                    {topping}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
