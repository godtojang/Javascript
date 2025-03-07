const a = new Array(100).fill(1).map((x, i) => i + 10);
console.log(a);

const q1 = new Array(101).fill(0).map((x, i) => (i % 5 == 0 ? "🍅" : i));
console.log(q1);

const q2 = new Array(101)
  .fill(0)
  .map((x, i) => (i % 3 == 0 || i % 7 == 0 ? String(i) : i));
console.log(q2);

const q3 = new Array(101)
  .fill(0)
  .map((x, i) => i)
  .reduce((a, c) => a + c);
console.log(q3);

const q4 = new Array(101)
  .fill(0)
  .map((x, i) =>
    String(i).includes("3") ||
    String(i).includes("6") ||
    String(i).includes("9")
      ? "👏"
      : Number(i)
  );
console.log(q4);
