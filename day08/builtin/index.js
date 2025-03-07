// const a = new Date();
// console.log(a.getMinutes());

const a = new Set(); // 중복 허용 안됨
a.add(1);
a.add(2);
a.add(3);
console.log(a);

const b = [...new Set(["아아", "라떼", "민트", "라떼"])];
console.log(b);
