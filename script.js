// // Requirements
// //   - 5 buttons representing boroughs
// //   - Input box where it takes a number to see NUMBER OF COMPLAINTS
// //   - when one of the 5 buttons are clicked, the number of complaints should be displayed on page according to NUM of
// //     complaints and borough they clicked on
// //     - IF the user doesn't input any number, make the default be 10
// //     - they only want complaints that were handled by the NYPD (consider filtering for specific "agency" when making the API call)
// //     - When the list of complaints show, each complaint should also have a button next to it that reads "see police response"
// //     - When the user clicks on "see police response" button, it should toggle how the police responded to that complaint
// //     - Make sure it only toggles the response for that ONE complaint, not the entire list!

const buttons = document.querySelectorAll("button");
// const userInput = document.getElementById("user-input")

buttons.forEach((borough) => {
  borough.addEventListener("click", () => {
    let inputNum = 10;
    if (document.getElementById("user-input").value !== "") {
      inputNum = document.getElementById("user-input").value;
    }
    let boroughChoice = borough.textContent;
    getData(boroughChoice, inputNum);
  });
});

function getData(borough, inputNum) {
  const ul = document.createElement("ul");
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${inputNum}&borough=${borough}&agency=NYPD`
  )
    .then((res) => res.json())
    .then((data) => {
      data.map((complaint) => {
        console.log(complaint.complaint_type);
        const li = document.createElement("li");
        li.innerHTML = complaint.complaint_type;
        document.querySelector(".container").appendChild(ul);
        ul.appendChild(li);
        // console.log(complaint);
        // console.log(complaint.complaint_type);
        // console.log(complaint.resolution_description);
      });
    });
}

// use math.random to get a random position of the complaint property
// set userInput to the number of complaints shown
