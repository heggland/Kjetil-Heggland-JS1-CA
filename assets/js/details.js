//TODO: Set the title of the HTML page to be one of the property values, like name,title or another relevant property.

const resultsContainerTitle = document.querySelector("title");
const resultsContainer = document.querySelector(".row");
const resultsContainerName = document.querySelector(".characterName");



// get the querystring
const queryString = document.location.search;
// create an object that will allows us to access all the querystring parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the querystrings
const getId = params.get("id");
// console.log(getId);
const value = "/quotes";

const url = "https://officeapi.dev/api/" + value;
const proxy = "https://cors-anywhere.herokuapp.com/";

const proxyurl = proxy + url;

async function fetchOffice() {
  //get intel from API
  try {
    const response = await fetch(proxyurl)
    const json = await response.json();
    const result = json.data;

    resultsContainer.innerHTML = "";
    resultsContainerTitle.innerHTML = "";

    // console.log(json);

    resultsContainer.innerHTML += ``;
    resultsContainerName.innerHTML += `<h2>Here is more quotes from ${name}</h2>`;

    resultsContainerTitle.innerHTML += `${name}`;

    for (let i = 0; i < result.length; i++) {
      //declare variables from API
      id = result[i].character._id;
      firstname = result[i].character.firstname;
      lastname = result[i].character.lastname;
      content = result[i].content;

      name = firstname + " " + lastname;

      // checks if ID = ID, then print out only those thats true
      if (getId == id) {

        createHtml();
      }
    }
  } catch (error) {
    // console.log(error);
    resultsContainer.innerHTML = displayError();
  }
}

fetchOffice();

function createHtml() {
  resultsContainer.innerHTML += `
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 content content2">
    <p>- ${content}</p>
    </div>`;
}
