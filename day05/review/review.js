// function oddOrEven(x) {
//   if (x % 2 == 0) {
//     return "짝수";
//   } else {
//     return "홀수";
//   }
// }

// const test1 = oddOrEven(3);
// console.log(test1);

// function cafe(x) {
//   return x == "icecream" || x == "coffee" ? "디저트" : "음식";
// }

// const test2 = cafe("icecream");
// console.log(test2);

// function date(x, y) {
//   const movie =
//     +prompt("영화 종류 입력 1.액션 영화 2.로맨틱 코미디 3.공포 영화") - 1;

//   const popcorn =
//     +prompt("팝콘 종류 입력 1.치즈 팝콘 2.카라멜 팝콘 3.일반 팝콘") - 1;

//   const movieSelect = [
//     { name: "액션 영화", price: 10000 },
//     { name: "로맨틱 코미디", price: 8000 },
//     { name: "공포 영화", price: 9000 },
//   ];
//   const popcornSelect = [
//     { name: "치즈 팝콘", price: 6000 },
//     { name: "카라멜 팝콘", price: 5000 },
//     { name: "일반 팝콘", price: 5000 },
//   ];

//   if (x == 1) {
//     if (y == 1) {
//       console.log(
//         `${movieSelect[movie].name}를 선택하셨고, ${
//           popcornSelect[popcorn].name
//         }을 선택하셨습니다. 총 ${parseInt(
//           movieSelect[movie].price + popcornSelect[popcorn].price
//         )}원 입니다.`
//       );
//     }
//   }
// }

const birth = prompt("태어난 년도?");

function zodiac(birth) {
  const list = [
    "쥐",
    "소",
    "호랑이",
    "토끼",
    "용",
    "뱀",
    "말",
    "양",
    "원숭이",
    "닭",
    "개",
    "돼지",
  ];

  return list[(birth % 12) - 4];
}

console.log(zodiac);

const ei = prompt("e 또는 i?");
const sn = prompt("s 또는 n?");
const tf = prompt("t 또는 f?");
const jp = prompt("j 또는 p?");

const mbti = {
  e: "외향적",
  i: "내향적",
  s: "감각적",
  n: "직관적",
  t: "이성적",
  f: "감성적",
  j: "계획적",
  p: "즉흥적",
};

console.log(
  `당신의 성격은 ${mbti[ei]}, ${mbti[sn]}, ${mbti[tf]}, ${mbti[jp]}입니다`
);
