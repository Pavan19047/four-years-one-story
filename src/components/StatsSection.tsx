import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { stats } from "@/data/statsData"
import { Card, CardContent } from "./ui/card"

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      countRef.current += increment
      if (countRef.current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(countRef.current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, duration, hasAnimated])

  return <span>{count}</span>
}

export function StatsSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [inView])

  return (
    <section 
      id="stats" 
      ref={sectionRef}
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            By the Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Some moments are better measured than described
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                    {inView ? <Counter value={stat.value} /> : 0}
                    {stat.suffix}
                  </div>
                  <p className="text-foreground font-medium text-lg leading-tight">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                ∞
              </p>
              <p className="text-lg text-muted-foreground">
                Memories that will last forever
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
