// const word1 = prompt("단어를 입력하세요").length;

// if (word1 % 2 == 0) {
//   console.log(`🥕`);
// } else {
//   console.log(`🍎`);
// }

const q1 = prompt("1번 단어 입력");
console.log(q1.length % 2 ? "🍎" : "🥕");

// const word2 = prompt("단어를 입력하세요");

// const q2 = word2.slice(0, 3);
// q2.toUpperCase();
// console.log(q2);

const word2 = prompt("2번 단어 입력");
console.log(word2.slice(0, 3).toUpperCase() + word2.slice(3, word2.length));

// const string = prompt("문장을 입력하세요");

const word3 = prompt("3번 문장 입력");
console.log(word3.split(" "));

const word4 = prompt("4번 문자 입력");
console.log(word4.includes("a") ? "포함" : "미포함");

const word5 = prompt("5번 문자 입력");
console.log(word5.length < 10 ? word5.repeat(3) : word5.toUpperCase());
