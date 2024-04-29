// Define global variable to store movie data
let movieData = null;

// Function to handle search form submission
function handleSearchFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    const searchQuery = document.getElementById("searchInput").value.trim();
    if (searchQuery !== "") {
        // Make AJAX request to the server for search results
        fetch(`/search?q=${encodeURIComponent(searchQuery)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display search results dynamically
                displaySearchResults(data);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    }
}

// Function to display search results dynamically
function displaySearchResults(filteredData) {
    // Construct HTML for displaying search results
    let displayThis = '';

    // Loop through filtered movies and construct HTML for each movie
    filteredData.forEach(movie => {
        displayThis += `
            <div>
                <h3>${movie.Series_Title}</h3>
                <p>Year: ${movie.Released_Year}</p>
                <p>Rating: ${movie.IMDB_Rating}</p>
            </div>
        `;
    });

    // Displaying movies
    document.getElementById("output").innerHTML = displayThis;
}

// Attach event listener to search form
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchForm").addEventListener("submit", handleSearchFormSubmission);
});
