const sent = document.querySelector(".sent");
const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#inputErrorName");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#inputErrorSubject");
const email = document.querySelector("#email");
const emailError = document.querySelector("#inputErrorEmail");
const address = document.querySelector("#address");
const addressError = document.querySelector("#inputErrorAddress");

// validation of form input
function validateForm() {

  event.preventDefault();
  // each input field has its own function
  nameCheck();
  subjectCheck();
  emailCheck();
  addressCheck();
}

function nameCheck() {
  //validate name
  const nameValue = name.value;
  if (checkExsist(nameValue)) {
    nameError.style.display = "none";
    // console.log("Name: " + nameValue);
    return true;
  } else {
    nameError.style.display = "block";
  }
}

function subjectCheck() {
  //validate subject
  const subjectValue = subject.value;
  if (checkInputLength(subjectValue, 10)) {
    subjectError.style.display = "none";
    // console.log("Subject: " + subjectValue);
    return true;
  } else {
    subjectError.style.display = "block";
  }
}

function emailCheck() {
  //validate email
  const emailValue = email.value;
  if (validateEmail(emailValue)) {
    emailError.style.display = "none";
    // console.log("Email: " + emailValue);
    return true;
  } else {
    emailError.style.display = "block";
  }
}

function addressCheck() {
  //validate address
  const addressValue = address.value;
  if (checkInputLength(addressValue, 25)) {
    addressError.style.display = "none";
    // console.log("Address:" + addressValue);
    return true;
  } else {
    addressError.style.display = "block";
  }
}

//check if input meet expected lenght
function checkInputLength(inputValue, lengthToCheck) {
  if (inputValue.trim().length >= lengthToCheck) {
    return true;
  }
  return false;
}

// checks if there is input
function checkExsist(inputToCheck) {
  if (inputToCheck) {
    return true;
  }
}

// email validation
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateForm);
