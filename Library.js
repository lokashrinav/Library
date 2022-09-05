let flip = document.querySelector(".flip");
let currentDiv = document.getElementById("div1");
let i = 0;
let myLibrary = [];
let pop = document.querySelector('.popup');

document.getElementsByClassName('center')[0]
        .addEventListener('click', function (event) {
          pop.classList.remove("popup");
          pop.classList.add("popup-open");
        });

document.getElementsByClassName('enter')[0]
        .addEventListener('click', function (event) {
            pop.classList.remove("popup-open");
            pop.classList.add("popup");
            let newDiv = document.createElement("div");
            myLibrary[i] = newDiv;
            flip.appendChild(newDiv);
            newDiv.value = i;
            newDiv.classList.add("card");
            i++;
            
        });

function Book() {
    for(i in myLibrary){
        this.Book
    }
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

