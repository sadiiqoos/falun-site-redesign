import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { BuildYourOwn } from "@/components/build-your-own"
import { SidesSection } from "@/components/sides-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <BuildYourOwn />
      <SidesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
