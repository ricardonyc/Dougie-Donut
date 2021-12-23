const buttons = document.querySelectorAll("button");

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
  fetch(
    `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD`
  )
    .then((res) => res.json())
    .then((infoArray) => {
      const randomArray = [];
      // Getting random elements
      for (let i = 0; i < inputNum; i++) {
        const randomNum = Math.floor(Math.random() * infoArray.length);
        randomArray.push(infoArray[randomNum]);
      }
      infoArray = randomArray;
      const complaintsOutput = document.getElementById("complaint-container");
      complaintsOutput.innerText = "";
      infoArray.map((obj, index) => {
        addInfo(complaintsOutput, obj);
      });
    });
}

function addInfo(complaintsOutput, obj) {
  const outerDiv = document.createElement("div");
  const innerDiv = document.createElement("div");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  const btnMsg = document.createTextNode("WHAT DID THE POLICE DO?!");
  btn.appendChild(btnMsg);

  const complaintText = document.createTextNode(`${obj.complaint_type}`);
  p.appendChild(complaintText);
  outerDiv.appendChild(innerDiv);
  innerDiv.appendChild(p);
  innerDiv.appendChild(btn);
  innerDiv.classList.add("output-style");
  outerDiv.classList.add("outer-div-style");
  complaintsOutput.appendChild(outerDiv);

  const resolution = document.createElement("p");
  // resolution.style.display = 'none'
  resolution.classList.add("hidden");
  const resolutionText = document.createTextNode(
    `${obj.resolution_description}`
  );
  resolution.appendChild(resolutionText);

  outerDiv.appendChild(resolution);

  console.log(complaintsOutput);

  btn.addEventListener("click", () => {
    resolution.classList.toggle("hidden");
  });
}
