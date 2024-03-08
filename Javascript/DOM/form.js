// Targetting Form Elements
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const questionInput = document.getElementById("question");

// Targetting Error Elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const questionError = document.getElementById("questionError");

// Handle form submissions and preventing default behavior
form.addEventListener("submit", handleSubmit);

// form submission event handler
function handleSubmit(e) {
  e.preventDefault(); // Prevent form submission

  // validate form inputs
  const isValid = validateForm();

  if (isValid) {
    // perform form submission
    console.log("Form submitted successfully");
    form.reset();
  }
}
function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const questionValue = questionInput.value.trim();
  let isValid = true;

  if (nameValue === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (questionValue === "") {
    questionError.textContent = "Email is required.";
    isValid = false;
  } else {
    questionError.textContent = "";
  }

  return isValid;
}
