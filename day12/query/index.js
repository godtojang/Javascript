// 자바스크립트로 html 생성, 스타일 꾸미기, 내용 넣기, 추가하기

const pikaButton = document.querySelector(".pika");
pikaButton.addEventListener("click", () => {
  alert("피카피카");
});

const pilButton = document.querySelector(".pil");
pilButton.addEventListener("click", () => {
  alert("");
});

const smileButton = document.querySelector(".smile");
smileButton.addEventListener("click", () => {
  smileButton.innerHTML = smileButton.innerHTML == "😁" ? "😀" : "😁";
});
