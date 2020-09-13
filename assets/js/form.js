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
    nameError.classList.remove("block");
    nameError.classList.add("hide");
    // console.log("Name: " + nameValue);
    return true;
  } else {
    nameError.classList.remove("hide");
    nameError.classList.add("block");
  }
}

function subjectCheck() {
  //validate subject
  const subjectValue = subject.value;
  if (checkInputLength(subjectValue, 10)) {
    subjectError.classList.remove("block");
    subjectError.classList.add("hide");
    // console.log("Subject: " + subjectValue);
    return true;
  } else {
    subjectError.classList.remove("hide");
    subjectError.classList.add("block");
  }
}

function emailCheck() {
  //validate email
  const emailValue = email.value;
  if (validateEmail(emailValue)) {
    emailError.classList.remove("block");
    emailError.classList.add("hide");
    // console.log("Email: " + emailValue);
    return true;
  } else {
    emailError.classList.remove("hide");
    emailError.classList.add("block");
  }
}

function addressCheck() {
  //validate address
  const addressValue = address.value;
  if (checkInputLength(addressValue, 25)) {
    addressError.classList.add("hide");
    addressError.classList.remove("block");
    // console.log("Address:" + addressValue);
    return true;
  } else {
    addressError.classList.remove("hide");
    addressError.classList.add("block");

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
