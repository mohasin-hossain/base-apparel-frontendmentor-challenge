const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");
const myForm = document.querySelector(".email-form");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInputValue = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInputValue)) {
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
    emailInput.style.border = "2px solid red";
  } else {
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
    emailInput.style.border = "1px solid hsl(0, 36%, 70%)";
  }
});
