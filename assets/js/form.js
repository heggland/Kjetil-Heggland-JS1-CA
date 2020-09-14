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
    hide(nameError);
    return true;
  } else {
    show(nameError);
  }
}

function subjectCheck() {
  //validate subject
  const subjectValue = subject.value;
  if (checkInputLength(subjectValue, 10)) {
    hide(subjectError);
    return true;
  } else {
    show(subjectError);
  }
}

function emailCheck() {
  //validate email
  const emailValue = email.value;
  if (validateEmail(emailValue)) {
    hide(emailError);
    return true;
  } else {
    show(emailError);
  }
}

function addressCheck() {
  //validate address
  const addressValue = address.value;
  if (checkInputLength(addressValue, 25)) {
    hide(addressError);
    return true;
  } else {
    show(addressError);
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

// show hide error
function show(value) {
  (value).classList.add("show");
  (value).classList.remove("hide");
}

function hide(value) {
  (value).classList.remove("show");
  (value).classList.add("hide");
}

form.addEventListener("submit", validateForm);
