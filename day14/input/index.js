import { hasSpecialChar, lengthValid } from "./func.js";

const input = document.querySelector(".text");
const span = document.querySelector(".length");
const symbol = document.querySelector(".symbol");

input.addEventListener("input", () => {
  span.innerHTML = input.value.length;
});

// 1. 숫자 10글자 넘으면 빨간색 아니면 검은색
// 2. 조건의 글씨 색이 합당하면 초록색 아니면 검은색

input.addEventListener("input", () => {
  const { length } = input.value;
  span.innerHTML = length;
  span.style.color = lengthValid(length);
  symbol.style.color = hasSpecialChar(input.value, "!@#$%~");
});
