var button = document.querySelector(".generate");

button.addEventListener("click", passwordGenerator, false);



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
  var passwordArray = [capitalAlphabet,alphabet,specialCharacters,numericCharacters];
  var password = [];
  var counterArr = [0,1,2,3];
  var counter = 0;
  var uppercaseChar = confirm("Would you like uppercase characters?"); 
  if (uppercaseChar !== true) {
    var index = counterArr.indexOf(0);
    if (index > -1) {
      counterArr.splice(index, 1);
    }
  } else {
    counter++;
  }
  var lowercaseChar = confirm("Would you like lower case characters?");
  if (lowercaseChar !== true) {
    var index = counterArr.indexOf(1);
    if (index > -1) {
      counterArr.splice(index, 1);
    }
  } else {
    counter++;
  }
  var specialChar = confirm("Would you like special characters?");
  if (specialChar !== true) {
    var index = counterArr.indexOf(2);
    if (index > -1) {
      counterArr.splice(index, 1);
    }
  } else {
    counter++;
  }
  var numericChar = confirm("Would you like numeric characters?");
  if (numericChar !== true) {
    var index = counterArr.indexOf(3);
    if (index > -1) {
      counterArr.splice(index, 1);
    }
  } else {
    counter++;
  }
  console.log(counterArr);
  console.log(counter);

  for (var i = 0; i < length; i++) {
    var checker = Math.floor(Math.random()*counter); // checker generates a number between 0 and the length of the counterArr
    var random = counterArr[checker]; // random searches for a value within counterArr using checker
    if (checker > counterArr.length) {
      while (checker > counterArr.length) {
        random--;
      } // if checker happens to be greater then counterArr.length, it decrease random by one while its greater
    }
    var selected = passwordArray[random]; // takes random number and searches for the array associated with it in passwordArray
    password[i] = selected[Math.floor(Math.random()*selected.length)]; // 
  }
  console.log(password.join(""));
}
