
var wantCardNum = 2;
var wantButtonNum = 2;
var wantMoveButtonNum = 2;
var wantDeleteButtonNum = 2;

var watchedCardNum = 1;
var watchedButtonNum = 1;
var watchedDeleteButtonNum = 1;

function addToWant(){
    var title = document.getElementById("wantTitle").value
    var content = document.getElementById("wantContent").value 
    card = {title,content}
    wantCardNum = wantCardNum + 1;
    wantButtonNum = wantButtonNum + 1;
    wantMoveButtonNum = wantMoveButtonNum + 1;
    wantDeleteButtonNum = wantDeleteButtonNum + 1;

    var wantCardTemplate = 
        `<div class = "col-md-3">
        <div class="card" style="width: 18rem;" id="wantCard${wantCardNum}">
            <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="${title}">
            <div class="card-body lato-regular">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
            <button id="wantMoveButton${wantMoveButtonNum}" type="button" class="btn btn-customcolor" onclick="moveToWatched(id)">Move to Watched</button>
            <button id="wantDeleteButton${wantDeleteButtonNum}" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>
            </div>
        </div>
        </div>`;

    document.getElementById("wantRow").insertAdjacentHTML("beforeend", wantCardTemplate);

    function adder(card){
        for(let i=0;i<card.length;i++){
            card.push(card[i])
        }
        return card
    }
    console.log(adder(card))
}

function addToWatched(){
    var title = document.getElementById("watchedTitle").value
    var content = document.getElementById("watchedContent").value 
    card = {title,content}
    watchedCardNum = watchedCardNum + 1;
    watchedButtonNum = watchedButtonNum + 1;
    watchedDeleteButtonNum = watchedDeleteButtonNum + 1;

    var watchedCardTemplate = 
        `<div class = "col-md-3">
        <div class="card" style="width: 18rem;" id="wantCard${watchedCardNum}">
            <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="${title}">
            <div class="card-body lato-regular">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
            <p class="placeholder"></p>
            <button id="watchedDeleteButton${watchedDeleteButtonNum}" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>
            </div>
        </div>
        </div>`;

    document.getElementById("watchedRow").insertAdjacentHTML("beforeend", watchedCardTemplate);

    function adder(card){
        for(let i=0;i<card.length;i++){
            card.push(card[i])
        }
        return card
    }
    console.log(adder(card))
}


function moveToWatched(thisID){
    //save data
    var b = document.getElementById(thisID).previousElementSibling.previousElementSibling.parentElement.previousElementSibling.parentElement;
    var cardID = b.getAttribute("id");
    var title = document.getElementById(thisID).previousElementSibling.previousElementSibling.innerHTML;
    var content = document.getElementById(thisID).previousElementSibling.innerHTML;
    var img = document.getElementById(thisID).previousElementSibling.previousElementSibling.parentElement.previousElementSibling.getAttribute("src");

    watchedDeleteButtonNum = watchedDeleteButtonNum + 1;

    var watchedCardTemplate = 
        `<div class = "col-md-3">
        <div class="card" style="width: 18rem;" id="${cardID}">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body lato-regular">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
            <p class="placeholder"></p>
            <button id="watchedDeleteButton${watchedDeleteButtonNum}" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>
            </div>
        </div>
        </div>`;

    //add and delete
    document.getElementById("watchedRow").insertAdjacentHTML("beforeend", watchedCardTemplate);
    var b = document.getElementById(thisID).previousElementSibling.previousElementSibling.parentElement.previousElementSibling.parentElement;
    b.remove();
}

function deleteButton(iD){
    var b = document.getElementById(iD).previousElementSibling.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.parentElement;
    b.remove();
}
