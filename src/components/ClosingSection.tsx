import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Heart } from "@phosphor-icons/react"

export function ClosingSection() {
  return (
    <section id="closing" className="min-h-screen py-20 px-4 bg-gradient-to-b from-accent/10 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="inline-block mb-6"
          >
            <Heart size={56} weight="fill" className="text-primary mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Until We Meet Again
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Card className="paper-texture border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed text-lg mb-6">
                  As I put together this website, I found myself scrolling through thousands of photos, 
                  reading old chat messages, and reliving every moment we shared. And I realized something: 
                  these weren't just four years of engineering—they were four years of becoming who we are.
                </p>

                <p className="text-foreground leading-relaxed text-lg mb-6">
                  We came in as strangers with nothing in common except a major we barely understood. 
                  We're leaving as a family that's been through everything together. The late nights, the 
                  breakdowns, the victories, the failures, the laughter, the tears—all of it shaped us, 
                  and all of it was better because we had each other.
                </p>

                <p className="text-foreground leading-relaxed text-lg mb-6">
                  To each of you: thank you. Thank you for the memories that will make me smile when I'm 
                  old and gray. Thank you for being my support system when things got tough. Thank you for 
                  celebrating my wins and carrying me through my losses. Thank you for accepting me exactly 
                  as I am and loving me anyway.
                </p>

                <p className="text-foreground leading-relaxed text-lg mb-6">
                  Life will take us in different directions now. We'll have new jobs, new cities, new friends, 
                  new adventures. But I hope you know that no matter where we end up, no matter how much time 
                  passes, you'll always have a special place in my heart. You're not just my engineering 
                  batchmates—you're my people.
                </p>

                <p className="text-foreground leading-relaxed text-lg mb-8">
                  This isn't goodbye. This is just "see you later." Because friends like you don't come around 
                  often, and when they do, you hold on to them forever.
                </p>

                <p className="text-foreground leading-relaxed text-lg font-medium text-center">
                  Here's to the memories we made and the ones we'll make.<br/>
                  Here's to staying in touch and growing old together.<br/>
                  Here's to us.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t-2 border-primary/20">
                <blockquote className="text-center italic text-xl text-muted-foreground">
                  "How lucky I am to have something that makes saying goodbye so hard."
                  <footer className="text-sm mt-2 text-muted-foreground/70">— Winnie the Pooh</footer>
                </blockquote>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  With all my love,
                </p>
                <p className="text-foreground font-semibold text-lg mt-2">
                  [Your Name]
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
