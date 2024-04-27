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
