const length = window.prompt("한 변의 길이?");

window.console.log(
  `정사각형 한 변의 길이 ${length}cm는 둘레 : ${length * 4}cm 넓이 : ${
    length * length
  } cm^2 입니다.`
);

const dollar = window.prompt("달러 얼마?");
const won = parseInt(dollar) * 1400;

window.console.log(`${dollar}는 ${won}원 입니다.`);

const birth = window.prompt("출생 연도?");
const age = parseInt(birth);

window.console.log(`${birth}은 ${2026 - age}살 입니다.`);

const first = window.prompt("첫 번째 숫자 입력");
const second = window.prompt("두 번째 숫자 입력");
const sum = Number(first) + Number(second);

window.console.log(`두 수의 합 = ${sum}`);
