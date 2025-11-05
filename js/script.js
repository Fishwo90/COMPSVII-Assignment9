console.log("script.js loaded");
 



// DOM Element Selectors
// this selects the HTML elements and stores them in variables.
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#fetch-gif-btn");
const gifContainer = document.querySelector("#gif-container");

// Main Function

//add something to fetch later



const fetchAndDisplayGifs = async () => {

  console.log("Search button was clicked!");
  console.log("Search term:", searchInput.value);
  gifContainer.innerHTML = "<p>Button clicked! Fetching...</p>";
};

// Event Listeners
// This line "listens" for a 'click' on the search button.
// When it's clicked, it runs the 'fetchAndDisplayGifs' function.
searchButton.addEventListener("click", fetchAndDisplayGifs);

//allows you to press enter
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    fetchAndDisplayGifs();
  }
});
