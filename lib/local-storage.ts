import type { CartItem } from "@/lib/types"

// Generate unique IDs
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

// User/Auth storage
export interface LocalUser {
  id: string
  email: string
  password: string
  full_name: string
  phone: string
  is_admin: boolean
  created_at: string
}

export function getUsers(): LocalUser[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem("ata_users")
  return data ? JSON.parse(data) : []
}

export function saveUsers(users: LocalUser[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem("ata_users", JSON.stringify(users))
}

export function getCurrentUser(): LocalUser | null {
  if (typeof window === "undefined") return null
  const data = localStorage.getItem("ata_current_user")
  return data ? JSON.parse(data) : null
}

export function setCurrentUser(user: LocalUser | null): void {
  if (typeof window === "undefined") return
  if (user) {
    localStorage.setItem("ata_current_user", JSON.stringify(user))
  } else {
    localStorage.removeItem("ata_current_user")
  }
}

export function registerUser(
  email: string,
  password: string,
  fullName: string,
  phone: string,
): { user: LocalUser | null; error: string | null } {
  const users = getUsers()

  // Check if email already exists
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return { user: null, error: "E-postadressen är redan registrerad" }
  }

  const newUser: LocalUser = {
    id: generateId(),
    email: email.toLowerCase(),
    password, // In a real app, this would be hashed
    full_name: fullName,
    phone,
    is_admin: users.length === 0, // First user is admin
    created_at: new Date().toISOString(),
  }

  users.push(newUser)
  saveUsers(users)

  return { user: newUser, error: null }
}

export function loginUser(email: string, password: string): { user: LocalUser | null; error: string | null } {
  const users = getUsers()
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

  if (!user) {
    return { user: null, error: "Felaktig e-post eller lösenord" }
  }

  setCurrentUser(user)
  return { user, error: null }
}

export function logoutUser(): void {
  setCurrentUser(null)
}

// Orders storage
export interface LocalOrder {
  id: string
  user_id: string
  customer_name: string
  customer_email: string
  customer_phone: string
  items: CartItem[]
  subtotal: number
  total: number
  payment_method: "online" | "pickup"
  payment_status: "pending" | "paid"
  order_status: "new" | "confirmed" | "preparing" | "ready" | "completed" | "cancelled"
  notes: string | null
  created_at: string
}

export function getOrders(): LocalOrder[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem("ata_orders")
  return data ? JSON.parse(data) : []
}

export function saveOrders(orders: LocalOrder[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem("ata_orders", JSON.stringify(orders))
}

export function createOrder(orderData: Omit<LocalOrder, "id" | "created_at">): LocalOrder {
  const orders = getOrders()

  const newOrder: LocalOrder = {
    ...orderData,
    id: generateId(),
    created_at: new Date().toISOString(),
  }

  orders.unshift(newOrder) // Add to beginning
  saveOrders(orders)

  return newOrder
}

export function updateOrderStatus(orderId: string, status: LocalOrder["order_status"]): void {
  const orders = getOrders()
  const orderIndex = orders.findIndex((o) => o.id === orderId)

  if (orderIndex !== -1) {
    orders[orderIndex].order_status = status
    saveOrders(orders)
  }
}

export function updateOrderPaymentStatus(orderId: string, status: LocalOrder["payment_status"]): void {
  const orders = getOrders()
  const orderIndex = orders.findIndex((o) => o.id === orderId)

  if (orderIndex !== -1) {
    orders[orderIndex].payment_status = status
    saveOrders(orders)
  }
}

export function getUserOrders(userId: string): LocalOrder[] {
  const orders = getOrders()
  return orders.filter((o) => o.user_id === userId)
}

// Subscription storage
export interface Subscription {
  id: string
  user_id: string
  plan: "monthly" | "yearly"
  status: "active" | "cancelled" | "expired"
  price: number
  start_date: string
  end_date: string
  created_at: string
}

export const SUBSCRIPTION_PRICES = {
  monthly: 1500,
  yearly: 18000,
}

export function getSubscriptions(): Subscription[] {
  if (typeof window === "undefined") return []
  const data = localStorage.getItem("ata_subscriptions")
  return data ? JSON.parse(data) : []
}

export function saveSubscriptions(subscriptions: Subscription[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem("ata_subscriptions", JSON.stringify(subscriptions))
}

export function getUserSubscription(userId: string): Subscription | null {
  const subscriptions = getSubscriptions()
  const userSub = subscriptions.find(
    (s) => s.user_id === userId && s.status === "active" && new Date(s.end_date) > new Date(),
  )
  return userSub || null
}

export function createSubscription(userId: string, plan: "monthly" | "yearly"): Subscription {
  const subscriptions = getSubscriptions()

  // Cancel any existing active subscriptions
  subscriptions.forEach((s) => {
    if (s.user_id === userId && s.status === "active") {
      s.status = "cancelled"
    }
  })

  const startDate = new Date()
  const endDate = new Date()
  if (plan === "monthly") {
    endDate.setMonth(endDate.getMonth() + 1)
  } else {
    endDate.setFullYear(endDate.getFullYear() + 1)
  }

  const newSub: Subscription = {
    id: generateId(),
    user_id: userId,
    plan,
    status: "active",
    price: SUBSCRIPTION_PRICES[plan],
    start_date: startDate.toISOString(),
    end_date: endDate.toISOString(),
    created_at: new Date().toISOString(),
  }

  subscriptions.push(newSub)
  saveSubscriptions(subscriptions)

  return newSub
}

export function cancelSubscription(subscriptionId: string): void {
  const subscriptions = getSubscriptions()
  const subIndex = subscriptions.findIndex((s) => s.id === subscriptionId)

  if (subIndex !== -1) {
    subscriptions[subIndex].status = "cancelled"
    saveSubscriptions(subscriptions)
  }
}
