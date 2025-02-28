// object paradigm
// 기본 : str, num, bool, un, nu
// 참조 : arr, obj, func, window

const menu = ["americano", "latte", "mint"];

menu.push("cocoa"); // 역할 : 맨 뒤 추가하기
menu.pop(); // 역할 : 맨 뒤 삭제하기
menu.slice(0, 2); // 역할 : 0~1 까지 배열 잘라서 돌려줌

const num = [2, 4, 6, 8, 10];
num.map((x) => {
  return x * 2;
}); // 역할 : 요소 바꾸기

const double = (x) => {
  return x * 2;
};

const plus10 = (x) => {
  return x + 10;
};

const q1 = (x) => {
  return x < 5 ? x * 2 : x * 3;
};

const a1 = num.map(double); // 역할 : 안의 요소들을 바꿔주기
console.log(a1);
const a2 = num.map(plus10);
console.log(a2);
const a3 = num.map(q1);
console.log(a3);

const a4 = num
  .filter((x) => {
    return 5 < x;
  }) // 역할 : 조건에 부합하는 요소만 살리기
  .map((x) => {
    return x + 10;
  });

console.log(a4);
