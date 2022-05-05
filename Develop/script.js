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


function generatePassword(){
  var passwordLength = prompt("Password length?", "8-128 characters");
  console.log(passwordLength);
  if(passwordLength >= 8 && passwordLength <=128){
  }
  else{
    alert("Please enter a correct length")
    writePassword()
    
  }
  

}