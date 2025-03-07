// 1. 유저에게 영어 문장을 입력 받고 단어들 길이의 총합 구하기
// ex) I like to writing letters

// 2. 유저에게 아무 글자를 입력 받고, 모음이 들어갔는지 아닌지 확인하기
// ex) example -> 모음 있음

const context1 = prompt("영어 문장을 입력하세요");
const q1 = context1
  .split(" ")
  .map((x) => {
    return x.length;
  })
  .reduce((a, c) => {
    return a + c;
  });

console.log(q1);

const context2 = prompt("아무 글자를 입력하세요");
const q2 = context2.split(" ").some((x) => {
  return x == "a" || "e" || "i" || "o" || "u";
});

console.log(q2);

const news = `President Donald Trump’s first address to Congress since returning to power was both a victory lap following a consequential first 43 days in office and an attempt to justify what he’s done to an American public that may still be digesting his rapid-pace changes.

On tariffs, government cuts and foreign affairs, Trump has taken dramatic steps that have left Democrats fuming and even some Republicans skeptical, while foreign capitals have scrambled to respond. His task Tuesday was to say why.

President Donald Trump is applauded by Vice President JD Vance and House Speaker Mike Johnson as he arrives to deliver his address to a joint session of Congress at the US Capitol in Washington, DC, on March 4.
Related article
Fact-checking Trump’s address to Congress

He did that – to an extent. But the president also used his speech to relentlessly attack his opponents, blame his predecessor and air old grievances.

The president entered the chamber with a lot to say. His speech broke the record for longest annual presidential address to Congress in modern history, at just under one hour and 40 minutes. It was also one of the most partisan, with almost none of the customary calls for unity.`;

// trump -> "🍅"

const q3 = news
  .split(" ")
  .map((x) => (x == "Trump" ? "🍅" : x))
  .reduce((a, c) => a + " " + c);

console.log(q3);
