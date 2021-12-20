// Requirements
//   - 5 buttons representing boroughs
//   - Input box where it takes a number to see NUMBER OF COMPLAINTS
//   - when one of the 5 buttons are clicked, the number of complaints should be displayed on page according to NUM of
//     complaints and borough they clicked on
//     - IF the user doesn't input any number, make the default be 10
//     - they only want complaints that were handled by the NYPD (consider filtering for specific "agency" when making the API call)
//     - When the list of complaints show, each complaint should also have a button next to it that reads "see police response"
//     - When the user clicks on "see police response" button, it should toggle how the police responded to that complaint
//     - Make sure it only toggles the response for that ONE complaint, not the entire list!

const buttons = document.querySelectorAll("button");

buttons.forEach((borough) => {
  borough.addEventListener("click", () => {
    const inputNum = 10;
    if (document.getElementById("user-input").value !== "") {
      inputNum = document.getElementById("user-input").value;
    }
  });
});

// const api = (borough, inputNum) => {
//   const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD`;

//   fetch(url)
//     .then(response => response.json())
//     .then()

// };

document.getElementById("fetch").addEventListener("click", getData());

function getData() {
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD`
  )
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("output-container").innerHTML = JSON.stringify(data);
    });
}
