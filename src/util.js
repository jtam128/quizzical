function findMatchingIndex(inputString, stringArray) {
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === inputString) {
      return i;
    }
  }
  return -1; // Return -1 if no match is found
}

export { findMatchingIndex };
