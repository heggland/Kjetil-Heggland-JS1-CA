//https://www.officeapi.dev/

const resultsContainer = document.querySelector(".row");

const value = "/quotes/random";
const url = "https://officeapi.dev/api/" + value;
const proxy = "https://cors-anywhere.herokuapp.com/";
const proxyurl = proxy + url;

//declare variables for API
let firstname = "";
let lastname = "";
let id = "";
let content = "";
let name = "";


async function fetchOffice() {
  //get intel from API
  try {
    const response = await fetch(proxyurl)
    const json = await response.json();
    const result = json.data;

    resultsContainer.innerHTML = "";
    // console.log(result);

    //assign API intel to variables
    firstname = result.character.firstname;
    lastname = result.character.lastname;
    id = result.character._id;
    content = result.content;
    name = firstname + " " + lastname;

    createHtml();


  } catch (error) {
    // console.log(error);
    resultsContainer.innerHTML = displayError();
  }
}


fetchOffice();

function createHtml(details) {
  resultsContainer.innerHTML += `

  <a href="details.html?id=${id}&name=${name}" class="content">
    <div class="col content">
    <h3>${name}</h3>
    <p> ${content}</p>
    <small> Click on me for more quotes </small>
    </div>
    </a>`;
}
