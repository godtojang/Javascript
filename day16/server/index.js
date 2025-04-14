const makeDough = (next) => {
  console.log("피자 도우 만들기");
  next();
};
const makeCheese = (next) => {
  console.log("피자 치즈 뿌리기");
  next();
};
const makeTomato = (next) => {
  console.log("토마토 토핑하기");
  next();
};
const makeBake = () => {
  console.log("피자 굽기");
};

// 콜백 헬
// makeDough(() => {
//   setTimeout(() => {
//     makeCheese(() => {
//       setTimeout(() => {
//         makeTomato(() => {
//           setTimeout(() => {
//             makeBake();
//           }, 1000);
//         });
//       }, 1000);
//     });
//   }, 1000);
// });

// 🥚🐣🐥🐓🍗
// 각각 함수를 만들고
// 1초 2초 2초 1초 2초 순서 보장 되면서 콘솔로그에 출력

const makeEgg = (next) => {
  console.log("🥚 생성");
  next();
};

const makeBrokenEgg = (next) => {
  console.log("🐣 부화중");
  next();
};

const makeChick = (next) => {
  console.log("🐥 부화");
  next();
};

const makeChicken = (next) => {
  console.log("🐓 성장");
  next();
};

const makeBakeChicken = () => {
  console.log("맛있는 🍗");
};

makeEgg(() => {
  setTimeout(() => {
    makeBrokenEgg(() => {
      setTimeout(() => {
        makeChick(() => {
          setTimeout(() => {
            makeChicken(() => {
              setTimeout(() => {
                makeBakeChicken();
              }, 1000);
            });
          }, 2000);
        });
      }, 2000);
    });
  }, 1000);
});

// const makeEgg1 = () => {
//   console.log("🥚 생성");
// };

// const makeBrokenEgg1 = () => {
//   console.log("🐣 부화중");
// };

// const makeChick1 = () => {
//   console.log("🐥 부화");
// };

// const makeChicken1 = () => {
//   console.log("🐓 성장");
// };

// const makeBakeChicken1 = () => {
//   console.log("맛있는 🍗");
// };

// setTimeout(() => {
//   makeEgg1();
//   setTimeout(() => {
//     makeBrokenEgg1();
//     setTimeout(() => {
//       makeChick1();
//       setTimeout(() => {
//         makeChicken1();
//         setTimeout(() => {
//           makeBakeChicken1();
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);
