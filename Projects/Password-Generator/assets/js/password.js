// Element Fetch

const passwordDisplay = document.getElementById("passwordDisplay");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

// const values

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// slider {length}

lengthSlider.addEventListener("input", (e) => {
  lengthValue.textContent = e.target.value;
});

// generate

function generatePassword() {
  let availableChars = "";

  if (uppercaseCheckbox.checked) {
    availableChars += uppercaseChars;
  }
  if (lowercaseCheckbox.checked) {
    availableChars += lowercaseChars;
  }
  if (numbersCheckbox.checked) {
    availableChars += numberChars;
  }
  if (symbolsCheckbox.checked) {
    availableChars += symbolChars;
  }

  if (availableChars.length === 0) {
    passwordDisplay.value = "Select at least one option";
    return;
  }

  const length = parseInt(lengthSlider.value);
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  passwordDisplay.value = password;
}

// Buttons

copyBtn.addEventListener("click", () => {
  const password = passwordDisplay.value;

  if (password && password !== "Select at least one option") {
    navigator.clipboard.writeText(password).then(() => {
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fas fa-check"></i>';
      copyBtn.classList.add("bg-green-600");
      copyBtn.classList.remove("bg-green-600", "hover:bg-green-900");

      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.classList.remove("bg-green-600");
        copyBtn.classList.add("bg-green-600", "hover:bg-green-900");
      }, 2000);
    });
  }
});

// generate

generateBtn.addEventListener("click", generatePassword);

// paass generation

window.addEventListener("load", generatePassword);
