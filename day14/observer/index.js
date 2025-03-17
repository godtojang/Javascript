const box = document.querySelector(".box");
const circle = document.querySelector(".circle");

const action = (x) => {
  x.forEach((y) => {
    if (y.isIntersecting) console.log("ㅎㅇ");
  });
};

const observer = new IntersectionObserver(action, {
  thresholds: 1,
});

observer.observe(box);

const action2 = (x) => {
  x.forEach((y) => {
    if (y.isIntersecting) {
      circle.classList.toggle("incircle");
    }
  });
};

const observer2 = new IntersectionObserver(action2, {
  thresholds: 0.5,
});

observer2.observe(circle);
