import { motion } from "framer-motion"
import { timelineEvents } from "@/data/timelineData"
import { Card, CardContent } from "./ui/card"
import { Clock } from "@phosphor-icons/react"

export function TimelineSection() {
  return (
    <section id="timeline" className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strangers to family—here's how we got here, one semester at a time
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
                >
                  <div className="hidden md:flex absolute top-8 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center shadow-lg"
                    style={{
                      [isLeft ? 'right' : 'left']: '-1rem',
                    }}
                  >
                    <Clock size={16} weight="bold" className="text-white" />
                  </div>

                  <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary to-accent rounded-full">
                          <Clock size={16} weight="bold" className="text-white" />
                          <span className="text-white text-sm font-semibold">
                            {event.year}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4">
                        {event.semester}
                      </p>

                      <ul className="space-y-2">
                        {event.memories.map((memory, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground">
                            <span className="text-accent font-bold mt-1">•</span>
                            <span className="leading-relaxed">{memory}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
