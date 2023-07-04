export default function appendToEachArrayValue(array, appendString) {
  const returnArray = [];
  for (const digit of array) {
    returnArray.push(appendString + digit);
  }

  return returnArray;
}
