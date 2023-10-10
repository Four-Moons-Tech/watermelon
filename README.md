# watermelon
This site generatates a random password. Upon pressing a button "Generate Password", a prompt opens with a question " How many letters would you like in your password?". It requires a user's imput. If the imput is not a number, the message will say "Start Over". The next 2 questions are a True or false questions. "Do you want numbers in you password?" and "Do you want capital letters in you password?". After user's imput the password is generated.
So here I used 1 prompt methods and 3 confirm methods. Both require a user imput. With prompt method I used an "If Statement" to make sure that the user imput is a number, else the "game is over" alert, whicj is also a method. 
 Again I used an "If Statement" to determine what the password will consist of: depending on user imput re the length of the passwords and whether 2 "confirm" questions were true, the value for variables nums, letters, capital, special are added to the chars variable using += operator that adds the new value to the exhisting. 
 Then I had a for loop to to generate a randomNumber depending on the password lenth.  I have a variable chars to include all possible combinations of numbers, letters and special characters. and then the userChoice variable used chars.substring to extract a small portion of the string.

 In this project I used conditions, methods, for loop, 







