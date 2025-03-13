// const makeCard = () => {
//   return `
//   <article>
//       <div class="card">
//         <img src="" alt="" />
//         <div class="info">
//           <span class="clothName"></span>
//           <span class="percent"></span>
//           <span class="price"></span>
//           <div class="score"></div>
//         </div>
//         <button class="color"></button>
//       </div>
//     </article>`;
// };

const imgList = [
  {
    img: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80A_NT7TQ80A_primary.jpg?browse",
    color: "black",
  },
  {
    img: "https://image.thenorthfacekorea.co.kr/cmsstatic/product/NT7TQ80B_NT7TQ80B_hover.jpg?browse",
    color: "light-beige",
  },
];

const imgBox = document.createElement("img");
// imgBox.style.border = "1px solid #efefef";
imgBox.style.backgroundColor = "#efefef";
imgBox.style.width = "300px";
imgBox.style.height = "300px";
imgBox.style.objectFit = "cover";
document.body.appendChild(imgBox);

const colorBtnList = [
  { name: "black", color: "black" },
  { name: "light-beige", color: "light-biege" },
  { name: "brown", color: "brown" },
];

colorBtnList.forEach((x) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = x.color;
  btn.style.width = "50px";
  btn.style.height = "50px";
  btn.style.borderRadius = "9999px";
  btn.addEventListener("click", () => {
    imgBox.src = imgList.img;
  });
  document.body.appendChild(btn);
});
