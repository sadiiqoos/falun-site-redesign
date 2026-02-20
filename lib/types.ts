export interface Profile {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  address: string | null
  created_at: string
  updated_at: string
  is_admin: boolean
}

export interface CartItem {
  id: string
  name: string
  category: string
  type: "pizza" | "side" | "drink" | "sauce" | "extra" | "kids"
  size?: "small" | "medium" | "large" | "33cl" | "50cl" | "20cl" | "50cl-salad"
  quantity: number
  unitPrice: number
  totalPrice: number
  toppings?: ToppingSelection[]
  extras?: string[]
}

export interface ToppingSelection {
  name: string
  type: "standard" | "premium"
  price: number
}

export interface Order {
  id: string
  user_id: string | null
  customer_name: string
  customer_email: string
  customer_phone: string
  customer_address: string | null
  items: CartItem[]
  subtotal: number
  total: number
  payment_method: "online" | "pickup"
  payment_status: "pending" | "paid" | "failed"
  order_status: "new" | "confirmed" | "preparing" | "ready" | "completed" | "cancelled"
  stripe_payment_intent_id: string | null
  notes: string | null
  pickup_time: string | null
  created_at: string
  updated_at: string
}

export interface PizzaSize {
  size: "small" | "medium" | "large"
  price: number
}

export interface Pizza {
  name: string
  ingredients: string
  prices: {
    small: number
    medium: number
    large: number
  }
  isSpicy?: boolean
  category: "standard" | "special" | "exclusive"
}

export interface SideItem {
  name: string
  description?: string
  price: number
  category: "side" | "extra" | "sauce" | "drink" | "kids"
  sizes?: { size: string; price: number }[]
}

export interface ToppingPrices {
  standard: { small: number; medium: number; large: number }
  premium: { small: number; medium: number; large: number }
}
