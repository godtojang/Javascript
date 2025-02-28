// const str = prompt("문장을 입력하세요");

// console.log(str.split(" "));

const q1 = prompt("문장을 입력하세요").split(" ");
console.log(q1);

const coffee = prompt("커피를 입력하세요");

if (coffee.includes("ice")) {
  console.log("차가운 커피");
} else if (coffee.includes("hot")) {
  console.log("뜨거운 커피");
} else {
  console.log("미지근한 커피");
}

const word = prompt("단어를 입력하세요");
const q3 = word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
console.log(q3);
