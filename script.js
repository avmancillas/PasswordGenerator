// Assignment Code
//Array of characters to be included in the password
var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numericCharacters = ['1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','@','#','$','%','^','&','*','?','+'];


//Function that prompts user for password options
function getPasswordOptions() {
  //Variable that stores lenght of password from the user input
  var length = parseInt( 
    prompt('How many characters would you like your password to contain?')
  );
  //Conditional statement to check if password lenght is a number. Prompts end if this if false
  if (isNaN(length) === true) { 
    alert('Password lenght must be provided as a number');
    return;
  }

  //Conditional statement to make sure password is at least 8 characters long
  if (length < 8) { 
    alert('Password has to be at least 8 characters');
    return;
  }
  //Conditional statement to make sure password is less than 128 characters long
  if (length > 128) { 
    alert( 'Password lenght has to be less than 128 characters');
    return;
  }
  //Variable to store inclusion of Upper character
  var hasUpperCharacters = confirm(
    'Click OK to confirm including upper case characters.'
  );
  //Variable to store inclusion of Lower character
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  //Variable to store inclusion of Numberic character
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store inclusion of Special character
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  //Conditional statement to check if user does not include any types
  if ( 
    hasUpperCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false
  ) { 
    alert('Must select at least one character type');
    return;
  }
  //Store user input
  var passwordOptions = {
    length: length,
    hasUpperCharacters: hasUpperCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters
  };

  return passwordOptions;

}
//Function that gets random element from array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Function that generates password per user input
function generatePassword(){
  var options = getPasswordOptions();
  //Variable to store password as it's being created
  var result =[];
  //Array to store types of characters to include in password
  var possibleCharacters = [];
  //Array to contain one of each type of chosen character to make sure one is chosen
  var guaranteedCharacters = [];
  // Conditional statement that adds array of upper characters into array of possible characters based on input
  // Push new random upper character to guaranteedCharacters
  if (options.hasUpperCharacters){
    possibleCharacters = possibleCharacters.concat(upperCharacters);
    guaranteedCharacters.push(getRandom(upperCharacters));
  }
  // Conditional statement that adds array of lowercase characters into array of possible characters based on input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters){
    possibleCharacters = possibleCharacters.concat(lowerCharacters);
    guaranteedCharacters.push(getRandom(lowerCharacters));
  }
  // Conditional statement that adds array of numeric characters into array of possible characters based on input
  // Push new random numeric character to guaranteedCharacters
  if (options.hasNumericCharacters){
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));

  }
  //// Conditional statement that adds array of special characters into array of possible characters based on input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  // For loop to iterate over the password length from the options objects. Selecting at random
  for (var i =0; i<options.length; i++) {
    var possibleCharacters =getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }
  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i< guaranteedCharacters.length; i++){
    result[i] =guaranteedCharacters[i];
  }
  // Transform the result into a string and go into writePassword
  return result.join('');

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
