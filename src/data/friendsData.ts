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
      "Most likely to cry before the sad scene even starts",
      "Known for calming everyone down while being emotional herself",
      "Catchphrase: I’m not crying… okay maybe a little."
    ],
    description: "The softest soul among us, who feels everything a little more deeply — joy, pain, and random emotional scenes in reels. Your kindness, calm nature, and genuine care made you the emotional anchor of our group.",
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
    letterTitle: "To the one who I will cherish forever",
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
      "Most likely to scream “OMG BTS!” in public",
      "Known for dramatic monologues over tiny issues",
      "Catchphrase: “Listen… it’s not drama, it’s emotions.”"
    ],
    description: "A walking K-drama episode with mood swings, expressions, and surprise plot twists. Your chaotic energy, childish charm, and random BTS rants made life infinitely more entertaining.",
    sharedMemories: [
      "That surprise birthday party you organized that brought us all to tears",
      "How you always knew exactly what everyone needed before they even asked"
    ]
  },
  {
    id: "friend4",
    displayName: "Pragna",
    nickname: "The Pummy",
    secretCode: "pummy",
    letterTitle: "To the one who dared to dream to become tall",
    letterText: `Hey Pragna,

Pragna, you may be short in height, but the amount of attitude and academic power you carry could run a small country.
You’re that annoying little sister I didn’t ask for but ended up loving anyway. You get angry faster than a chilli hitting hot oil, but it lasts only two minutes before you become cute again.
Smart, responsible, and secretly caring — you hide your affection behind tiny bursts of anger. But I’ve seen the softer side too, the one that supports, helps, and looks out for everyone.
Thank you for being the small package with maximum impact.

With admiration,
Your Broo`,
    profileImage: "/images/friend4.png",
    traits: [
      "Most likely to need help reaching the top shelf",
      "Known for scoring full marks and still saying “I didn’t study”",
      "Catchphrase: “Who said I’m short? I’m fun-sized.”"
    ],
    description: "Small in height, huge in attitude, and even bigger in academic domination. You’re the little sister who bullies us with cuteness one second and chilli-level anger the next.",
    sharedMemories: [
      "That project idea you pitched at 2 AM that actually became our final year project",
      "Your presentations that felt more like TED talks and left everyone motivated"
    ]
  },
  {
    id: "friend5",
    displayName: "Shwetha",
    nickname: "Mother Teresa",
    secretCode: "sk",
    letterTitle: "To the best human being I know",
    letterText: `Hey, Grass Thrower,

"Shwetha, you are the mother of the group — the one who checks if everyone ate, slept, submitted assignments, and breathed properly.
Kindest heart, calmest brain, and the topper who never makes anyone feel less. You’re gentle in a way that feels rare nowadays.
You carry a sense of responsibility that most people your age don’t even think about. And despite all of that, you’re one of the funniest and most wholesome people to be around.
Thank you for taking care of everyone, even when nobody asked — and for making our college journey feel safe and warm.
Forever your adventure buddy,
Your Friend`,
    profileImage: "/images/friend5.png",
    traits: [
      "Most likely to ask “Did you eat?” before saying hello",
      "Known for handling 50 people's problems at once",
      "Catchphrase: “I’ll take care of it… you guys relax.”"
    ],
    description: "The calm, composed, responsible soul who somehow managed to be the best CR, a topper, and everyone’s emotional nurse. You care like a mother, work like a warrior, and still stay humble like a saint.  ",
    sharedMemories: [
      "That impromptu trip where we got lost but found that amazing sunset spot",
      "When you convinced us all to bunk class for the first time and we had the best day ever"
    ]
  },
  {
    id: "friend6",
    displayName: "Sangeetha",
    nickname: "The Cringe Queen",
    secretCode: "dhanush",
    letterTitle: "To the one who defined the word cringe",
    letterText: `Dear Wise One,

Sangeetha, sryy "Cringe Geetha" you are the definition of beautiful chaos. The way you laugh — oh god — like a scooter that refuses to start.
You bring cringe, noise, memes, and madness into the group… and somehow it’s all lovable.
You’re fun in the most unfiltered way, the kind of friend who can make a silent room burst into laughter without trying.
Under all that chaos, there’s a genuinely sweet person who cares deeply. Thanks for giving us moments we can laugh about for the next 10 years.

With respect and love,
Your Jaatre`,
    profileImage: "/images/friend6.png",
    traits: [
      "Most likely to laugh before the joke is even told",
      "Known for making the whole class turn around with one laugh",
      "Catchphrase: “Hehehehehe—wait—stop—HAHAHAHA!”"
    ],
    description: "The queen of cringe, chaos, and uncontrollable laughter. Your reactions, jokes, and dramatic laugh turned even the most boring days into comedy episodes we’ll never forget.",
    sharedMemories: [
      "That night we discussed the meaning of success until sunrise and all had existential revelations",
      "Your perfectly-timed wisdom that helped me through my quarter-life crisis in third year"
    ]
  },
  {
    id: "friend7",
    displayName: "Manoj",
    nickname: "The Loyal One",
    secretCode: "devdas",
    letterTitle: "To the one who was always there",
    letterText: `Dear Friend,

Manoj, you are the most dependable CR we ever had — responsible, calm, and genuinely helpful.
You’re cool without forcing it, kind without showing off, and funny without trying.
Your love life… well… let's just say even your luck gets nervous around you. But if loyalty had a face, it would probably look like you.
Thanks for being the guy who always showed up when needed, who supported everyone without hesitation, and who stayed real from day one.

Forever grateful for you,
Your Friend`,
    profileImage: "/images/friend7.png",
    traits: [
      "Most likely to manage attendance, semester chaos, and heartbreak together",
      "Known for helping everyone even before they ask",
      "Catchphrase: “Bro leave it, it’s my fate only.”"
    ],
    description: "The most dependable, cool-headed CR our class could ever have. You helped everyone without hesitation, handled every issue professionally, and still had the unluckiest love life in history.",
    sharedMemories: [
      "That time you dropped everything to help me through a family emergency without hesitation",
      "How you've never missed a single important moment in any of our lives in four years"
    ]
  }
]
