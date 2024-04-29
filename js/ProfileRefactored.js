
var cardNum = 2;
var buttonNum = 2;

function addToWant(){
    var title = document.getElementById("wantTitle").value
    var content = document.getElementById("wantForm").value 
    card = {title,content}
    cardNum = cardNum + 1;
    buttonNum = buttonNum + 1;

    var wantCardTemplate = 
    '    <div class="card" id="card' + cardNum + '">                                            '+
        '    <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="movieImg">'+
        '    <div class="card-body lato-regular">'+
        '      <h5 class="card-title">'+ title +'</h5>'+
        '      <p class="card-text">'+ content +'</p>'+
        '      <p class="placeholder"></p>'+
        '      <button id="deleteButton' + buttonNum + '" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>'+
        '    </div>'+
        '</div>';


        // <div class = "col-md-3">
        // <div class="card" style="width: 18rem;" id="wantCard1">
        //     <img src="assets/barbiemovieposter.jpeg" class="card-img-top" alt="...">
        //     <div class="card-body lato-regular">
        //     <h5 class="card-title">MOVIE NAME</h5>
        //     <p class="card-text">blah blah blah</p>
        //     <a href="#" class="btn btn-customcolor">Add to Watchlist</a>
        //     </div>
        // </div>
        // </div>

    document.getElementById("wantRow").insertAdjacentHTML("beforeend", wantCardTemplate);

    function adder(card){
        for(let i=0;i<card.length;i++){
            card.push(card[i])
        }
        return card
    }
    console.log(adder(card))
}