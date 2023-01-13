function telephoneCheck(str) {
  var result = false;
  var theFormats = [
    /^\d\d\d\d\d\d\d\d\d\d$/,
    /^\d\d\d-\d\d\d-\d\d\d\d/,
    /^\d\d\d\s\d\d\d\s\d\d\d\d/,
    /^\(\d\d\d\)\d\d\d-\d\d\d\d/,
    /^\(\d\d\d\)\s\d\d\d-\d\d\d\d/,
    /^1\d\d\d\d\d\d\d\d\d\d/,
    /^1\s\d\d\d\s\d\d\d\s\d\d\d\d/,
    /^1\s\d\d\d-\d\d\d-\d\d\d\d/,
    /^1\(\d\d\d\)\d\d\d-\d\d\d\d/,
    /^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/,
  ];

  result = theFormats.some((reg) => reg.test(str));

  return result;
}

telephoneCheck("555-555-5555");
