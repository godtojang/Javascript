// const btn = document.createElement("button");
// btn.innerHTML = "네이버";
// btn.style.backgroundColor = "green";
// // btn.style.setProperty("backgroundColor", "green");

// document.body.appendChild(btn);

// 유저에게 원하는 버튼 배경색과 글씨색을 동시에??????? 받고(띄어쓰기)
// 화면에 버튼을 만들기

// const btcontent = prompt("배경색과 글씨색, 그리고 내용을 입력하세요");

// const bt = document.createElement("button");
// const btBackColor = btcontent.split(" ")[0];
// const btTextColor = btcontent.split(" ")[1];
// const btText = btcontent.split(" ")[2];

// btcontent.innerHTML = btText;
// btcontent.style.backgroundColor = btBackColor;
// btcontent.style.Color = btTextColor;

// document.body.appendChild(bt);

const btcontent = prompt("배경색과 글씨색, 그리고 내용을 입력하세요").split(
  " "
);

const bt = document.createElement("button");
bt.style.backgroundColor = btcontent[0];
bt.style.color = btcontent[1];
bt.innerText = btcontent[2];
document.body.appendChild(bt);

// const [backgroundColor, color, text]
