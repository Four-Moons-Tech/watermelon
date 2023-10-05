//Event: click button, 
//Functions: 
//1.dialog box includes: eventlistener in click button, prompt with questions, 
//2. generate password includes: if statements re imputs, Math.floor(Math.random()?? to randomly choose combinations of numbers or letters, 
      //conditional statement: 
         //if question[0]= "yes" 
      // then use numbers in password
            //else do not use
       //if question[1]= "yes" 
          // then use numbers in password
       //else do not use
           ////if question[2]= "yes" 
        // then use numbers in password
             //else do not use
//3. write password includes: displaying password in "#password"

   generatePassword()


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//function to open a Dialog Box 
var dialogBox = function(){
  var prompt = {
    question: ['Would you like numbers in your password?','Would you like capital letters in your password?','Would you like special characters in your password?'],
    input: ['yes','no'],
  } 
   for (var i=0; i <= prompt.question.lenth; i++)
   var userChoice = window.prompt(prompt.question[0,1,2],prompt.input[0,1])
 }
 dialogBox() 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);