export const increment = (diff) => (
  { type: `INCREMENT`, diff: diff }
);

export const decrement = () => (
  { type: `DECREMENT` }
);
