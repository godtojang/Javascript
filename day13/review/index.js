const btn = document.querySelector(".switch");
const onbtn = document.querySelector(".circle");

btn.addEventListener("click", () => {
  btn.classList.toggle("onswitch");
  onbtn.classList.toggle("oncircle");
});
