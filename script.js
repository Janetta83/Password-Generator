// Assignment Code
// A password between 8-128 characters long will generate after the user selects the desired citeria

// Assignment code + event Listener to prompt questions when the button is pushed
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "~", ".", "?", "/",];

//Variable Declaration
var character = "";
var characterUpperCase;
var characterLowerCase;
var characterNumber;
var characterSpecialCharacter;

// Prompt to ask how many characters are in the password
function generatePassword() {
  var character = (prompt("Password must be between 8 to 128 characters long. How many characters will be in your password?"));

  //Loop prompt if character count is too small or large
  while(character <= 7 || character >= 129){
    window.alert("Try again. Password must be between 8 to 128 characters long.");
    var character =(prompt("Password must be between 8 to 128 characters long. How many characters will be in your password?"));
  }

  //Confirm character count to user
  window.alert("Your password will have ${character} characters");

  //Character selection
  var characterUpperCase = confirm("Click OK to confirm if you want your password to contain uppercase");
  var characterLowerCase = confirm("Click OK to confirm if you want your password to contain lowercase");
  var characterNumber = confirm("Click OK to confirm if you want your password to contain a number");
  var characterSpecialCharacter = confirm("Click OK to confirm if you want your password to contain a special character");


//Loop if not selected correctly
while(characterUpperCase === false && characterLowerCase === false && characterNumber === false && characterSpecialCharacter === false){
 window.alert("You must select at least one");
 var characterUpperCase = confirm("Click OK to confirm if you want your password to contain uppercase");
 var characterLowerCase = confirm("Click OK to confirm if you want your password to contain lowercase");
 var characterNumber = confirm("Click OK to confirm if you want your password to contain a number");
 var characterSpecialCharacter = confirm("Click OK to confirm if you want your password to contain a special character"); 
}

//Password parameters, assigning an action
var passwordCharacters = [];

if(characterUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase)
}
if(characterLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCase)
}
if(characterNumber) {
  passwordCharacters = passwordCharacters.concat(number)
}
if(characterSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialCharacter)
}
console.log(passwordCharacters);

// Empty loop to allow random selection from the arrays
var password = "";

//to push loop generated characters to the password variable
for(var i = 0; i < character; i++) {
  password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(password);
}

//function result
return password;
}

//References for #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
