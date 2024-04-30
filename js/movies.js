
// var selectedGenres = [];

// function updateGenreDisplay(genre) {
//     var checkbox = document.querySelector('input[type="checkbox"][value="' + genre + '"]');
//     console.log(checkbox)
//     if (checkbox.checked) {
//         selectedGenres.push(genre);
//     }else {
//         var index = selectedGenres.indexOf(genre);
//         if (index != -1) {
//             selectedGenres.splice(index, 1);
//         }
//     }

//     var output = document.getElementById("output");
//     output.innerHTML = "";

//     // display content for selected genres
//     selectedGenres.forEach(function(genre) {
//         // call display functions for each selected genre
//         window["display" + genre.charAt(0).toUpperCase() + genre.slice(1)]();
//     });

//     //genre list
//     //clear other genres out that aren't selected
    
// }

function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
    }else {
        dropdownContent.classList.add("show");
    }
}

function toggleRatingDropdown() {
    var dropdownContent = document.getElementById("ratingDropdown");
    if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
    }else {
        dropdownContent.classList.add("show");
    }
}

function toggleAgeRatingDropdown() {
    var dropdownContent = document.getElementById("ageRatingDropdown");
    if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
    }else {
        dropdownContent.classList.add("show");
    }
}

function updateGenreDisplay(genre) {
    var ele = document.getElementById(genre)
    if (ele.style.display == 'none') {
        ele.style.display = 'flex';    
    }
    else {
        ele.style.display = 'none';
    }
}
