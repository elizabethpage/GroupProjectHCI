let movieData = null;

document.addEventListener('DOMContentLoaded', function() {
    var printButton = document.getElementById('printButton');
    printButton.addEventListener('click', printFile);
});





function printFile(){
	console.log('printFile function called')
	fetch('assets/imdb_top_1000.csv')
		.then(function(response) {
			return response.text();
		})
		.then(function(data) {
			console.log('Data fetched succesfully:', data)
			movieData = data;
			console.log(movieData);
            // displayRaw(movieData);
            var movieCatalog = processData(movieData);
            // console.log(array)
            // var catalog = displayMovieCatalog(array);
            // console.log(catalog)
			displayRaw(movieCatalog);
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

	console.log(movieCatalog);


	var movieCatalogContainer = document.getElementById("movieCatalogContainer");
    if (movieCatalogContainer) {
        movieCatalogContainer.innerHTML = ''; // Clear existing content
        movieCatalogContainer.insertAdjacentHTML('beforeend', movieCatalog); // Insert new content
    } else {
        console.error("Container element not found.");
    }

    //document.getElementById("output").insertAdjacentHTML("beforeend", movieCatalog);

    return movieCatalog;
}
