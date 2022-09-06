let flip = document.querySelector(".flip");
let currentDiv = document.getElementById("div1");
let i = 0;
let gh = "0";
let d = 0;
let myLibrary = [];
let pop = document.querySelector('.popup');
let imge = document.querySelectorAll(".imge");


document.getElementsByClassName('enter')[0]
        .addEventListener('click', function (event) {
            pop.classList.remove("popup-open");
            pop.classList.add("popup");
            myLibrary[y] = document.getElementById("hi1").value;
            y++;
            myLibrary[y] = document.getElementById("hi2").value;
            y++;
            myLibrary[y] = document.getElementById("h13").value;
            y++;
            myLibrary[y] = document.querySelector('input[name="action"]:checked').value;
            y++;

            let title = document.getElementById("hi1").value;
            let name  = document.getElementById("hi2").value;
            let pages = document.getElementById("hi3").value;
            let wrong = document.querySelector('input[name="action"]:checked').value;
            let newDiv = document.createElement("div");
            myLibrary[i] = newDiv;
            newDiv.classList.add("card")
            let newDiv1 = document.createElement("div");
            newDiv.appendChild(newDiv1);
            newDiv1.innerHTML = "Book Name: " + title;
            newDiv1.classList.add("title10");
            let newDiv2 = document.createElement("div");
            newDiv.appendChild(newDiv2);
            newDiv2.innerHTML =  "Author Name: " + name;
            newDiv2.classList.add("name10");
            let newDiv3 = document.createElement("div");
            newDiv.appendChild(newDiv3);
            newDiv3.innerHTML =  "Number of Pages: " + pages;
            newDiv3.classList.add("pages10");
            let newDiv4 = document.createElement("div");
            newDiv.appendChild(newDiv4);
            newDiv4.innerHTML =  wrong;
            if(wrong=="Read"){
              newDiv4.classList.add("wrong10");
            }
            else {
              newDiv4.classList.add("wrong11");
            }
            let image = document.createElement("img");
            image.src = "close-box-outline.png";
            image.classList.add("imge");
            image.setAttribute("id",`${i}`);
            newDiv.appendChild(image);
            i = parseInt(i);             
            newDiv.value = i;
            i++;
            i = parseInt(i);
            d = parseInt(i);
        });

function Book() {
    for (var y = 0; y < myLibrary.length; y++) {
      flip.appendChild(newDiv);
      newDiv.appendChild(newDiv2);
      newDiv.appendChild(newDiv3);
      newDiv.appendChild(newDiv4);
  }
}

function addBookToLibrary() {
  // do stuff here
}

