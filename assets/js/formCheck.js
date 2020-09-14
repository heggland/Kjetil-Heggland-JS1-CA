const ok = document.querySelector("#ok");

// validate if all input validations are true, if true display Validation sucessful
function formCheck() {
  // validateForm();
  if (nameCheck() && subjectCheck() && emailCheck() && addressCheck()) {
    console.log("Validation OK");
    show(ok);
    return true;
  } else {
    console.log("Some fields doesnt meet the requirements");
    hide(ok);
    console.log();
  }
}

form.addEventListener("submit", formCheck);

// show hide msg
function show(value) {
  (value).classList.add("show");
  (value).classList.remove("hide");
}

function hide(value) {
  (value).classList.remove("show");
  (value).classList.add("hide");
}
