const solution = (my_string) =>
  [...my_string].map((x) =>
    x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
  );

console.log(solution("cccCCC"));

const solution1 = (num_list) =>
  num_list.length >= 11
    ? num_list.reduce((a, c) => a + c)
    : num_list.reduce((a, c) => a * c);

console.log(solution1([1, 4, 5, 6, 2, 5, 6, 2]));
