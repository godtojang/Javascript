fetch("https://dummyjson.com/recipes")
  .then((res) => res.json()) // 데이터를 object화 시켜줘
  .then((v) => console.log(v));
