

const mergeArrays = function (arrayA, arrayB) {
  const totalLength = arrayA.length + arrayB.length;
  const mergedArray = new Array(totalLength);
  for (let i = 0; i < arrayA.length; i++)
    mergedArray[i] = arrayA[i];
  for (let i = 0; i < arrayB.length; i++)
    mergedArray[arrayA.length + i] = arrayB[i];
  console.log(mergedArray[7]);
  return mergedArray;
}

const calTemp = function (arrayA, arrayB) {
  const newArray = mergeArrays(arrayA, arrayB);
  let min = newArray[0];
  let max = newArray[0];
  for (let i = 1; i < newArray.length; i++) {
    if (typeof newArray[i] === "string") continue;

    if (newArray[i] < min) {
      min = newArray[i];
    }
    if (newArray[i] > max) {
      max = newArray[i];
    }


  }
  return [min, max];
}


console.log(calTemp([2, 0, -8, 'error', 4, -3, -12, 10], [-9, -19, -2, 0, 2, 5, 18]));







const printForcast = function (temps) {
  let result = '';
  debugger;
  for (let i = 0; i < temps.length; i++)
    result += `.. ${temps[i]} C in ${i + 1} days`;
 return result;
}

console.log(printForcast([12,5,18,15]));








