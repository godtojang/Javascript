const movie =
  prompt("영화 종류를 입력하시오 1.액션 영화 2.로맨틱 코미디 3.공포영화") - 1;

const age = prompt("나이를 입력하시오");

const movieSelect = [
  { name: "액션 영화", price: 10000 },
  { name: "로맨틱 코미디", price: 8000 },
  { name: "공포 영화", price: 9000 },
];

if (age < 13) {
  console.log(`50%할인이 적용되었습니다. ${movieSelect[movie].price * 0.5}`);
} else if (age >= 60) {
  console.log(`30%할인이 적용되었습니다. ${movieSelect[movie].price * 0.7}`);
} else {
  console.log(
    `${movieSelect[movie].name}의 가격은 ${movieSelect[movie].price}입니다.`
  );
}
