export const Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export type VoteType = keyof typeof Votes;
export type Votes = typeof Votes;
