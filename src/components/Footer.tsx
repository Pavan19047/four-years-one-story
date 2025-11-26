import { Heart } from "@phosphor-icons/react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-foreground text-sm md:text-base">
            Made with
          </p>
          <Heart size={20} weight="fill" className="text-primary" />
          <p className="text-foreground text-sm md:text-base">
            in our final year of engineering
          </p>
        </div>

        <p className="text-muted-foreground text-sm mb-2">
          Final Year • [Your College Name] • [Batch Years]
        </p>

        <p className="text-muted-foreground text-xs">
          © {currentYear} • A tribute to friendship, memories, and four unforgettable years
        </p>
      </div>
    </footer>
  )
}
