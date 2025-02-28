// 일반 함수
function hello(x) {
  return x + " 안녕!";
}
// 화살표(람다) 함수
const hello1 = (x) => {
  return x + " 안녕!";
};

const plus = (x, y) => {
  return x + y;
  console.log(plus);
};

const oddOrEven = (x) => {
  return x % 2 == 0 ? "짝수" : "홀수";
};

const changeWord = (x) => {
  return x.length >= 10 ? x.toUpperCase() : x.toLowerCase();
};

console.log(`${plus(3, 4)}`);
console.log(`${changeWord("apple")}`);
