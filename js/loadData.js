//global movieData variable
let movieData = null;

//function that fetches data and calls all the other functions needed for the page
function display() {
    fetch('/assets/imdb_top_1000.csv')
    .then(response => response.json())
    .then(data => {
      console.log(data); 
      movieData = data;
    //   displayThisMovie(0);
      displayRow();

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

function displayRow(){
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


