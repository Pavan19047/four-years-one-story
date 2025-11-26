import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { friends } from "@/data/friendsData"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { LockOpen, Lock, X, User } from "@phosphor-icons/react"

export function LettersSection() {
  const [selectedFriendId, setSelectedFriendId] = useState<string | null>(null)
  const [code, setCode] = useState("")
  const [error, setError] = useState(false)
  const [unlockedFriendId, setUnlockedFriendId] = useState<string | null>(null)

  const selectedFriend = friends.find(f => f.id === selectedFriendId)
  const unlockedFriend = friends.find(f => f.id === unlockedFriendId)

  const handleFriendSelect = (friendId: string) => {
    setSelectedFriendId(friendId)
    setCode("")
    setError(false)
  }

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedFriend && code === selectedFriend.secretCode) {
      setUnlockedFriendId(selectedFriend.id)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 500)
    }
  }

  const handleReset = () => {
    setSelectedFriendId(null)
    setUnlockedFriendId(null)
    setCode("")
    setError(false)
  }

  return (
    <section id="letters" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Personal Letters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each of you has a special message waiting. Select your name and enter your secret code to read your letter.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedFriendId && !unlockedFriendId && (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {friends.map((friend, index) => (
                <motion.div
                  key={friend.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 hover:border-primary"
                    onClick={() => handleFriendSelect(friend.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                        <User size={40} weight="fill" className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {friend.displayName}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">
                        "{friend.nickname}"
                      </p>
                      <Lock size={24} className="text-primary mx-auto mt-4" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {selectedFriendId && !unlockedFriendId && selectedFriend && (
            <motion.div
              key="code-entry"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-md mx-auto"
            >
              <Card className="border-2 border-primary shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <User size={48} weight="fill" className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {selectedFriend.displayName}
                    </h3>
                    <p className="text-muted-foreground">
                      Enter your secret code to read your letter
                    </p>
                  </div>

                  <form onSubmit={handleCodeSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="secret-code">Secret Code</Label>
                      <Input
                        id="secret-code"
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className={`mt-2 ${error ? 'shake border-destructive' : ''}`}
                        placeholder="Enter your code"
                        autoFocus
                      />
                      {error && (
                        <p className="text-sm text-destructive mt-2">
                          Hmm, that doesn't look right. Try again :)
                        </p>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button type="submit" className="flex-1">
                        <LockOpen size={20} className="mr-2" />
                        Unlock Letter
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={handleReset}
                      >
                        <X size={20} />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {unlockedFriendId && unlockedFriend && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="paper-texture border-none shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {unlockedFriend.letterTitle}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        For {unlockedFriend.displayName}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={handleReset}
                      className="hover:bg-muted"
                    >
                      <X size={24} />
                    </Button>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <div className="text-foreground leading-relaxed whitespace-pre-line text-base md:text-lg">
                      {unlockedFriend.letterText}
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-border">
                    <Button 
                      variant="outline" 
                      onClick={handleReset}
                      className="w-full md:w-auto"
                    >
                      Back to Letters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
