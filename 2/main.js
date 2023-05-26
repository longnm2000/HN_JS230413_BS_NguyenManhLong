function removeSpace(arr) {
  let wordList = arr.trim().toLowerCase().split(" ");
  let removedSpaceArray = [];
  for (let i = 0; i < wordList.length; i++) {
    if (+wordList[i] !== 0) {
      removedSpaceArray.push(wordList[i]);
    }
  }
  let resultArray = [];
  for (let i = 0; i < removedSpaceArray.length; i++) {
    resultArray.push(
      removedSpaceArray[i].charAt(0).toUpperCase() +
        removedSpaceArray[i].slice(1)
    );
  }
  return resultArray.join(" ");
}

console.log(`"${removeSpace("I LiKE UBUNTU VerY MuCh  ")}"`);
console.log(`"${removeSpace(" this is A tEst ")}"`);
console.log(`"${removeSpace(" heLlo riKkei  academy ")}"`);
