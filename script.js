// Assignment code here
var length = parseInt(prompt("How many characters would you like your password to contain?"));

while (isNaN(length) || length < 8 || length > 128) {
  length = parseInt(prompt("Password length must be at least 8 characters"));
}

var includelowercase = confirm ("Click OK to confirm including lowercase characters")
var includeuppercase = confirm ("Click OK to confirm including uppercase characters")
var includenumerics = confirm ("Click OK to confirm including numerics characters")
var includespecialchars = confirm ("Click OK to confirm including special characters")


function generatePassword () {
  var charset = "";
  
  if (includelowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

 if (includeuppercase) {
  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (includenumerics) {
  charset += "0123456789";
}

if (includespecialchars) {
  charset += "!@#$%^&*()_+-=[]{}|;:,.<>";
 }

 console.log("Charset:", charset);

 var password = "" ;

 for (var i = 0; i < length; i++) {
   password += charset.charAt(Math.floor(Math.random() * charset.length));
 }

 console.log("Password:", password);
 
 return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
