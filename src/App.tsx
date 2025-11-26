import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { LettersSection } from "@/components/LettersSection"
import { GallerySection } from "@/components/GallerySection"
import { TimelineSection } from "@/components/TimelineSection"
import { FriendsSection } from "@/components/FriendsSection"
import { StatsSection } from "@/components/StatsSection"
import { ClosingSection } from "@/components/ClosingSection"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <LettersSection />
        <GallerySection />
        <TimelineSection />
        <FriendsSection />
        <StatsSection />
        <ClosingSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App