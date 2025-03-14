const firbtn = document.querySelector(".fa-check");
const secbtn = document.querySelector(".fa-check");
const thibtn = document.querySelector(".fa-check");
const fourbtn = document.querySelector(".fa-check");
const okaybtn = document.querySelector("button");

firbtn.addEventListener("click", () => {
  firbtn.classList.toggle("onecheck");
});
secbtn.addEventListener("click", () => {
  secbtn.classList.toggle("twocheck");
});
thibtn.addEventListener("click", () => {
  thibtn.classList.toggle("threecheck");
});
fourbtn.addEventListener("click", () => {
  fourbtn.classList.toggle("fourcheck");
});
