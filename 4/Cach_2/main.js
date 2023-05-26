let arr = [3, 25, 38, 49, 12];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let tg = arr[i];
      arr[i] = arr[j];
      arr[j] = tg;
    }
  }
}
console.log(arr);
