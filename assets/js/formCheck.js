const ok = document.querySelector("#ok");

// validate if all input validations are true, if true display Validation sucessful
function formCheck() {
  // validateForm();
  if (nameCheck() && subjectCheck() && emailCheck() && addressCheck()) {
    console.log("Validation OK");
    show();
    return true;
  } else {
    console.log("Some fields doesnt meet the requirements");
    hide();
    console.log();
  }
}

form.addEventListener("submit", formCheck);

// show hide msg
function show() {
  ok.classList.add("show");
  ok.classList.remove("hide");
}

function hide() {
  ok.classList.remove("show");
  ok.classList.add("hide");
}
