// document : html을 관여하는 타입
// element(tag) 타입

// const div = document.createElement("div");
// // div.innerText = "버튼";
// div.innerHTML = "<button>짱짱버튼</button>";

// document.body.appendChild(div);

// 유저에게 만들고 싶은 태그 물어보고
// 유저에게 안에 넣고 싶은 내용 물어보고
// html에 유저가 원하는 대로 태그 만들기

// const tag = prompt("만들고 싶은 태그는?");
// const html = prompt("안에 넣고 싶은 내용은?");

// const tag1 = document.createElement(tag);
// tag1.innerHTML = html;

// document.body.appendChild(tag1);

// // 순회(정찰)
// [1, 3, 5, 7, 9].forEach((x) => {
//   console.log(x);
// });

// 유저에게 원하는 버튼 개수를 물어보고, 버튼 안의 내용도 물어보고
// 개수만큼 버튼 만들기

const button = +prompt("원하는 버튼 개수?");
const cont = prompt("버튼 안의 내용?");

Array(button)
  .fill(0)
  .forEach((v) => {
    const makeButton = document.createElement("button");
    makeButton.innerText = cont;
    document.body.appendChild(makeButton);
  });
