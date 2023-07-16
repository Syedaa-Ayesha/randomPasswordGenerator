let passwordContainer = document.getElementById("password");
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789";
let symbols = "!@#$`%^&*()_+~}]{[?\'|<>";

let passwordLength = 13;
let combineChar = upperCase + lowerCase + symbols + number;

function generatePassword() {
   let password = "";
   while (passwordLength > password.length) {
      password += combineChar[Math.floor(Math.random() * combineChar.length)];
   }
   passwordContainer.value = password;
}

function copyPassword() {
   passwordContainer.select();
   document.execCommand("copy");

}