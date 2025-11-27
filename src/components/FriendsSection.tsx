import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { friends } from "@/data/friendsData"
import { Card, CardContent } from "./ui/card"
import { Dialog, DialogContent } from "./ui/dialog"
import { Button } from "./ui/button"
import { User, X } from "@phosphor-icons/react"

export function FriendsSection() {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null)

  const friend = friends.find(f => f.id === selectedFriend)

  return (
    <section id="friends" className="min-h-screen py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Dream Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seven unique personalities that somehow formed the perfect group
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map((friend, index) => (
            <motion.div
              key={friend.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary h-full"
                onClick={() => setSelectedFriend(friend.id)}
              >
                <CardContent className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {friend.profileImage ? (
                      <img 
                        src={friend.profileImage} 
                        alt={friend.displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={48} weight="fill" className="text-white" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground text-center mb-2">
                    {friend.displayName}
                  </h3>
                  <p className="text-primary font-medium text-center mb-4 italic">
                    "{friend.nickname}"
                  </p>

                  <div className="space-y-2">
                    {friend.traits.map((trait, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                        • {trait}
                      </p>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedFriend(friend.id)
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedFriend} onOpenChange={() => setSelectedFriend(null)}>
        <DialogContent className="max-w-2xl">
          {friend && (
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                    {friend.profileImage ? (
                      <img 
                        src={friend.profileImage} 
                        alt={friend.displayName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={40} weight="fill" className="text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {friend.displayName}
                    </h3>
                    <p className="text-primary font-medium text-lg italic">
                      "{friend.nickname}"
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedFriend(null)}
                >
                  <X size={24} />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    About
                  </h4>
                  <p className="text-foreground leading-relaxed">
                    {friend.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Defining Traits
                  </h4>
                  <ul className="space-y-2">
                    {friend.traits.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-1">•</span>
                        <span className="text-foreground leading-relaxed">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
