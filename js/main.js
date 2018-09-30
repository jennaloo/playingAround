var babyAnimal = document.getElementById("photo");

var animalPhotos = ["img/bunny.jpg",
     "img/pandas.jpg",
     "img/hedgehog.jpg",
     "img/goat.jpg",
     "img/turtle.jpeg", ]

var altAtribute = ["bunny", "panda", "hedgehog", "goat", "turtle", ]


var i = 0;

function newPhoto() {
    i = i + 1;

    if (i >= animalPhotos.length) {
        i = 0;
    }
    babyAnimal.src = animalPhotos[i];
    babyAnimal.alt = altAtribute[i];
    document.appendChild(babyAnimal);
}



//var newDiv = document.createElement("div");
//
//newDiv.className = "text-white container-fluid bg-dark";
//newDiv.style.minHeight = "600px";
//
//document.body.appendChild(newDiv);
//
//var newDiv2 = document.createElement("div");
//newDiv2.className = "jumbotron bg-info"
//
//newDiv.appendChild(newDiv2);
//
//var newH1 = document.createElement("h1");
//newH1.textContent = "I was made with JS";
//newH1.className = "text-uppercase display-4"
//
////newDiv2.appendChild(newH1);
//
//
//function createStuff() {
//    var newImg = document.createElement("img");
//    var divContainer = document.createElement("div")
//
//    divContainer.className = "container-fluid col-12 my-5 text-center"
//    newImg.src = "img/heart.png";
//    newImg.style.width = "300px";
//    newImg.className = "animated infinite heartBeat"
//
//    document.body.appendChild(divContainer);
//    divContainer.appendChild(newImg);
//}
