const box = document.createElement("div");
box.style.width = "300px";
box.style.height = "300px";
document.body.appendChild(box);

const redbtn = document.createElement("button");
redbtn.innerText = "빨강버튼";
redbtn.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});

document.body.appendChild(redbtn);

const bluebtn = document.createElement("button");
bluebtn.innerText = "파란버튼";
bluebtn.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});

document.body.appendChild(bluebtn);

const yellowbtn = document.createElement("button");
yellowbtn.innerText = "노랑버튼";
yellowbtn.addEventListener("click", () => {
  box.style.backgroundColor = "yellow";
});

document.body.appendChild(yellowbtn);
