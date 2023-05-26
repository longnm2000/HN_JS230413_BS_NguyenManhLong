let numberList = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
function maxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Số lớn nhất trong mảng là ", maxNumber(numberList));
