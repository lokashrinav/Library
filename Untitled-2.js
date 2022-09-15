let flip = document.querySelector(".flip");
let currentDiv = document.getElementById("div1");
let i = -1;
let gh = "0";
let d = 0;
let myLibrary = [];
let pop = document.querySelector('.popup');
let imge = document.querySelectorAll(".imge");
let g = 0;
let e = 0;

document.getElementsByClassName('center')[0]
        .addEventListener('click', function (event) {
          pop.classList.remove("popup");
          pop.classList.add("popup-open");
        });
    
//Image 1 has to delete div1

//handleDelete(`${i}`)
// -3 WORKS FOR 4 DIVS
// -2 WORKS FOR 3 DIVS
// -1 WORKS FOR 2 DIVS
//  0 WORKS FOR 1 DIV
//  let fork = index - ((po - 1));
//myLibrary.splice(fork, 4);
function handleDelete(index) {
          myLibrary.splice(index-2, 4);
          d = d - 4;

          let card = document.getElementsByClassName('card');
          if(g>0){
            while(card[0]) {
              card[0].parentNode.removeChild(card[0]);
          }};

          for (var y = 0; y < ((myLibrary.length)); y++) {
            let first = myLibrary[y];
            if(first==undefined){
              y = y + 4;
            }
            let newDiv = document.createElement("div");
            newDiv.classList.add("card");
            flip.appendChild(newDiv);
            
            let newDiv1 = document.createElement("div");
            newDiv1.classList.add("title10");
            newDiv.appendChild(newDiv1);
            newDiv1.innerHTML = "Book Name: " + first;

            y++;
            let second = myLibrary[y];
            let newDiv2 = document.createElement("div");
            newDiv2.classList.add("name10");
            newDiv.appendChild(newDiv2);
            newDiv2.innerHTML =  "Author Name: " + second;

            y++;
            let third = myLibrary[y];
            let newDiv3 = document.createElement("div");
            newDiv.appendChild(newDiv3);
            newDiv3.innerHTML =  "Number of Pages: " + third;
            newDiv3.classList.add("pages10");

            y++;
            let fourth = myLibrary[y];
            let newDiv4 = document.createElement("div");
            if(fourth=="Read"){
              newDiv4.classList.add("wrong10");
            }
            else {
              newDiv4.classList.add("wrong11");
            }
            newDiv.appendChild(newDiv4);
            newDiv4.innerHTML =  fourth;

            let newDiv5 = document.createElement("img");
            newDiv5.classList.add("imge");
            newDiv5.setAttribute('onclick',`handleDelete${i}()`)
            newDiv5.classList.add(`${e}`);
            e++;
            newDiv5.src = "close-box-outline.png";
            newDiv.appendChild(newDiv5);
        }
        g++;
        alert(myLibrary)
        }

//What determines i?

document.getElementsByClassName('enter')[0]
        .addEventListener('click', function (event) {
          pop.classList.remove("popup-open");
          pop.classList.add("popup");
          myLibrary[d] = document.getElementById("hi1").value;
          d++;;
          myLibrary[d] = document.getElementById("hi2").value;
          d++;
          myLibrary[d] = document.getElementById("hi3").value;
          d++;
          myLibrary[d] = document.querySelector('input[name="action"]:checked').value;
          d++;

          let card = document.getElementsByClassName('card');
          if(g>0){
            while(card[0]) {
              card[0].parentNode.removeChild(card[0]);
          }};

          for (var y = 0; y < ((myLibrary.length)); y++) {
            let first = myLibrary[y];
            if(first==undefined){
              y = y + 4;
            }
            let newDiv = document.createElement("div");
            newDiv.classList.add("card");
            flip.appendChild(newDiv);
            
            let newDiv1 = document.createElement("div");
            newDiv1.classList.add("title10");
            newDiv.appendChild(newDiv1);
            newDiv1.innerHTML = "Book Name: " + first;

            y++;
            let second = myLibrary[y];
            let newDiv2 = document.createElement("div");
            newDiv2.classList.add("name10");
            newDiv.appendChild(newDiv2);
            newDiv2.innerHTML =  "Author Name: " + second;

            y++;
            let third = myLibrary[y];
            let newDiv3 = document.createElement("div");
            newDiv.appendChild(newDiv3);
            newDiv3.innerHTML =  "Number of Pages: " + third;
            newDiv3.classList.add("pages10");

            y++;
            let fourth = myLibrary[y];
            let newDiv4 = document.createElement("div");
            if(fourth=="Read"){
              newDiv4.classList.add("wrong10");
            }
            else {
              newDiv4.classList.add("wrong11");
            }
            newDiv.appendChild(newDiv4);
            newDiv4.innerHTML =  fourth;

            let newDiv5 = document.createElement("img");
            newDiv5.classList.add("imge");
            newDiv5.setAttribute('onclick',`handleDelete${i}()`)
            newDiv5.classList.add(`${e}`);
            e++;
            newDiv5.src = "close-box-outline.png";
            newDiv.appendChild(newDiv5);
        }
        i++;
        g++;
        alert(myLibrary)
          });

function handleDelete0(){
  let first = document.querySelector('.flip :nth-child(1)');
  first.remove();   
}

function handleDelete1(){
  let first = document.querySelector('.flip :nth-child(1)');
  first.remove();   
}   

function handleDelete2(){
  let first = document.querySelector('.flip :nth-child(1)');
  first.remove();   
}   

function handleDelete3(){
  let first = document.querySelector('.flip :nth-child(1)');
  first.remove();   
}   

function handleDelete4(){
  let first = document.querySelector('.flip :nth-child(1)');
  first.remove();   
}   

function handleDelete5(){
  let first = document.querySelector('.flip :nth-child(1)');
  first.remove();   
}   

