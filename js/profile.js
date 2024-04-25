var card = []
var cardNum = 12;
var buttonNum = 12;
var carouselNum = 2;
var moveNum = 6;

//for the new list button
function addToList(){
    var title = document.getElementById("title").value
    var content = document.getElementById("content").value 
    // var user = document.getElementById("username").value 
    // card = {title,content,user}
    card = {title,content}
    cardNum = cardNum + 1;
    buttonNum = buttonNum + 1;
    moveNum = moveNum + 1;

    var cardTemplate = 
    '    <div class="card" id="card' + cardNum + '">                                            '+
        '    <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="movieImg">'+
        '    <div id="cardBody" class="card-body">'+
        '      <h5 id="title" class="card-title">'+ title +'</h5>'+
        '      <p id="content" class="card-text">'+ content +'</p>'+
        '      <button id="moveButton' + moveNum + '" type="button" class="btn btn-customcolor" onclick="moveToWatched(id)">Move to Watched</button>'+
        '      <button id="deleteButton' + buttonNum + '" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>'+
        '    </div>'+
        '</div>';

    document.getElementById("carouselItem2").insertAdjacentHTML("beforebegin", cardTemplate);

    // var cardTemplate2 = 
    // '<div class="carousel-item">' +
    //     '<div class="card-wrapper">' +
    // '    <div class="card" id="card' + cardNum + '">                                            '+
    //     '    <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="movieImg">'+
    //     '    <div class="card-body">'+
    //     '      <h5 class="card-title">'+ title +'</h5>'+
    //     '      <p class="card-text">'+ content +'</p>'+
    //     '      <button type="button" class="btn btn-primary" onclick="addToList()">Move to Watched</button>'+
    //     '      <button id="deleteButton' + buttonNum + '" type="button" class="btn btn-primary" onclick="deleteButton(id)">Delete</button>' +
    //     '    </div>'+
    //     '</div>'+
    //     '<span id="carouselItem' + carouselNum + '"></span>'+
    //     '</div>'+
    // '</div>';

    // if((cardNum) % 4 == 1){
    //     document.getElementById("newCarouselItem").insertAdjacentHTML("beforebegin", cardTemplate2);
    //     carouselNum = carouselNum + 1;
    // }
    // else if(cardNum <5) {
    //     document.getElementById("carouselItem2").insertAdjacentHTML("beforebegin", cardTemplate);
    // }
    // else{
    //     document.getElementById("carouselItem" + carouselNum).insertAdjacentHTML("beforebegin", cardTemplate);
    // }

    function adder(card){
        for(let i=0;i<card.length;i++){
            card.push(card[i])
        }
        return card
    }
    console.log(adder(card))
}

function addToList2(){
    var title = document.getElementById("title2").value
    var content = document.getElementById("content2").value 
    // var user = document.getElementById("username").value 
    // card = {title,content,user}
    card = {title,content}
    cardNum = cardNum + 1;
    buttonNum = buttonNum + 1;

    var cardTemplate2 = 
    '    <div class="card" id="card' + cardNum + '">                                            '+
        '    <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="movieImg">'+
        '    <div class="card-body">'+
        '      <h5 class="card-title">'+ title +'</h5>'+
        '      <p class="card-text">'+ content +'</p>'+
        '      <p class="placeholder"></p>'+
        '      <button id="deleteButton' + buttonNum + '" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>'+
        '    </div>'+
        '</div>';

    document.getElementById("carouselItem3").insertAdjacentHTML("beforebegin", cardTemplate2);

    function adder(card){
        for(let i=0;i<card.length;i++){
            card.push(card[i])
        }
        return card
    }
    console.log(adder(card))
}

//add to watched row
function moveToWatched(thisID){

    //save data
    var b = document.getElementById(thisID).previousElementSibling.previousElementSibling.parentElement.previousElementSibling.parentElement;
    var cardID = b.getAttribute("id");
    var title = document.getElementById(thisID).previousElementSibling.previousElementSibling.innerHTML;
    var content = document.getElementById(thisID).previousElementSibling.innerHTML;

    var cardTemplate2 = 
    '    <div class="card" id="' + cardID + '">                                            '+
        '    <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="movieImg">'+
        '    <div class="card-body">'+
        '      <h5 class="card-title">'+ title +'</h5>'+
        '      <p class="card-text">'+ content +'</p>'+
        '      <p class="placeholder"></p>'+
        '      <button id="deleteButton' + buttonNum + '" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>'+
        '    </div>'+
        '</div>';

    //add
    document.getElementById("carouselItem3").insertAdjacentHTML("beforebegin", cardTemplate2);
    // deleteButton("deleteButton"+ buttonNum);
}

//create function delete from row
function deleteButton(iD){
    var b = document.getElementById(iD).previousElementSibling.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.parentElement;
    b.remove();
}
