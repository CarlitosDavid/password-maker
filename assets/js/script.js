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
lettersUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
character = "!@#$%^&*?=+~";

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
  
}

function generatePassword() {
  length = kprompt("Enter the number of characters you'd like for your new password (Select a number between 8-128)");
  if (!length) {
    alert("Please make a valid entry");
  }
  else if (length < 8 || length > 128) {
    length = prompt("New password must be from 8-128 characters");
  }
  else {
    number = confirm("Include numbers in your new password?");
    specialCharacter = confirm("Include uppercase letters?");
    upperCase = confirm("Include uppercase letters?");
    lowerCase = confrim("Include lowercase letters?");
  };
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
