let movieData = null;

function printFile(){
	fetch('assets/imdb_top_1000.csv')
		.then(function(response) {
			return response.text();
		})
		.then(function(data) {
			movieData = data;
			console.log(movieData);
            sortMovieData(movieData);
		});
}

function sortMovieData(movieData) {
    document.getElementById("output").insertAdjacentHTML("beforebegin", movieData);
    return movieData;
}


// function processData(csv) {
//     var lines = csv.split("\n");
//     var headers = lines[0].split(",");
//     var dataArray = [];

//     for (var i = 1; i < lines.length; i++) {
//         var obj = {};
//         var currentLine = lines[i].split(",");
//         for (var j = 0; j < headers.length; j++) {
//             obj[headers[j]] = currentLine[j];
//         }
//         dataArray.push(obj);
//     }

//     return dataArray;


// function displayMovieCatalog(dataArray) {
//     var movieCatalog = $("#movieCatalog");

//     dataArray.forEach(function(movie) {
//         var movieCard = $("<div class='col-md-4'></div>");
//         movieCard.append(
//             "<div class='card movie-card'>" +
//                 "<img src='assets/harrysally.jpg' class='card-img-top' alt='" + movie.Series_Title + "'>" +
//                 "<div class='card-body'>" +
//                     "<h5 class='card-title'>" + movie.Series_Title + "</h5>" +
//                     "<p class='card-text'>" + movie.Overview + "</p>" +
//                 "</div>" +
//             "</div>"
//         );
//         movieCatalog.append(movieCard);
//     });
// }
function callAll(){
    movies = printFile()
    document.getElementById("output").insertAdjacentHTML("beforebegin", movies);
}