export interface TimelineEvent {
  id: string
  year: string
  semester: string
  title: string
  memories: string[]
  icon?: string
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "event1",
    year: "1st Year",
    semester: "Semester 1",
    title: "The 'Who Are You?' Phase",
    memories: [
      "Awkward introductions and trying to figure out who we'd sit with",
      "First time realizing engineering was going to be HARD",
      "Creating our first group chat and sending 847 messages on day one",
      "That confusing C programming lab where none of us knew what a pointer was"
    ]
  },
  {
    id: "event2",
    year: "1st Year",
    semester: "Semester 2",
    title: "Finding Our Tribe",
    memories: [
      "The moment we went from classmates to actual friends",
      "First group assignment where we learned each other's work styles (and procrastination levels)",
      "Discovering our favorite canteen spot that became our unofficial office",
      "First college festival where we actually had fun instead of feeling lost"
    ]
  },
  {
    id: "event3",
    year: "2nd Year",
    semester: "Semester 3",
    title: "The Chaos Begins",
    memories: [
      "Late-night lab sessions that turned into comedy shows",
      "First time we all bunked together and felt like rebels",
      "Learning to copy-paste code and pretending we understood it",
      "That presentation disaster that somehow became our inside joke"
    ]
  },
  {
    id: "event4",
    year: "2nd Year",
    semester: "Semester 4",
    title: "Peak Engineering Energy",
    memories: [
      "48-hour tech fest marathon fueled by chai and determination",
      "Group studies that were 20% studying and 80% gossip",
      "First time someone cried over an exam and we all joined in solidarity",
      "The legendary road trip where everything went wrong but felt so right"
    ]
  },
  {
    id: "event5",
    year: "3rd Year",
    semester: "Semester 5",
    title: "Reality Check Season",
    memories: [
      "Internship prep panic and resume building stress",
      "Mock interviews where we roasted each other lovingly",
      "That industrial visit where we learned more about each other than the industry",
      "Starting to realize our time together was limited"
    ]
  },
  {
    id: "event6",
    year: "3rd Year",
    semester: "Semester 6",
    title: "The Pre-Final Year Blues",
    memories: [
      "Brainstorming final year project ideas (ranging from genius to ridiculous)",
      "First existential crisis about life after graduation",
      "Summer internships pulling us in different directions but keeping us connected",
      "Promising we'd make final year count"
    ]
  },
  {
    id: "event7",
    year: "Final Year",
    semester: "Semester 7",
    title: "The Beginning of the End",
    memories: [
      "Project work that consumed our lives but brought us closer",
      "Placement season stress and celebrating every win together",
      "Late-night debugging sessions that turned philosophical",
      "Realizing every 'last' was becoming more emotional"
    ]
  },
  {
    id: "event8",
    year: "Final Year",
    semester: "Semester 8",
    title: "The Grand Finale",
    memories: [
      "Final project presentation where we actually impressed ourselves",
      "Last-minute exam prep and helping each other one final time",
      "Every canteen visit feeling bittersweet",
      "Farewell night where we ugly-cried and promised to stay in touch"
    ]
  }
]
