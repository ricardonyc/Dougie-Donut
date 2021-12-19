// Search through the 311 call data provided by the NYC API 
// and display all the complaints made to the NYPD, filtered by borough
// they also want to see how the police responded to the complaint

// Data send after making a fetch call is formatted as JSON

// only some key-value pairs are of use to us
//   - borough
//   - descriptor (which says what kind of complaint was made)
//   - agency: "NYPD" (because we only want complaints that were handled by the police department)
//   - resolution_description (which says how the police handled the complaint)

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


// get value of input (NUMBER of complaints)
// when button is clicked, display the NUMBER of complaints in THAT borough
// no input NUMBER ? set value to default 10
// ONLY complaints that were handled by the NYPD



const userInput = document.querySelector("input")
const brooklyn = document.getElementById("brooklyn")

brooklyn.addEventListener("click", () => {
    let complaints = userInput.value
    const url = `https://data.cityofnewyork.us/resource`
})