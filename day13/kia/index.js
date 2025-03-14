const dentbtn = document.querySelector(".dent");
const panbtn = document.querySelector(".pan");
const changebtn = document.querySelector(".change");

dentbtn.addEventListener("click", () => {
  dentbtn.classList.toggle("ondent");
  panbtn.classList.remove("onpan");
  changebtn.classList.remove("onchange");
});

panbtn.addEventListener("click", () => {
  panbtn.classList.toggle("onpan");
  dentbtn.classList.remove("ondent");
  changebtn.classList.remove("onchange");
});

changebtn.addEventListener("click", () => {
  changebtn.classList.toggle("onchange");
  panbtn.classList.remove("onpan");
  dentbtn.classList.remove("ondent");
});
