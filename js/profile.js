var wantCardNum = 2;
var wantButtonNum = 2;
var wantMoveButtonNum = 2;
var wantDeleteButtonNum = 2;

var watchedCardNum = 1;
var watchedButtonNum = 1;
var watchedDeleteButtonNum = 1;

var deleteButtonNum = 0;

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
            <img src="assets/movie-placeholder.png" class="card-img-top" alt="${title}">
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
            <img src="assets/movie-placeholder.png" class="card-img-top" alt="${title}">
            <div class="card-body lato-regular">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
            <p class="placeholder"></p>
            <button id="watchedDeleteButton${watchedDeleteButtonNum}" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>
            </div>
        </div>
        </div>`;

    document.getElementById("watchedRow").insertAdjacentHTML("beforeend", watchedCardTemplate);

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

//for Custom Lists
//code got from w3schools

function openList(evt, listName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(listName).style.display = "block";
    evt.currentTarget.className += " active";
  }

//create new list
function addList(){
    var title = document.getElementById("customTitle").value
    card = {title}

    var listTemplate =
            `<div id="${title}" class="tabcontent">
                <h3>${title}</h3>
                <!--Add to List-->
                <!-- Button trigger modal -->
                <div class="row">
                    <button type="button" class="btn btn-customcolor lato-regular btn-lg" style="width: 8rem; margin: 10px 10px 10px 69rem; " data-bs-toggle="modal" data-bs-target="#${title}Modal">
                        +
                    </button>
                    
                    <!-- Modal -->
                    <div class="modal fade modal-lg loto-regular" id="${title}Modal" tabindex="-1" aria-labelledby="${title}ModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="${title}ModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="${title}Form" method="POST">
                                    <div class="container container-lg">
                                        <div class="mb-3">
                                        <label for="${title}Title" class="form-label">Title:</label>
                                        <input type="text" class="form-control" id="${title}Title" aria-describedby="title">
                                        </div>
                                        <div class="mb-3">
                                        <label for="${title}Content" class="form-label">Notes:</label>
                                        <input type="text" class="form-control" id="${title}Content">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-customcolor" data-bs-dismiss="modal">Close</button>
                            <button id="${title}Button" type="button" class="btn btn-customcolor" onclick="addToList(id)">Add to List</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>`;

    document.getElementById("listRow").insertAdjacentHTML("beforeend", listTemplate);

    var listTemplateTab = 
        `<button class="tablinks" onclick="openList(event, '${title}')">${title}</button>`;
    
    document.getElementById("listTab").insertAdjacentHTML("beforeend", listTemplateTab);

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

}

function addToList(id){
    var b = document.getElementById(id).previousElementSibling.parentElement.previousElementSibling.previousElementSibling.parentElement.parentElement.parentElement.previousElementSibling.parentElement.previousElementSibling.parentElement;
    var mainID = b.id
    console.log(mainID)

    var title = document.getElementById(`${mainID}Title`).value
    var content = document.getElementById(`${mainID}Content`).value 
    card = {title,content}
    // watchedCardNum = watchedCardNum + 1;
    // watchedButtonNum = watchedButtonNum + 1;
    deleteButtonNum = deleteButtonNum + 1;

    var cardTemplate = 
        `<div class = "col-md-3">
        <div class="card" style="width: 18rem;" id="">
            <img src="assets/movie-placeholder.png" class="card-img-top" alt="${title}">
            <div class="card-body lato-regular">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
            <p class="placeholder"></p>
            <button id="deleteButton${deleteButtonNum}" type="button" class="btn btn-customcolor" onclick="deleteButton(id)">Delete</button>
            </div>
        </div>
        </div>`;

    document.getElementById(mainID).insertAdjacentHTML("beforeend", cardTemplate);

}