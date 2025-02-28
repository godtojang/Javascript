// makeFood라는 함수를 만들고
// 요리준비
// 요리함수실행
// 요리끝

const makeFood = (recipe) => {
  console.log("요리 준비");
  recipe();
  console.log("요리 끝");
};

// makeTaco
// 1. 또띠아 준비
// 2. 야채넣기
// 3. 고기넣기
// 4. 말기

const makeTaco = (x) => {
  console.log("또띠아 준비");
  console.log("야채 넣기");
  console.log(`${x}넣기`);
  console.log("말기");
};

// makeRamen
// 1. 물끓이기
// 2. 스프넣기
// 3. 면 넣기
// 4. 계란넣기

const makeRamen = () => {
  console.log("라면 준비");
  console.log("물 끓이기");
  console.log("스프 넣기");
  console.log("면 넣기");
  console.log("계란 넣기");
};

// makeFood(makeRamen);

makeFood(() => {
  makeTaco("🥗");
  makeTaco("🍙");
});
