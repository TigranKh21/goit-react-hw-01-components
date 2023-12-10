export function getRandomRGB() {
  let resArr = [];
  let colorItem = [];
  for (let i = 0; i <= 2; i++) {
    colorItem.push(Math.floor(Math.random() * (2 - 0) + 0));
    for (let i = 0; i <= 1; i++) {
      colorItem.push(Math.floor(Math.random() * (5 - 0) + 0));
    }
    resArr.push(colorItem.join(''));
    colorItem = [];
  }
  return resArr.join(',');
}
