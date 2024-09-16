// user clicks button
// consume an api
// send back random imgage to html

// Setting the button to a variable to access it.
let button = document.getElementsByTagName("button");   
let img = document.getElementsByTagName("img");
img[0].setAttribute("width", "300px");
img[0].style.height = "300px";
let defaultImageURL = "https://images.dog.ceo/breeds/danish-swedish-farmdog/ebba_002.jpg";
img[0].src = defaultImageURL;
img[0].alt = defaultImageURL.slice(30);

// Assign an event listener for a click on a button
button[0].addEventListener("click", () => {
  // Consume API
  // 1) Endpoint - https://dog.ceo/api/breeds/image/random
  // 2) JSON or XML - JSON
  // 3) How much data - 1 JSON Object
  // 4) What data looks like - 2 things, message = potential image url, success

  // HTTP Request
  // 1) Utilize the endpoint with correct method (verb)
  // 4) Handle the error
  const baseURL = "https://dog.ceo/api/breeds";
  let route = "image/random";
  let endpoint = `${baseURL}/${route}`;
  fetch(endpoint)
    .then((response) => {
      // 2) Get a response: if ok, parse the data, else error
      if (response.ok) {
        // Sent down to the next one
        return response.json();
      } else {
        throw Error("Irish broke it!!!");
      }
    })
    .then((data) => {
      // 3) Do something with the parsed data
      img[0].setAttribute("src", data.message);
      img[0].alt = data.message.slice(30);
    })
    .catch((error) => {
      console.log(error);
    });
});
