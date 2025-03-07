// const solution = (myString) =>
//   [...myString]
//     .map((x) => (x == "a" ? x.toUpperCase() : x.toLowerCase()))
//     .join(" ");

// [..."abstract algebra"].map((x) =>
//   x == "a" ? x.toUpperCase() : x.toLowerCase()
// );
// [..."PrOgRaMmErS"].map((x) => (x == "a" ? x.toUpperCase() : x.toLowerCase()));

// console.log(solution("alkdfjaslkdfjlASDFASDFAlkjlj"));

// const solution = (todo_list, finished) =>
//   todo_list.filter((x, i) => !finished[i]);

// console.log(solution(["mark", "cart"], [true, false]));

// const solution = (names) => names.filter((x, i) => i % 5 == 0);

// console.log(
//   solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
// );

const solution = (start_num, end_num) =>
  new Array(start_num - end_num + 1).fill(0).map((x, i) => start_num - i);
console.log(solution(8, 2));
