// const name = `tla`;
// const age = 24;
// const birth = 2002;
// const coffee = `ㅈ망추`;

// // 더하기에 문자 타입이 들어가면 모두 문자 취급

// window.console.log(age + birth);
// window.console.log(coffee + age);
// window.console.log(age + coffee + birth);

// const age1 = "17";
// const age2 = "19";
// window.console.log(age1 + age2);

// prompt는 문자 취급
const age = window.prompt("숫자 입력");

const numberAge = Number(age);

window.alert(`${age}의 10을 더한 값은 : ${numberAge + 10}`);
