let inputString = " Super       HErO is     ME   ";
let wordList = inputString.trim().toLowerCase().split(" ");
let removedSpaceArray = [];
for (let i = 0; i < wordList.length; i++) {
  if (+wordList[i] !== 0) {
    removedSpaceArray.push(wordList[i]);
  }
}
let resultArray = [];
for (let i = 0; i < removedSpaceArray.length; i++) {
  resultArray.push(
    removedSpaceArray[i].charAt(0).toUpperCase() + removedSpaceArray[i].slice(1)
  );
}
console.log(`"${resultArray.join(" ")}"`);
