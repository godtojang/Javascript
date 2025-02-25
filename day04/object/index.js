// 기본타입 : string, number, boolean, null, undefined
// 참조타입 : array[], object

// key - value
// 문자, 정수 = 아무타입 가능

const coffee = {
  name: "아메리카노",
  price: 2500,
  shots: 2,
  hasCaffein: true,
  ingredients: ["물", "원두"],
};

coffee["price"]; // 2500
coffee.price; // 2500

console.log(`샷 개수 : ${coffee["shots"]}, 재료 : ${coffee["ingredients"][1]}`);

console.log(`샷 개수 : ${coffee.shots}, 재료 : ${coffee.ingredients[1]}`);

const car = {
  company: "Hyundai",
  carName: "그랜져",
  option: ["엉따, 충돌 경고"],
  model: 2025,
  fuel: "12km",
};

console.log(`제조사 : ${car.company}`);

// car.coffee // undefined

car.people = 4; // people : 4 추가
delete car.option;
car.fuel = "13km"; // fuel : 13
