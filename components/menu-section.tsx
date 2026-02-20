import { Flame } from "lucide-react"

const standardPizzas = [
  { name: "MARGHARITA", ingredients: "Tomat, ost", prices: { small: 97, medium: 133, large: 185 } },
]

const standardRegular = [
  { name: "TEXAS", ingredients: "Köttfärssås" },
  { name: "HAWAII", ingredients: "Skinka, ananas" },
  { name: "SEA FOOD", ingredients: "Räkor, musslor" },
  { name: "VEGETARIAN", ingredients: "Färsk paprika, färska champinjoner, lök, oliver" },
]

// Column 1 Special items
const specialColumn1 = [
  { name: "CURRYCHICKEN", ingredients: "Kyckling, banan, ananas, curry" },
  { name: "AMERICAN", ingredients: "Gorgonzola, skinka, kronärtskocka" },
  { name: "MEXICAN", ingredients: "Mexikansk köttfärs, grön chili, salsa, lök, jalapeños", hot: true },
  { name: "PEPERONI", ingredients: "Peperonikorv, färska tomater, extra lager mozzarellaost" },
  {
    name: "TROPICAL HOT",
    ingredients: "Mexikansk köttfärs, ananas, pfefferoni, grön chili, röd chilipeppar",
    hot: true,
  },
]

// Column 2 Special items
const specialColumn2 = [
  { name: "BUFFALO", ingredients: "Buffalomozarella, cocktailtomater, basilika" },
  { name: "CHICKEN TACO", ingredients: "Kyckling, salsa, guacamole, gräddfilsdressing, tacochips" },
  { name: "PARMAPIZZA", ingredients: "Lufttorkad skinka, rucola, olivolja, färska tomater" },
  { name: "ORLANDO HONEY", ingredients: "Bacon, fetaost, färsk vitlök, honung, ruccola" },
  { name: "GARLIC LOVERS", ingredients: "Peperonikorv, vitlök, lök, grön chili, pfefferoni" },
  { name: "KNOCK OUT", ingredients: "Marinerad kyckling, purjolök, banan, jordnötter, pickles" },
  { name: "CHICAGO", ingredients: "8fläskfilé, färska, champinjoner, bearnaisesås" },
]

// Column 3 Special items
const specialColumn3 = [
  { name: "EL TACO", ingredients: "Mexikansk köttfärs, salsa, guacamole, gräddfilsdressing, tacochips" },
  { name: "KEBABPIZZA", ingredients: "Kebabkött, lök, tomater, pfefferoni, isbergssallad och kebabdressing" },
  { name: "RED DEVIL", ingredients: "Köttfärssås, räkor, färska champinjoner, röd chillipeppar", hot: true },
  { name: "VEGI LOVERS", ingredients: "Halloumi ost, spenat, sparris, ruccola, pinjenötter, honung" },
]

const exclusivePizzas = [{ name: "OXFILE", ingredients: "med chili, vitlök, cocktailtomater, ruccola, parmesanost" }]

const prices = {
  margharita: { small: 97, medium: 133, large: 185 },
  standard: { small: 105, medium: 148, large: 210 },
  special: { small: 120, medium: 168, large: 240 },
  exclusive: { small: 145, medium: 198, large: 280 },
}

function PriceBar({ prices }: { prices: { small: number; medium: number; large: number } }) {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-3 mb-6 rounded-lg shadow-md">
      <span className="text-primary-foreground font-bold text-sm md:text-base tracking-wide">
        Small: {prices.small}:- &nbsp; | &nbsp; Medium: {prices.medium}:- &nbsp; | &nbsp; Large: {prices.large}:-
      </span>
    </div>
  )
}

function PizzaItem({ name, ingredients, hot }: { name: string; ingredients: string; hot?: boolean }) {
  return (
    <div className="mb-5 group p-3 rounded-lg hover:bg-accent/20 transition-all duration-200 -mx-3">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-foreground tracking-wide text-sm md:text-base group-hover:text-primary transition-colors">
          {name}
        </h4>
        {hot && (
          <span className="flex items-center gap-0.5 text-orange-500 animate-pulse">
            <Flame className="w-4 h-4 fill-orange-500" />
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mt-1">({ingredients})</p>
    </div>
  )
}

export function MenuSection() {
  return (
    <section id="meny" className="py-20 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm">Vår Meny</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Pizza Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tomat och ost ingår i alla pizzor. Välj mellan original (tjock) eller tunn botten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {/* Column 1: Standard + Special (part 1) */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 pb-2">Standard</h3>

            <PriceBar prices={prices.margharita} />
            <PizzaItem name="MARGHARITA" ingredients="Tomat, ost" />

            <PriceBar prices={prices.standard} />
            {standardRegular.map((pizza, i) => (
              <PizzaItem key={i} {...pizza} />
            ))}

            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 mt-10 pt-6 border-t border-border">
              Special
            </h3>
            <PriceBar prices={prices.special} />
            {specialColumn1.map((pizza, i) => (
              <PizzaItem key={i} {...pizza} />
            ))}
          </div>

          {/* Column 2: Special (part 2) */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"></div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 pb-2">Special</h3>
            <PriceBar prices={prices.special} />
            {specialColumn2.map((pizza, i) => (
              <PizzaItem key={i} {...pizza} />
            ))}
          </div>

          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 pb-2">Special</h3>
            <PriceBar prices={prices.special} />
            {specialColumn3.map((pizza, i) => (
              <PizzaItem key={i} {...pizza} />
            ))}

            <h3 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6 mt-10 pt-6 border-t border-border">
              Exclusive
            </h3>
            <PriceBar prices={prices.exclusive} />
            {exclusivePizzas.map((pizza, i) => (
              <PizzaItem key={i} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
