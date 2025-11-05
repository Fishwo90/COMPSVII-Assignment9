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
//Main Function to Fetch and Display GIFs
/**
 * Fetches GIFs from Giphy based on a search term and displays them.
 */
const fetchAndDisplayGifs = async () => {
  //Get Search Term
  const searchTerm = searchInput.value;

  // Basic validation: If the search box is empty, don't do anything.
  if (!searchTerm) {
    gifContainer.innerHTML =
      '<p class="text-center">Please enter a search term.</p>';
    return;
  }

  // Show a loading message while we fetch the data
  gifContainer.innerHTML = '<p class="text-center">Loading...</p>';

  // Build Dynamic URL
  const endpoint = `${apiBaseUrl}?api_key=${apiKey}&q=${searchTerm}&limit=12&rating=g`;

  //Fetch Data
  try {
    // 'await' pauses the function until the network request completes
    const response = await fetch(endpoint);

    // If the response was not successful show error
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data from the response
    const json = await response.json();
    const results = json.data; // 'data' is the array of GIF objects

    //Display GIFs on Page

    // Clear the "Loading..." message
    gifContainer.innerHTML = "";

    // Check if Giphy returned any results
    if (results.length === 0) {
      gifContainer.innerHTML =
        '<p class="text-center">No GIFs found. Try another search!</p>';
    } else {
      // Loop through the 'results' array
      results.forEach((gif) => {
        // Get a good URL for a grid layout (not the full 'original' size)
        const imageUrl = gif.images.fixed_height.url;

        // Use '+=_ to append each new image to the container
        // Using responsive Bootstrap columns for a nice grid
        gifContainer.innerHTML += `
          <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <img src="${imageUrl}" class="img-fluid" alt="Giphy GIF">
          </div>
        `;
      });
    }
  
  
  
  } catch (error) { // <-- Now 'catch' is expected
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
