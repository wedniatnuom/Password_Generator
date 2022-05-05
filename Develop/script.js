// Assignment code here


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


console.log(lowercaseChar())
console.log(uppercaseChar())
console.log(numbersChar())
console.log(specialChar())



// Prompt user to select password criteria
function generatePassword(){
  var passwordLength = prompt("Password length?", "8-128 characters");
   if(passwordLength >= 8 && passwordLength <=128){
    let lower = confirm("Would you like to include lowercase letters?")
    let upper = confirm("Would you like to include uppercase letters?")
    let number = confirm("Would you like to include numbers?")
    let special = confirm("would you like to include special characters? ! @ # $ % ^ & *")
    console.log(lower)
    console.log(upper)
    console.log(number)
    console.log(special)
  }
  else{
    alert("Please enter a correct length")
    writePassword()
    
  }
  

}