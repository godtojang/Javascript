const beverage = +window.prompt("음료 종류 고르기(1~3)");
const money = +window.prompt("금액 투입");

if (beverage == 1 && money >= 3000) {
  window.console.log("아메리카노");
  window.console.log(`잔돈 : ${money - 3000}`);
} else if (beverage == 2 && money >= 4000) {
  window.console.log("레몬에이드");
  window.console.log(`잔돈 : ${money - 4000}`);
} else if (beverage == 3 && money >= 5000) {
  window.console.log("뭐먹음?");
  window.console.log(`잔돈 : ${money - 5000}`);
}

// const bus = window.prompt(
//   "노선의 종류를 입력하쇼 1.시내버스 2.광역버스 3.마을버스"
// );
// const age = window.prompt("승객의 나이를 입력하쇼");

// if (bus == 1) {
//   const bus = 1200;
//   if (age <= 7 || age >= 65) {
//     window.console.log(`공짜요`);
//   } else if (age <= 19) {
//     window.console.log(`청소년 입니다. ${bus * 0.7}원 내쇼`);
//   } else {
//     window.console.log(`${bus}원 내쇼`);
//   }
// } else if (bus == 2) {
//   const bus = 2000;
//   if (age <= 7 || age >= 65) {
//     window.console.log(`공짜요`);
//   } else if (age <= 19) {
//     window.console.log(`청소년 입니다. ${bus * 0.7}원 내쇼`);
//   } else {
//     window.console.log(`${bus}원 내쇼`);
//   }
// } else if (bus == 3) {
//   const bus = 1000;
//   if (age <= 7 || age >= 65) {
//     window.console.log(`공짜요`);
//   } else if (age <= 19) {
//     window.console.log(`청소년 입니다. ${bus * 0.7}원 내쇼`);
//   } else {
//     window.console.log(`${bus}원 내쇼`);
//   }
// }

const bus = +window.prompt("버스 노선 종류 선택(1~3)") - 1;
const age = +window.prompt("승객 나이 입력");

// const busName = ["시내버스", "광역버스", "마을버스"];
// const busCost = [1200, 2000, 1000];

const busObject = [
  { name: "시내버스", cost: 1200 },
  { name: "광역버스", cost: 2000 },
  { name: "마을버스", cost: 1000 },
];

if (age <= 7 || 65 <= age) {
  window.console.log(`${busName[bus]} 무료임`);
} else if (age >= 8 && age <= 19) {
  window.console.log(`${busName[bus]} 30%할인 ${busCost[bus] * 0.7}원`);
} else {
  window.console.log(`${busName[bus]} ${busCost[bus]}원 내쇼`);
}
