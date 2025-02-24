const num1 = +window.prompt("첫 번째 숫자?");
const num2 = +window.prompt("두 번째 숫자?");

window.console.log(`두 숫자의 합 = ${num1 + num2}`);
window.console.log(`두 숫자의 차 = ${num1 - num2}`);
window.console.log(`두 숫자의 곱 = ${num1 * num2}`);
window.console.log(`두 숫자의 제곱 = ${num1 * num1}, ${num2 * num2}`);
window.console.log(`두 숫자의 나누기 = ${parseInt(num1 / num2)}`);

const num = +window.prompt("숫자 입력");
const result = num % 2 == 0 ? "짝수" : "홀수";

window.console.log(`해당 숫자는 ${result}입니다.`);

const int1 = +window.prompt("양의 정수를 입력하세요");

window.console.log(`${parseInt(int1 / 60)}분 ${int1 % 60}초`);
