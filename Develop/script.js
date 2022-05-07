// Assignment code here
var password = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Generating random characters
function lowercaseChar(){
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  return lowers[Math.floor(Math.random() * 26)]
}

function uppercaseChar(){
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppers[Math.floor(Math.random() * 26)]
}

function numbersChar(){
  var numbers = "0123456789";
  return numbers[Math.floor(Math.random() * 10)]
}

function specialChar(){
  var specials = "!@#$%^&*";
  return specials[Math.floor(Math.random() * 8)]

}


// Prompt user to select password criteria
function generatePassword(){
  password = ""
  var passwordLength = prompt("Password length?", "8-128 characters");
   if(passwordLength >= 8 && passwordLength <=128){
    let lower = confirm("Would you like to include lowercase letters?")
    let upper = confirm("Would you like to include uppercase letters?")
    let number = confirm("Would you like to include numbers?")
    let special = confirm("would you like to include special characters? ! @ # $ % ^ & *")
   
    //add loop to select and fill in random characters

    for(i = 0; i < passwordLength; i++){
      if(!lower && !upper && !number && !special){
        alert("You must choose at least one character");
        generatePassword();
        return;
      }
      if(lower && password.length < passwordLength){
        password += lowercaseChar()
        }
      if(upper && password.length < passwordLength){
        password += uppercaseChar()
      }
      if(number && password.length < passwordLength){
        password += numbersChar()
      }
      if(special && password.length < passwordLength){
        password += specialChar()
      }
    }
    //scramble generated password

   password = password.split("").sort(function(a, b){return 0.5 - Math.random()}).join("");
   writePassword() 
  }
  else{
    alert("Please enter a correct length")
  }
}
