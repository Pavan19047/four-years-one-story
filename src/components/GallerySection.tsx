import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { photos, Photo } from "@/data/photosData"
import { Card, CardContent } from "./ui/card"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Dialog, DialogContent } from "./ui/dialog"
import { Button } from "./ui/button"
import { X, CaretLeft, CaretRight } from "@phosphor-icons/react"

type YearFilter = "All" | "1st Year" | "2nd Year" | "3rd Year" | "Final Year"

export function GallerySection() {
  const [selectedYear, setSelectedYear] = useState<YearFilter>("All")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const filteredPhotos = selectedYear === "All" 
    ? photos 
    : photos.filter(photo => photo.year === selectedYear)

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
    setLightboxOpen(true)
  }

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = filteredPhotos.length - 1
    if (newIndex >= filteredPhotos.length) newIndex = 0
    setSelectedPhoto(filteredPhotos[newIndex])
  }

  return (
    <section id="gallery" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Four years captured in moments that made us laugh, cry, and everything in between
          </p>

          <Tabs value={selectedYear} onValueChange={(v) => setSelectedYear(v as YearFilter)}>
            <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="1st Year">1st Year</TabsTrigger>
              <TabsTrigger value="2nd Year">2nd Year</TabsTrigger>
              <TabsTrigger value="3rd Year">3rd Year</TabsTrigger>
              <TabsTrigger value="Final Year">Final</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="break-inside-avoid"
              >
                <Card 
                  className="cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  onClick={() => openLightbox(photo)}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-muted to-accent/20 flex items-center justify-center">
                      <p className="text-sm text-muted-foreground text-center px-4">
                        [{photo.title}]<br/>
                        <span className="text-xs">Image placeholder</span>
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-lg font-medium px-4 text-center">
                        View Memory
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {photo.year}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {photo.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0">
          {selectedPhoto && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setLightboxOpen(false)}
              >
                <X size={24} />
              </Button>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 flex items-center justify-center p-8">
                  <p className="text-muted-foreground text-center">
                    [{selectedPhoto.title}]<br/>
                    <span className="text-sm">Large image placeholder</span>
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigatePhoto("prev")}
                >
                  <CaretLeft size={32} weight="bold" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigatePhoto("next")}
                >
                  <CaretRight size={32} weight="bold" />
                </Button>
              </div>

              <div className="p-6 bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {selectedPhoto.year}
                    </p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
