const btn = document.querySelector(".circle");
const check = document.querySelector(".oncheck");

btn.addEventListener("click", () => {
  btn.classList.toggle("oncircle");
  check.classList.toggle("oncheck");
});
