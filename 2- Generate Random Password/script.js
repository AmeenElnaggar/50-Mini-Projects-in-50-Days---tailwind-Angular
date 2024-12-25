const passwordInput = document.querySelector(".passwordInput");
const generateButton = document.querySelector(".generatePassword");
const copyButton = document.querySelector(".copyImage");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
  let password = 0;
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
    passwordInput.value = password;
  }
}

function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
}

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
