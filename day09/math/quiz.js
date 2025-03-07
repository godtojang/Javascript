// 랜덤한 배경색을 가진 버튼 10개 만들기
// 컨텐츠는 버튼

const color = [..."1234567890abcdef"];
const randomColor = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getColorRandom = () => {
  return "#" + Array(6).fill(color[randomColor(0, color.length)]).join("");
};

const btn = document.createElement("button");
btn.style.backgroundColor;

Array(10)
  .fill(0)
  .forEach((x) => {
    const btn = document.createElement("button");
    btn.innerHTML = "버튼";
    btn.style.backgroundColor = getColorRandom();
    document.body.appendChild(btn);
  });
