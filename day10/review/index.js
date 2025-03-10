// 유저에게 좋아하는 아이돌 그룹 멤버들을 입력 받고
// 아이돌 멤버의 버튼 만큼 만들기

const childs = prompt("좋아하는 아이돌 그룹 멤버?").split(" ");

childs.forEach((x) => {
  const btn = document.createElement("button");
  btn.innerHTML = x;
  document.body.appendChild(btn);
});

// 유저에게 좋아하는 색상 5가지 영어로 입력 받고
// 그 색상을 가진 버튼들을 만들기

const likeColor = prompt("좋아하는 색상 5가지?").split(" ");

likeColor.forEach((x) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = x;
  btn.innerHTML = x;
  document.body.appendChild(btn);
});
