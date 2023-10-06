function findMatchingIndex(inputString, stringArray) {
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === inputString) {
      return i;
    }
  }
  return -1; // Return -1 if no match is found
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export { findMatchingIndex, shuffleArray };
