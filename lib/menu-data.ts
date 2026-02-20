import type { ToppingPrices } from "./types"

export const standardToppings = [
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

export const premiumToppings = ["Lufttorkad skinka", "Gorgonzola", "Kyckling", "Peperonikorv"]

export const toppingPrices: ToppingPrices = {
  standard: { small: 10, medium: 20, large: 30 },
  premium: { small: 20, medium: 30, large: 40 },
}

export const sides = [
  { name: "Garlic Bread", price: 40, category: "side" as const },
  { name: "Garlic Bread Surprise", price: 45, category: "side" as const },
  { name: "Cheesy Garlic Bread", description: "Med mozzarellaost", price: 50, category: "side" as const },
]

export const extras = [
  { name: "Smaksatta Kanter - Liten", description: "Vitlök eller rostad lök", price: 5, category: "extra" as const },
  { name: "Smaksatta Kanter - Medium", description: "Vitlök eller rostad lök", price: 8, category: "extra" as const },
  { name: "Smaksatta Kanter - Stor", description: "Vitlök eller rostad lök", price: 12, category: "extra" as const },
  { name: "Ostfyllda Kanter - Liten", price: 20, category: "extra" as const },
  { name: "Ostfyllda Kanter - Medium", price: 30, category: "extra" as const },
  { name: "Ostfyllda Kanter - Stor", price: 40, category: "extra" as const },
  { name: "Pizza Sallad 20cl", description: "Vitkålssallad", price: 20, category: "extra" as const },
  { name: "Pizza Sallad 50cl", description: "Vitkålssallad", price: 25, category: "extra" as const },
  { name: "Coleslaw Sallad 20cl", price: 25, category: "extra" as const },
  { name: "Coleslaw Sallad 50cl", price: 35, category: "extra" as const },
]

export const sauces = [
  { name: "Kebabsås", price: 15, category: "sauce" as const },
  { name: "Vitlöksås", price: 15, category: "sauce" as const },
  { name: "Bearnaisesås", price: 15, category: "sauce" as const },
  { name: "Gräddfilsås", price: 15, category: "sauce" as const },
]

export const drinks = [
  { name: "Läsk 33cl", price: 20, category: "drink" as const },
  { name: "Läsk 50cl", price: 27, category: "drink" as const },
]

export const kidsPizzas = [
  { name: "Clown No.1", description: "Tomat, ost, skinka", price: 70, category: "kids" as const },
  { name: "Clown No.2", description: "Köttfärssås", price: 70, category: "kids" as const },
  { name: "Clown Special", description: "Valfri topping", price: 75, category: "kids" as const },
]
