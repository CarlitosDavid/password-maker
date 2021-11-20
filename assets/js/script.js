// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
  passwordText.value = password;
sw
  for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * passwordText.length);
    password += passwordText.substring(randomNumber, randomNumber +1);
  }

 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, passwordText)

