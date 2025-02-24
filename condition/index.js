// condition (조건)

const num1 = +window.prompt("숫자 입력");
if (num1 > 0) {
  window.console.log("양수");
} else if (num1 == 0) {
  window.console.log("0이다");
} else {
  window.console.log("음수");
}

window.console.log("끝");
