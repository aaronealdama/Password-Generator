var button = document.querySelector(".generate");

button.addEventListener("click", passwordGenerator, false);

var password = [];

function passwordGenerator() {
  var length = prompt("Choose length between 8 and 128 characters.");
  if (length < 8 || length > 128) {
    while (length < 8 || length > 128) {
      length = prompt("Please choose a number between 8 and 128.");
    }
  }
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var capitalAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  var specialCharacters = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "/",
    "^",
    "_",
    "`",
    "{",
    "}",
    "~"
  ];
  var numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var uppercaseChar = confirm("Would you like uppercase characters?");
  if (uppercaseChar === true) {
    for (var i = 0; i < length; i++) {
      var checker = Math.floor(Math.random() * 2);
      if (checker === 1) {
        password[i] = capitalAlphabet[Math.floor(Math.random() * length)];
      } else {
        password[i] = ",";
      }
    }
  }

  var lowercaseChar = confirm("Would you like lower case characters?");
  if (lowercaseChar === true) {
    for (var i = 0; i < length; i++) {
      var checker = Math.floor(Math.random() * 2);
      if (checker === 1) {
        password[i] = alphabet[Math.floor(Math.random() * length)];
      } else {
        password[i] = ",";
      }
    }
  }
  var specialChar = confirm("Would you like special characters?");
  if (specialChar === true) {
    for (var i = 0; i < length; i++) {
      var checker = Math.floor(Math.random() * 2);
      if (checker === 1) {
        password[i] = specialCharacters[Math.floor(Math.random() * length)];
      } else {
        password[i] = ",";
      }
    }
  }
  var numericChar = confirm("Would you like numeric characters?");
  if (numericChar === true) {
    for (var i = 0; i < length; i++) {
      var checker = Math.floor(Math.random() * 2);
      if (checker === 1) {
        password[i] = numericCharacters[Math.floor(Math.random() * length)];
      } else {
        password[i] = ",";
      }
    }
    for (var i = 0; i < password.length; i++) {
      while (password[i] === ",") {
        if (password[i] === ",") {
          password[i] = capitalAlphabet[Math.floor(Math.random() * length)];
        } else if (password[i] === ",") {
          password[i] = alphabet[Math.floor(Math.random() * length)];
        } else if (password[i] === ",") {
          password[i] = specialCharacters[Math.floor(Math.random() * length)];
        } else if (password[i] === ",") {
          password[i] = numericCharacters[Math.floor(Math.random() * length)];
        }
      }
    }
  }
  console.log(password.join(""));

  return password.join("");
}
