Math.abs(-10); // 10
Math.min(3, 1, 5, 7, 19); // 0
Math.max(100, 232424, 24120931, 1239123323, 999999999); // 999999999
Math.random(); // 0 ~ 1

// min ~ max 정수 중 랜덤하게 뽑는 함수
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(getRandom(1, 100));
