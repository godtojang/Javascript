const total = document.querySelector(".total");
const ameButton = document.querySelector(".ame");
const latteButton = document.querySelector(".latte");
const icetButton = document.querySelector(".icet");
const reset = document.querySelector(".reset");
const buy = document.querySelector(".buy");

ameButton.addEventListener("click", () => {
  //   total.innerText = total.innerText == none ? "2000원" : +2000;
  const [text, money] = total.innerText.split(":");
  total.innerText = `총 금액 : ${parseInt(money) + 2000}원`;
});

latteButton.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":");
  total.innerText = `총 금액 : ${parseInt(money) + 3000}원`;
});

icetButton.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":");
  total.innerText = `총 금액 : ${parseInt(money) + 3500}원`;
});

reset.addEventListener("click", () => {
  total.innerText = `총 금액 : 0원`;
});

buy.addEventListener("click", () => {
  const [text, money] = total.innerText.split(":");
  alert(`구매하신 총 금액은${money} 입니다.`);
});
