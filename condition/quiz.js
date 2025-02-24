const month = +window.prompt("월을 입력하쇼");

if (month == 3 || 4 || 5) {
  window.console.log("봄");
} else if (month == 6 || 7 || 8) {
  window.console.log("여름");
} else if (month == 9 || 10 || 11) {
  window.console.log("가을");
} else if (month == 12 || 1 || 2) {
  window.console.log("겨울");
} else {
  window.console.log("다시 입력해주세요.");
}

const age = +window.prompt("나이 입력하쇼");

if (age <= 7) {
  window.console.log("유치원생");
} else if (age <= 13) {
  window.console.log("초등학생");
} else if (age <= 19) {
  window.console.log("중고등학생");
} else if (age > 19) {
  window.console.log("성인");
} else {
  window.console.log("다시 입력하라");
}

const num = +window.prompt("정수를 입력하쇼");

if (num > 0) {
  if (num % 2 == 0) {
    window.console.log("양의 짝수");
  } else {
    window.console.log("양의 홀수");
  }
} else if (num < 0) {
  if (num % -2 == 0) {
    window.console.log("음의 짝수");
  } else {
    window.console.log("음의 홀수");
  }
} else if (num == 0) {
  window.console.log("0");
} else {
  window.console.log("정수가 아님");
}
