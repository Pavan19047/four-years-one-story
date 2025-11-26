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
    displayName: "Friend One",
    nickname: "The Mastermind",
    secretCode: "code123",
    letterTitle: "To the one who always had the answers",
    letterText: `Dear Friend,

Where do I even begin? Four years ago, we walked into that classroom as strangers, nervously clutching our notebooks and wondering what engineering would throw at us. Today, as I write this, I realize that every late night, every impossible deadline, and every moment of doubt was made bearable because you were there.

You were the one who could debug code at 3 AM while the rest of us were ready to give up. You were the one who explained concepts so clearly that suddenly everything made sense. But more than that, you were the friend who checked in, who made sure we all ate, who turned stressful situations into memorable adventures.

I hope you know how much your presence meant. The way you balanced brilliance with kindness, the way you never made anyone feel small for not knowing something, the way you celebrated everyone's victories as your own—these are the things I'll carry with me forever.

As we move forward into whatever life has planned, I want you to know that you made these four years unforgettable. Thank you for being my friend, my mentor, and my partner in this beautiful chaos.

Here's to all the memories we made, and all the ones still waiting for us.

With love and gratitude,
Your Friend`,
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
    displayName: "Friend Two",
    nickname: "The Comedian",
    secretCode: "laugh456",
    letterTitle: "To the one who made us laugh through it all",
    letterText: `Hey You,

If laughter is the best medicine, then you're the reason none of us had a breakdown during engineering. Seriously. I don't think I can count the number of times your perfectly-timed joke turned a stressful situation into a hilarious memory.

Remember that presentation disaster in third year? We were all panicking, the projector wasn't working, and the professor was getting impatient. And then you made that comment that had the entire class laughing, including the professor. Suddenly, nothing seemed so bad anymore. That's your superpower—turning tension into joy.

But beyond the jokes and the pranks, you were always there when things got real. You knew when to crack a joke and when to just sit with us in silence. You have this incredible ability to read the room and give people exactly what they need, whether it's a laugh or a listening ear.

Thank you for being the light in our darkest moments. Thank you for reminding us not to take life too seriously. Thank you for being unapologetically yourself and giving us permission to do the same.

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
    displayName: "Friend Three",
    nickname: "The Organizer",
    secretCode: "plan789",
    letterTitle: "To the one who kept us all together",
    letterText: `Dear Wonderful Human,

Let's be honest—without you, we would have been a complete mess. You were the glue that held our chaotic group together, the one who remembered birthdays, planned meetups, and made sure nobody felt left out.

I still marvel at how you managed to keep track of everyone's schedules, organize group studies, and somehow ensure we all showed up to the right place at the right time. While the rest of us were barely keeping our own lives together, you were out there making sure the entire group stayed connected.

But what I admire most isn't your organizational skills (though they're impressive). It's your heart. You care so deeply about people. You notice when someone's quiet, when someone's struggling, when someone needs to be included. You make people feel valued and seen, and that's a gift.

These four years wouldn't have been the same without your planning, your care, and your incredible ability to turn a random group of individuals into a family. Every gathering, every trip, every memory we made as a group—you made it happen.

Thank you for being our anchor. Thank you for caring. Thank you for making sure we all stayed connected through the chaos.

You're truly special, and I hope you never forget that.

With deep appreciation,
Your Friend`,
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
