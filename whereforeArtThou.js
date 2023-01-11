function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter((obj) => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (
        !obj.hasOwnProperty(souceKeys[i]) ||
        obj[souceKeys[i]] !== source[souceKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
