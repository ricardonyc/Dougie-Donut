const btn = document.querySelector("button");
const breedInput = document.querySelector("input");
const imageDiv = document.querySelector("div");
const errorMessage = document.querySelector("p");

btn.addEventListener("click", () => {
  let breed = breedInput.value;
  const url = `https://dog.ceo/api/breed/${breed}/images/random`;

  // JavaScript has a built in method for API calls
  // which is promise based
  fetch(url)
    .then((res) => res.json()) // receives the response from the promise
    .then((data) => {
      let dogPic = data.message;

      imageDiv.innerHTML = `<img src="${dogPic}">`;
    })
    .catch((error) => {
      console.log(error);
    });
});
