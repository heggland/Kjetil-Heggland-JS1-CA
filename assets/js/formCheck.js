// validate if all input validations are true, if true display Validation sucessful
function formCheck() {
  // validateForm();
  if (nameCheck() && subjectCheck() && emailCheck() && addressCheck()) {
    console.log("Validation OK");
    sent.style.display = "block";
    return true;
  } else {
    console.log("Some fields doesnt meet the requirements");
    sent.style.display = "none";
    console.log();
  }
}

form.addEventListener("submit", formCheck);
