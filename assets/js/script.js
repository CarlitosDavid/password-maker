// Assignment Code
var number; 
var upperCase;
var lowerCase;
var length;
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
  document.getElementById("click", generatePassword); {
    for (let i = 0; i < length; i++ ) {
      console.log(password);
    }
  }

  length = prompt("Enter the number of characters you'd like for your new password (Select a number between 8-128)");
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
  // generate password in different ways
  if (number && specialCharacter && upperCase && lowerCase) {
    selection = character.concat(number, letters, lettersUp);
  }
  
  else if (number && specialCharacter && upperCase) {
    selection = characters.concat(number, lettersUp);

  }
  else if (specialCharacter && upperCase && lowerCase) {
    selection = characters.concat(letters, lettersUp);
  }
  else if (upperCase && lowerCase && number) {
    selection = lettersUp.concat(letters, number);
  }
  else if (lowerCase && number && specialCharacter) {
    selection = letters.concat(number, character);
  }


  else if (specialCharacter && number) {
    selection = characters.concat(number);
  }
  else if (specialCharacter && upperCase) {
    selection = characters.concat(lettersUp);
  }
  else if (number && upperCase) {
    selection = number.concat(lettersUp);
  }
  else if (upperCase && lowerCase) {
    selection = lettersUp.concat(letters);
  }
  else if (lowerCase && number) {
    selection = letters.concat(number);
  }
  else if (lowerCase && specialCharacter) {
    selection = letters.concat(characters);
  }
  

  else if (specialCharacter) {
    selection = characters;
  }
  else if (number) {
    selection = number;
  }
  else if (lowerCase) {
    selection = letters;
  }
  else if (upperCase) {
    selection = lettersUp;
  };
  return selection;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
