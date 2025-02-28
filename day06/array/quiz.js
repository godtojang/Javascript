const numArray = [3, 12, 21, 30, 45];
const strArray = ["americano", "latte", "mint", "cocoa", "lemonade"];

// 1. numArray 홀수면 '🥚' 짝수면 '🥩'로 바꾸기
// 2. numArray 5의 배수면 "5의 배수!" 아니면 그대로 냅두기
// 3. numArray 20보다 작으면 0으로 바꾸고 아니면 50으로 바꾸기
// 4. strArray 문자의 길이가 홀수면 '💛' 짝수면 '💢'로 바꾸기
// 5. strArray 문자에서 'a', 'e'가 포함되면 대문자화 아니면 그대로 냅두기
// 6. strArray 문자에서 l로 시작하면 문자의 길이로 바꾸고 아니면 대문자화로 하기

const q1 = (x) => {
  return x % 2 == 1 ? "🥚" : "🥩";
};

const a1 = numArray.map(q1);
console.log(a1);

const q2 = (x) => {
  return x % 5 == 0 ? "5의 배수" : x;
};

const a2 = numArray.map(q2);
console.log(a2);

const q3 = (x) => {
  return x < 20 ? 0 : 50;
};

const a3 = numArray.map(q3);
console.log(a3);

const q4 = (x) => {
  return x.length % 2 == 1 ? "💛" : "💢";
};

const a4 = strArray.map(q4);
console.log(a4);

const q5 = (x) => {
  return x.includes("a" || "e") ? x.toUpperCase() : x;
};

const a5 = strArray.map(q5);
console.log(a5);

const q6 = (x) => {
  return x.startsWith("l") ? x.length : x.toUpperCase();
};

const a6 = strArray.map(q6);
console.log(a6);
