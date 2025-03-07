const num = [3, 7, 10, 15, 23];
const fruits = ["apple", "banana", "grape", "kiwi", "mango", "strawberry"];

const q1 = num.map((x) => {
  return x ** 2;
});

console.log(q1);

const q2 = (x) => {
  return x % 2 ? x + 10 : x - 10;
};

const a2 = num.map(q2);
console.log(a2);

const q3 = (x) => {
  return x.length <= 5 ? x.toUpperCase() : "🥨";
};

const a3 = fruits.map(q3);
console.log(a3);

const q4 = (x) => {
  return x.slice(0, 3);
};

const a4 = fruits.map(q4);
console.log(a4);

const q5 = (x) => {
  return x.slice(0, 1).toUpperCase() + x.slice(1, x.length);
};

const a5 = fruits.map(q5);
console.log(a5);

const starbucks = [
  { name: "민트초코라떼", price: 6000, shots: 2 },
  { name: "자몽허니블랙티", price: 6500, shots: 0 },
  { name: "돌체라떼", price: 5500, shots: 2 },
];

// 1. starbucks 할인 10% 전체

// 2. 라떼 파티, 이름에 라떼가 들어가면 샷을 하나 더 추가해서 콘솔 나타내기

// 3. 티 종류는 50% 할인하고 라떼는 우유공급 부족으로 가격 10% 올려서 콘솔로 나타내기

const q6 = (x) => {
  x.price = x.price * 0.9;
  return x;
};

const a6 = starbucks.map(q6);
console.log(a6);

const q7 = (x) => {
  x.shots = x.name.includes("라떼") ? x.shots + 1 : x.shots;
  return x;
};

const a7 = starbucks.map(q7);
console.log(a7);

const q8 = (x) => {
  if (x.name.includes("티")) {
    x.price = x.price * 0.5;
  } else if (x.name.includes("라떼")) {
    x.price = x.price * 1.1;
  } else {
    x.price = x.price;
  }
  return x;
};

const a8 = starbucks.map(q8);
console.log(a8);
