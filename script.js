
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function(){
  //Using a prompt method to ask a question re password lenth. 
  var passwordLength = prompt("How many letters would you like in your password?")
  if (passwordLength > 128 || isNaN(passwordLength) || passwordLength < 8){ // using If Statement to make sure the imput is a number
   alert ("Start Over!")// using "alert" method to alert us to start over 1. if the user imput for password lenth is more then 128, 
   //2. imput is not a number 3. if the password length is les that 8.
   return "Please try again"
 }
 //Below I am using the confirm method for yes or no imput.
  var passwordNumbers = confirm ("Do you want numbers in you password?")
  var capitalLetters = confirm ("Do you want capital letters in you password?")
  var specialCharacters = confirm ("Do you want special characters in your password?")
  var nums = "0123456789"
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var special = "!@#$%^&*()"
  var chars = ""

  //If variable passworNumbers is true, add numbers to chars variable
  if (passwordNumbers == true){ 
   chars += nums 
  }
  //If variable capitalLetters is true, add capital letters to chars variable
  if (capitalLetters ==true){
   chars += capital
  }
  //If variable specialCharacter is true, add special character to chars variable
  if (specialCharacters ==true){
   chars += special
  }
  console.log(chars) // using method log to check if my condition works

   var userChoice = "" 
   //for loops generates random number extracting substrings from chars
    for (var i=0; i < passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * chars.length);
      userChoice += chars.substring (randomNumber,randomNumber +1)
    }
    return userChoice
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);