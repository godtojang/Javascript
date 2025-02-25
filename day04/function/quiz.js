function lucky(g) {
  //   console.log(`x라서 럭키비키잖아`);
  return `${g}라서 럭키비키잖아`;
}

function smile(g) {
  return `😁${g}😁`;
}

function double(g) {
  return g * 2;
}

function num(x) {
  if (x % 2 != 0) {
    return x * 2;
  } else {
    return x * 3;
  }
}

function multiple(x) {
  if (x % 3 == 0 || x % 5 == 0) {
    return x * x;
  } else {
    return x + 10;
  }
}

function twoxy(x, y) {
  return x ** y;
}

const two = (5, 10);
console.log(two);

function array(x) {
  x[0] = "candy";
  return x;
}
