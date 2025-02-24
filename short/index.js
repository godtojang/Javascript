const nickname = window.prompt("닉네임을 입력하세요");

window.alert(`${nickname || "Guest"}님 환영합니다`);

const password = window.prompt("비밀번호 입력");
password == 1024 && alert("화장실 열림");

// const open = password == 1024 ? "화장실 열림!" : "";
// window.alert(`${open}`);
