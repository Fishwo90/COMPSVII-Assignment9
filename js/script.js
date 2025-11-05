console.log("script.js loaded");
 
//constants
const apiKey = "FEIlF3DnGPNHgjqRhrj8DZ58425QTijj";
const apiBaseUrl = "https://api.giphy.com/v1/gifs/search";

// DOM Element Selectors
// this selects the HTML elements and stores them in variables.
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#fetch-gif-btn");
const gifContainer = document.querySelector("#gif-container");

// Main Function

const fetchAndDisplayGifs = async () => {
  //Get Search Term
  const searchTerm = searchInput.value;

  // Basic validation...
  if (!searchTerm) {
    gifContainer.innerHTML =
      '<p class="text-center">Please enter a search term.</p>';
    return;
  }
  
  } catch (error) {
     //Error Handling
    console.error("Error fetching GIFs:", error);
    gifContainer.innerHTML = `<p class="text-center text-danger">Sorry, something went wrong. Please try again.</p>`;
  }
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
