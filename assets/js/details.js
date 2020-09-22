const resultsContainerTitle = document.querySelector("title");
resultsContainerTitle.innerHTML = "";
const resultsContainerName = document.querySelector(".characterName");
resultsContainerName.innerHTML = "";
const resultsContainer = document.querySelector(".row");
resultsContainer.innerHTML = "";

//declare variables for API
let firstname = "";
let lastname = "";
let id = "";
let content = "";
let name = "";

// get the querystring
const queryString = document.location.search;
// create an object that will allows us to access all the querystring parameters
const params = new URLSearchParams(queryString);
// get the id parameter from the querystrings
const getId = params.get("id");
const getName = params.get("name");
//console.log(getName);

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
    // console.log(json);

    resultsContainerName.innerHTML += `<h2>Here is more quotes from ${getName}</h2>`;
    resultsContainerTitle.innerHTML += `${getName}`; // IDEA: dont send the name as a get parameter. TODO: Count names and then remove duplicate names?



    for (let i = 0; i < result.length; i++) {
      //declare variables from API
      firstname = result[i].character.firstname;
      lastname = result[i].character.lastname;
      id = result[i].character._id;
      content = result[i].content;

      // checks if ID = ID, then print out only those thats true
      if (getId == id) {
        createHtml();
      }
    }

  } catch (error) {
    console.log(error);
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
