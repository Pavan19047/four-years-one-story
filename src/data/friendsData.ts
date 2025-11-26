export interface Friend {
  id: string
  displayName: string
  nickname: string
  secretCode: string
  letterTitle: string
  letterText: string
  profileImage?: string
  traits: string[]
  description: string
  sharedMemories: string[]
}

export const friends: Friend[] = [
  {
    id: "friend1",
    displayName: "Vishwa Chowl",
    nickname: "Nam D Boss Friend",
    secretCode: "jalgara",
    letterTitle: "To the one who always had the answers",
    letterText: `Dear Friend,

Where do I even begin? Four years ago, we walked into that classroom as strangers, nervously clutching our notebooks and wondering what engineering would throw at us. 

At 5th sem, we became the closest, you were the one who introduced me to these girls, and from there my life had a major turning point where i fell in love with her 🫠.

That is one whole disaster, things have been cool now, but i would never forget those valorant, COD games we played, series we would discuss in class, especially Lucifer and stranger things. And my anime journey also

started coz of you. Thanks for changing my life and making it more entertaining

As we move forward into whatever life has planned, I want you to know that you made these four years unforgettable. Thank you for being my friend, my in game partner in this beautiful chaos.

Here's to all the memories we made, and all the ones still waiting for us.

With love and gratitude,
D Boss`,
    profileImage: "/images/friend1.jpg",
    traits: [
      "Most likely to solve a crisis with calm logic",
      "Known for explaining complex topics in simple terms",
      "Catchphrase: 'Let me check the documentation'"
    ],
    description: "The reliable genius of our group who somehow managed to ace every exam while still having time to help everyone else. Your patience and kindness made engineering survivable.",
    sharedMemories: [
      "That time you debugged my entire project the night before submission and refused to take credit",
      "Our 4 AM chai sessions during final year project, where we solved both code and life problems"
    ]
  },
  {
    id: "friend2",
    displayName: "Rakshitha",
    nickname: "The Water like Friend",
    secretCode: "rakshith",
    letterTitle: "To the one who is always positive ans supported me in my tough times",
    letterText: `Hey You,
You are not just a friend but a rare gem in my life. 
				   
When I was at my lowest, you stood by me, reminding me that I wasn’t alone. 
				   
Your kindness, strength, and warmth mean the world to me. 
				   
I just want to say—thank you for being you. 
				   
Wishing you endless happiness, love, and all the joy you bring to others.

Thank you for being the light in our darkest moments. Thank you for reminding us not to take life too seriously.
The world needs more people like you. Keep spreading that joy wherever you go.

Forever grateful,
Your Friend`,
    profileImage: "/images/friend2.jpg",
    traits: [
      "Most likely to turn any situation into a comedy show",
      "Known for perfect comedic timing in stressful moments",
      "Catchphrase: 'Okay but listen to this...'"
    ],
    description: "The group's mood lifter who could find humor in any situation. Your jokes got us through countless all-nighters and made even the toughest days bearable.",
    sharedMemories: [
      "The legendary prank you pulled during the lab viva that even the professor laughed at",
      "That road trip where you narrated everything like a wildlife documentary and we couldn't breathe from laughing"
    ]
  },
  {
    id: "friend3",
    displayName: "Spandana",
    nickname: "The Charm",
    secretCode: "spanbts",
    letterTitle: "To the one who kept us all together",
    letterText: `Dear Wonderful Human,

Let's be honest—without you, we would have been a complete mess. I mean i had already told you everything in that letter, but once again thank you for coming

into my life and making it so much better. Yes, i had fallen for you, but that is a different story. But the friendship we share is something I truly cherish.

That is why I have an album made for you in google photos, just not to forget you until i take my last breath.

At last, If you still think i still have feelings for you, No!. I realized how much painful it is to lose a friend by falling for them. So, I promise to be just a very good and close friend and nothing more.

Do not think that if i get closer he may develop feelings for you again. I have way bigger things to achieve in my life.

You're truly special, and I hope you never forget that and me forever.

With deep love and gratitude,
Your chingu`,
    profileImage: "/images/friend3.jpg",
    traits: [
      "Most likely to have a backup plan for the backup plan",
      "Known for remembering everyone's birthdays and preferences",
      "Catchphrase: 'I made a spreadsheet for this'"
    ],
    description: "The heart of our group who turned a collection of individuals into a family. Your thoughtfulness and planning skills created countless perfect moments.",
    sharedMemories: [
      "That surprise birthday party you organized that brought us all to tears",
      "How you always knew exactly what everyone needed before they even asked"
    ]
  },
  {
    id: "friend4",
    displayName: "Friend Four",
    nickname: "The Dreamer",
    secretCode: "star101",
    letterTitle: "To the one who dared to dream bigger",
    letterText: `Hey Dreamer,

While the rest of us were just trying to pass our exams, you were out there imagining what could be. You had this sparkle in your eyes whenever you talked about your ideas, your projects, your vision for the future. And honestly? That sparkle was contagious.

You taught us to think beyond the syllabus, to question the status quo, to believe that we could create something meaningful. Every time we felt stuck in the grind of assignments and exams, you reminded us why we chose engineering in the first place—to build, to create, to make a difference.

I remember late-night conversations where you'd talk about your dreams with such passion that we'd all get inspired. You made us believe in possibilities we hadn't even considered. You showed us that ambition and kindness can coexist, that dreaming big doesn't mean leaving people behind.

Your enthusiasm was the fuel that kept many of our projects going. Your optimism was the light that guided us through doubts. Your courage to dream differently gave us permission to dream too.

Never stop dreaming. Never stop believing. Never stop inspiring others the way you inspired us.

The world is waiting for what you'll create next.

With admiration,
Your Friend`,
    profileImage: "/images/friend4.jpg",
    traits: [
      "Most likely to start a revolutionary startup",
      "Known for inspiring late-night philosophical discussions",
      "Catchphrase: 'What if we could...'"
    ],
    description: "The visionary who reminded us that engineering is about more than grades—it's about creating the future. Your passion inspired us all to think bigger.",
    sharedMemories: [
      "That project idea you pitched at 2 AM that actually became our final year project",
      "Your presentations that felt more like TED talks and left everyone motivated"
    ]
  },
  {
    id: "friend5",
    displayName: "Friend Five",
    nickname: "The Adventurer",
    secretCode: "wild202",
    letterTitle: "To the one who made life an adventure",
    letterText: `Hey Adventurer,

"Let's do something crazy" became our favorite phrase because of you. While some people played it safe, you taught us to take chances, to say yes to spontaneous plans, to turn ordinary days into extraordinary stories.

From impromptu road trips to trying that sketchy street food at midnight to exploring parts of campus we didn't even know existed—you made sure we actually lived during these four years. You reminded us that some of the best memories come from unplanned moments and that calculated risks are worth taking.

But here's what I really admire: your courage. You weren't just adventurous with trips and experiences; you were adventurous with life. You tried new things, spoke your mind, stood up for what you believed in, and faced challenges head-on. You showed us what bravery looks like in everyday life.

Thank you for pushing us out of our comfort zones. Thank you for the adrenaline rushes and the unforgettable stories. Thank you for teaching us that life is meant to be experienced, not just endured.

Keep that adventurous spirit alive. Keep inspiring others to live boldly. Keep being wonderfully, unapologetically you.

Forever your adventure buddy,
Your Friend`,
    profileImage: "/images/friend5.jpg",
    traits: [
      "Most likely to suggest a spontaneous trip at midnight",
      "Known for having the best random adventure stories",
      "Catchphrase: 'YOLO, let's do it!'"
    ],
    description: "The free spirit who turned mundane days into adventures. Your spontaneity and courage to try new things created our best stories.",
    sharedMemories: [
      "That impromptu trip where we got lost but found that amazing sunset spot",
      "When you convinced us all to bunk class for the first time and we had the best day ever"
    ]
  },
  {
    id: "friend6",
    displayName: "Friend Six",
    nickname: "The Philosopher",
    secretCode: "think303",
    letterTitle: "To the one who made us think deeper",
    letterText: `Dear Wise One,

In a world of surface-level conversations, you brought depth. You asked the questions that made us pause and think. You turned chai breaks into philosophy sessions and made us realize there's more to life than grades and placements.

I'll never forget our conversations—the ones about purpose, meaning, happiness, and what really matters. While everyone else was rushing through life, you reminded us to slow down and reflect. You made us question our assumptions, challenge our beliefs, and grow as individuals.

You have this rare quality of making people feel heard and understood. When you listen, you really listen. When you speak, your words carry weight because they come from genuine thought and reflection. You've taught us that intelligence isn't just about knowing things—it's about understanding them deeply.

Your perspective on life, your ability to find meaning in small moments, your wisdom that goes beyond textbooks—these are gifts you've shared with all of us. You've made us better thinkers and more conscious human beings.

Thank you for the deep conversations that stretched into dawn. Thank you for challenging us to think beyond the obvious. Thank you for being the voice of reason and reflection in our chaotic lives.

Stay curious. Stay thoughtful. Stay you.

With respect and love,
Your Friend`,
    profileImage: "/images/friend6.jpg",
    traits: [
      "Most likely to turn a simple question into an existential discussion",
      "Known for quotes that hit different at 2 AM",
      "Catchphrase: 'But have you ever thought about...'"
    ],
    description: "The deep thinker who added meaning to our madness. Your philosophical insights and thoughtful perspectives made us see life differently.",
    sharedMemories: [
      "That night we discussed the meaning of success until sunrise and all had existential revelations",
      "Your perfectly-timed wisdom that helped me through my quarter-life crisis in third year"
    ]
  },
  {
    id: "friend7",
    displayName: "Friend Seven",
    nickname: "The Loyal One",
    secretCode: "true404",
    letterTitle: "To the one who was always there",
    letterText: `Dear Friend,

If I had to describe you in one word, it would be: steady. Like a lighthouse in a storm, you were the constant in our ever-changing lives. Through every high and low, every success and failure, every laugh and tear—you were there.

You're the kind of friend people write songs about. The one who shows up, no matter what. The one who remembers what you said three months ago and follows up. The one who celebrates your wins like they're their own and feels your losses just as deeply.

I think what strikes me most about you is your loyalty—not the flashy, loud kind, but the quiet, steadfast kind that actually matters. You didn't just stick around during the good times; you were there during the messy, complicated, difficult times too. You proved that friendship isn't about grand gestures; it's about showing up, again and again.

You've been my anchor, my safe space, my reminder that good people still exist. In a world where everything feels temporary, your friendship felt permanent. That kind of consistency is rare and precious.

Thank you for being reliable when life felt uncertain. Thank you for your patience, your understanding, your unwavering support. Thank you for being the kind of friend everyone deserves but few are lucky enough to find.

I hope you know how valued you are. I hope you never doubt your importance in our lives.

Forever grateful for you,
Your Friend`,
    profileImage: "/images/friend7.jpg",
    traits: [
      "Most likely to drive across the city at 3 AM if you need them",
      "Known for remembering every important detail about everyone",
      "Catchphrase: 'I'm here for you, always'"
    ],
    description: "The rock of our group whose quiet strength and unwavering loyalty held us together through everything. Your consistency was our comfort.",
    sharedMemories: [
      "That time you dropped everything to help me through a family emergency without hesitation",
      "How you've never missed a single important moment in any of our lives in four years"
    ]
  }
]
