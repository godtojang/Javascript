const egg = "🥚";
const brokenEgg = "🐣";
const chick = "🐥";
const hen = "🐓";
const chicken = "🍗";

const makeChicken = (a, sec) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(a);
      res(a);
    }, sec);
  });

makeChicken(egg, 1000)
  .then(() => makeChicken(brokenEgg, 2000))
  .then(() => makeChicken(chick, 2000))
  .then(() => makeChicken(hen, 2000))
  .then(() => makeChicken(chicken, 2000));
