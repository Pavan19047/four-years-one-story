export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
  icon?: string
}

export const stats: Stat[] = [
  {
    id: "stat1",
    label: "Assignments Survived",
    value: 132,
    suffix: ""
  },
  {
    id: "stat2",
    label: "Group Bunking Sessions",
    value: 27,
    suffix: ""
  },
  {
    id: "stat3",
    label: "Canteen Chai Count",
    value: 378,
    suffix: "+"
  },
  {
    id: "stat4",
    label: "All-Nighters Together",
    value: 15,
    suffix: ""
  },
  {
    id: "stat5",
    label: "Group Photos Taken",
    value: 1247,
    suffix: "+"
  },
  {
    id: "stat6",
    label: "Inside Jokes Created",
    value: 89,
    suffix: ""
  },
  {
    id: "stat7",
    label: "Motivational Speeches Given",
    value: 43,
    suffix: ""
  },
  {
    id: "stat8",
    label: "Collective Hours of Laughter",
    value: 2840,
    suffix: "+"
  }
]
