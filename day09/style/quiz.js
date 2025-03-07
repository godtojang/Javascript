// 유저에게 버튼 만들기 횟수를 물어보고,

// 횟수만큼 빨강, 주황, 노랑, 초록, 파랑, 남색, 보라
// 내용과 글씨 색이 일치

const count = +prompt("몇 번 만들래?");

// const rainbow = ["빨강", "주황", "노랑", "초록", "파랑", "남색", "보라"];
// const rainbowText = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "indigo",
//   "purple",
// ];

const colorList = [
  { name: "빨강", color: "red" },
  { name: "주황", color: "orange" },
  { name: "노랑", color: "yellow" },
  { name: "초록", color: "green" },
  { name: "파랑", color: "blue" },
  { name: "남색", color: "indigo" },
  { name: "보라", color: "purple" },
];

Array(count)
  .fill(0)
  .forEach((i) => {
    colorList.forEach((v) => {
      const makeButton = document.createElement("button");
      makeButton.innerHTML = v.name;
      makeButton.style.backgroundColor = v.color;
      document.body.appendChild(makeButton);
    });
  });
