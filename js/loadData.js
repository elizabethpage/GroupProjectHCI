let movieData = null;

function printFile(){
	fetch('assets/imdb_top_1000.csv')
		.then(function(response) {
			return response.text();
		})
		.then(function(data) {
			movieData = data;
			console.log(movieData);
            // displayRaw(movieData);
            var array = processData(movieData);
            // console.log(array)
            // var catalog = displayMovieCatalog(array);
            // console.log(catalog)
		});
}

function displayRaw(movieData) {
    document.getElementById("output").insertAdjacentHTML("beforebegin", movieData);
    return movieData;
}

function processData(csv) {
    var lines = csv.split("\n");
    var headers = lines[0].split(",");
    var dataArray = [];

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentLine = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        dataArray.push(obj);
    }

    console.log(dataArray)

    let movieCatalog = '';
    for (let i = 0; i < 10 && i < dataArray.length; i++) {
        // let img = dataArray[i]['Poster_Link'];
        let title = dataArray[i]['Runtime'];
        let overview = dataArray[i]['Star1'];
        movieCatalog += `
            <div class='card movie-card'>
                <div class='card-body'>
                    <h5 class='card-title'>${title}</h5>
                    <p class='card-text'>${overview}</p>
                </div>
            </div>`;
    }
    document.getElementById("output").insertAdjacentHTML("beforeend", movieCatalog);

    return movieCatalog;
}

// function displayMovieCatalog(dataArray) {
//     let movieCatalog = '';
//     for (let i = 0; i < 10 && i < dataArray.length; i++) {
//         let img = dataArray[i]['image_url'];
//         let title = dataArray[i]['title'];
//         let overview = dataArray[i]['overview'];
//         movieCatalog += `
//             <div class='card movie-card'>
//                 <img src='${img}' class='card-img-top' alt='${title}'>
//                 <div class='card-body'>
//                     <h5 class='card-title'>${title}</h5>
//                     <p class='card-text'>${overview}</p>
//                 </div>
//             </div>`;
//     }
//     document.getElementById("output").insertAdjacentHTML("beforeend", movieCatalog);
//     return movieCatalog
// }

    // var movieCatalog = null;

    // dataArray.forEach(function(movie) {
    //     var movieCard = null;
    //     movieCard.append(
    //         "<div class='card movie-card'>" +
    //             "<img src='assets/harrysally.jpg' class='card-img-top' alt='" + movie.Series_Title + "'>" +
    //             "<div class='card-body'>" +
    //                 "<h5 class='card-title'>" + movie.Series_Title + "</h5>" +
    //                 "<p class='card-text'>" + movie.Overview + "</p>" +
    //             "</div>" +
    //         "</div>"
    //     );
    //     movieCatalog.append(movieCard);
    // });


// function callAll(){
//     movies = printFile()
//     document.getElementById("output").insertAdjacentHTML("beforebegin", movies);
// }