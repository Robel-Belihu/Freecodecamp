function destroyer(arr, ...unwantedVals) {
  return arr.filter((item) => !unwantedVals.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
