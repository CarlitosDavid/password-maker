// Assignment Code
var length;
var number; 
var upperCase;
var lowerCase;
var specialCharacter;
var selection;

const characters = ["number", "letters", "character"];

number = "0123456789";
letters = "abcdefghijklmnopqrstuvwxyz";
lettersUp = "ABCDEFG"

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 
  passwordText.value = password;
  


 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
