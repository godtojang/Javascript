const list = [
  [1, 2, 3],
  [11, 12, 13],
];

window.console.log(list[1][0]);

const icecream = ["외계인", "치즈케이크", "슈팅스타"];
const [a, b] = icecream; // "외계인", "치즈케이크"
window.console.log(b);

const bread = ["소금빵", "메론빵"];
bread[2] = "소세지빵";
bread[3] = "소보루빵";

window.console.log(bread);
delete bread[1];
window.console.log(bread);

const drinks = ["콜라", "사이다", "환타", "탄산수"];

// ... -> rest 연산자
const [one, ...two] = drinks; // one => "콜라"

const color1 = ["빨", "주", "노"];
const color2 = ["초", "파", "남", "보"];

window.console.log(color1[2], color2[1]);

const [red, ...restColor1] = color1;
const [green, ...restColor2] = color2;

// destructuring 연산자
const newColor = [...restColor1, ...restColor2];
window.console.log(newColor);
