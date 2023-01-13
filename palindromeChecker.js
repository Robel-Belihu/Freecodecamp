function palindrome(str) {
  let theLetters = str.replace(
    /[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );

  theLetters = theLetters.toLowerCase().split("");
  for (let i = 0; i < theLetters.length - 1 / 2; i++) {
    if (theLetters[i] !== theLetters[theLetters.length - i - 1]) {
      return false;
      //It will break here.
      break;
    }
  }
  return true;
}

palindrome("eye");
