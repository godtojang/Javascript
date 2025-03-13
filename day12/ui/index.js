const btn = document.querySelector(".btn");
const plus = document.querySelector("aside");

btn.addEventListener("click", () => {
  plus.classList.toggle("close");
});
