const addTax = x => {
  const tax = 1.14;
  return x.map(p => {
    return p * tax;
  });
};

const totalShit = amountEaten => {
  return `Youre going to shit ${amountEaten * 0.8} lbs of shit!!`;
};

const pitch = (price, people) => {
  const total = people.reduce((a, { drank }) => {
    return a + drank;
  }, 0);

  return people.map(({ name, drank }) => {
    return { name, owes: Math.round(price * (drank / total)) };
  });
};

const people = [
  { name: "matteo", drank: 3290 },
  { name: "Francesco", drank: 9600 },
  { name: "giuliano", drank: 2960 }
];

console.log(pitch(200, people));
