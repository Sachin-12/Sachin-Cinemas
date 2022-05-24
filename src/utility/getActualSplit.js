// make [x1, x2, x3, x4] into [x1,(x1+x2),(x1+x2+x3)]
const getActualSplit = (arr) => {
  let newArr = [];
  let lastValue = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    lastValue = lastValue + arr[i];
    newArr.push(lastValue);
  }
  return newArr
}

export default getActualSplit