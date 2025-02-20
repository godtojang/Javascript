// const maker = window.prompt("당신이 자주 가는 커피점은?");
// const coffee = window.prompt("당신이 자주 시키는 커피는?");
// const size = window.prompt("당신이 자주 시키는 사이즈는?");
// const roast = window.prompt("당신이 좋아하는 원두는?");

// window.alert(
//   `${maker} 커피숍에 ${size}사이즈인 ${coffee}를 시키고 원두를 ${roast}로 즐겨 마시는 당신은 커피를 안드시는 군요`
// );

const myselfName = window.prompt("당신의 이름은?");
const myselfMajor = window.prompt("당신의 전공은");
const myselfBirth = window.prompt("당신의 생년월일은?");
const myselfMBTI = window.prompt("당신의 MBTI?");

window.alert(
  `이름 ${myselfName} 전공 ${myselfMajor} 생년월일 ${myselfBirth} MBTI ${myselfMBTI}`
);

const deliveryKind = window.prompt("주로 시키는 종류는?");
const deliveryFran = window.prompt("주로 시키는 프랜차이즈는?");
const deliveryMenu = window.prompt("주로 시키는 메뉴는?");
const deliverySet = window.prompt("주로 시키는 배달 방식은?");
const deliveryTime = window.prompt("주로 걸리는 시간은?");

window.console.log(
  `${deliveryKind}종류에서 ${deliveryFran}점에서 ${deliveryMenu}메뉴를 ${deliverySet}방식으로 시키시는데 ${deliveryTime} 걸리는군요`
);
