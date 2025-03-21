const header = document.querySelector("header");
const logo = document.querySelector("#logo");
const upbar = document.querySelector(".upBar");
const downbar = document.querySelector(".downBar");

window.addEventListener("scroll", () => {
  const { scrollY } = window;
  if (scrollY > 0) {
    logo.src = "https://www.socar.kr/images/logo-blue.svg";
    header.classList.add("act");
    upbar.classList.add("blue");
    downbar.classList.add("blue");
    upbar.classList.remove("white");
    downbar.classList.remove("white");
  } else {
    logo.src = "https://www.socar.kr/images/logo-w.svg";
    header.classList.remove("act");
    upbar.classList.add("white");
    downbar.classList.add("white");
    upbar.classList.remove("blue");
    downbar.classList.remove("blue");
  }
});

const hambuger = document.querySelector(".hamburger");

hambuger.addEventListener("click", () => {
  upbar.classList.toggle("upbarX");
  downbar.classList.toggle("downbarX");
});

window.addEventListener("wheel", (e) => {
  console.log(e.deltaY);
  if (e.deltaY == 100) {
    header.classList.add("scrollHeader");
  } else {
    header.classList.remove("scrollHeader");
  }
});

const a = document.querySelectorAll(".info > h2");
const b = document.querySelectorAll(".info > p");
const c = document.querySelectorAll(".show > img");

const ob = new IntersectionObserver((x) => {
  x.forEach((y) => {
    if (y.isIntersecting) {
      y.target.style.opacity = "1";
      y.target.style.transform = "translateX(0px)";
    }
  });
});

a.forEach((v) => ob.observe(v));
b.forEach((v) => ob.observe(v));
c.forEach((v) => ob.observe(v));

const d = document.querySelector(".contents");
const blue = document.querySelector(".blue");

const openBlue = new IntersectionObserver((x) => {
  x.forEach((y) => {
    if (y.isIntersecting) {
      blue.style.transform = "skew(-30deg) translateX(0px);";
    }
  });
});

openBlue.observe(d);
