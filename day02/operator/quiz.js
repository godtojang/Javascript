const num = window.prompt("10000 ~ 99999 숫자를 입력하세요");

const hund = parseInt(num / 100) % 10;

window.console.log(hund);

const birth = +window.prompt("몇 년생 입니까?");

const adult = birth <= 2006 ? "성인입니다" : "미성년자입니다";

window.console.log(adult);
