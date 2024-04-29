//global movieData variable for both popular now and fresh finds
let movieData = null;

//function that fetches data and calls all the other functions needed for the page
function displayPopularNow() {
    fetch('/assets/imdb_top_1000.csv')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        movieData = data;
        //displayThisMovie(0);
        displayPopularNowrow();

        //add functions HERE to make sure they are called AFTER data is fetched

    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching JSON:', error);
    });
}

//function that fetches data and calls all the other functions needed for the page
function displayFreshFinds() {
    fetch('/assets/imdb_top_1000.csv')
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        movieData = data;
        //displayThisMovie(0);
        displayFreshFindsrow();

        //add functions HERE to make sure they are called AFTER data is fetched

    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching JSON:', error);
    });
}

function displayClassics() {
    fetch('/assets/imdb_top_1000.csv')
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      movieData = data;
    //   displayThisMovie(0);
      displayClassicsrow();

      //add functions HERE to make sure they are called AFTER data is fetched

    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('Error fetching JSON:', error);
    });
}

//display ONE movie from json object array
function displayThisMovie(movieArrNum) {
    //getting json object data
    title = movieData[movieArrNum].Series_Title;
    image = movieData[movieArrNum].Poster_Link;
    overview = movieData[movieArrNum].Overview;

    //making the movie card
    let movieCard = '';
    movieCard += `
    <div class = "col-md-3">
        <div class='card' style = "width:18rem;">
            <img src=${image} class="card-img-top" alt=${title}>
            <div class='card-body lato-regular'>
                <h5 class='card-title'>${title}</h5>
                <p class='card-text'>${overview}</p>
                <a href="#" class="btn btn-customcolor">Add to Watchlist</a>
            </div>
        </div>
    </div>`;
    return movieCard;
    // document.getElementById("output").insertAdjacentHTML("beforebegin", movieCard);
}

function displayPopularNowrow() {
    let displayThis = '';

    // Filter movies based on release year and gross
    const filteredMovies = movieData.filter(movie => movie.Released_Year >= 2019 && parseFloat(movie.Gross.replace(/[^0-9.-]+/g, "")) >= 160000000);
    console.log(filteredMovies)

    // Creating row div start
    const rowDiv = `
        <div class="row card-section">
            <div class="col-md-12">
                <h2 class="card-title mb-3 lato-bold">Popular Now</h2>
            </div>`;
    displayThis = displayThis + rowDiv;

    // Loop through filtered movies
    filteredMovies.slice(0, 10).forEach(movie => {
        const movieIndex = movieData.findIndex(m => m === movie); // Find index of movie in movieData
        if (movieIndex !== -1) {
            displayThis += displayThisMovie(movieIndex); // Pass index to displayThisMovie
        }
    });

    // Creating row div end
    const rowEnd = `</div>`;
    displayThis += rowEnd;

    // Displaying movies
    document.getElementById("output").insertAdjacentHTML("beforebegin", displayThis);
}

function displayFreshFindsrow() {
    let displayThis = '';

    // Filter movies based on release year and IMDb rating
    const filteredMovies = movieData.filter(movie => movie.Released_Year >= 2020 && parseFloat(movie.IMDB_Rating) > 7);
    console.log(filteredMovies);

    // Creating row div start
    const rowDiv = `
        <div class="row card-section">
            <div class="col-md-12">
                <h2 class="card-title mb-3 lato-bold">Fresh Finds</h2>
            </div>`;
    displayThis = displayThis + rowDiv;

    // Loop through filtered movies
    filteredMovies.slice(0, 10).forEach(movie => {
        const movieIndex = movieData.findIndex(m => m === movie); // Find index of movie in movieData
        if (movieIndex !== -1) {
            displayThis += displayThisMovie(movieIndex); // Pass index to displayThisMovie
        }
    });

    // Creating row div end
    const rowEnd = `</div>`;
    displayThis += rowEnd;

    // Displaying movies
    document.getElementById("output").insertAdjacentHTML("beforebegin", displayThis);
}

function displayClassicsrow(){
    let displayThis = '';

    //creating row div start
    const rowDiv = `
        <div class="row card-section">
            <div class="col-md-12">
                <h2 class="card-title mb-3 lato-bold">Classics</h2>
            </div>`;
    displayThis = displayThis + rowDiv

    //loop through movies we want in the row
    for (let i = 0; i < 10; i++) {
        displayThis = displayThis + displayThisMovie(i);
      }
    
    //creating row div end
    const rowEnd = `
    </div>`
    displayThis = displayThis + rowEnd;

    //displaying movies
    document.getElementById("output").insertAdjacentHTML("beforebegin", displayThis);
}


