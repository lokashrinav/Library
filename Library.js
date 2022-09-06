let flip = document.querySelector(".flip");
let currentDiv = document.getElementById("div1");
let i = 0;
let gh = "0";
let d = 0;
let myLibrary = [];
let pop = document.querySelector('.popup');
let imge = document.querySelectorAll(".imge");
let g = 0;
let e = 0;
let p = 0;


document.getElementsByClassName('center')[0]
        .addEventListener('click', function (event) {
          pop.classList.remove("popup");
          pop.classList.add("popup-open");
        });
let v = 0;
    
//Image 1 has to delete div1

//handleDelete(`${i}`)
// -3 WORKS FOR 4 DIVS
// -2 WORKS FOR 3 DIVS
// -1 WORKS FOR 2 DIVS
//  0 WORKS FOR 1 DIV
//  let fork = index - ((po - 1));
//myLibrary.splice(fork, 4);
/*function handleDelete(index) {
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
        }*/

//What determines i?


document.getElementsByClassName('enter')[0]
        .addEventListener('click', function (event) {
          pop.classList.remove("popup-open");
          pop.classList.add("popup");
          let first = document.getElementById("hi1").value;
          let second = document.getElementById("hi2").value;
          let third = document.getElementById("hi3").value;
          let fourth = document.querySelector('input[name="action"]:checked').value;
            let newDiv = document.createElement("div");
            newDiv.classList.add("card");
            flip.appendChild(newDiv);
            
            let newDiv1 = document.createElement("div");
            newDiv1.classList.add("title10");
            newDiv.appendChild(newDiv1);
            newDiv1.innerHTML = "Book Name: " + first;

            let newDiv2 = document.createElement("div");
            newDiv2.classList.add("name10");
            newDiv.appendChild(newDiv2);
            newDiv2.innerHTML =  "Author Name: " + second;

            let newDiv3 = document.createElement("div");
            newDiv.appendChild(newDiv3);
            newDiv3.innerHTML =  "Number of Pages: " + third;
            newDiv3.classList.add("pages10");

            let newDiv4 = document.createElement("div");

            if(fourth=="Read"){
              newDiv4.classList.add("wrong10");
            }
            else {
              newDiv4.classList.add("wrong11");
            }
            newDiv.appendChild(newDiv4);
            newDiv4.setAttribute('onclick',`reverse${i}()`)
            newDiv4.innerHTML =  fourth;
            let newDiv5 = document.createElement("img");
            newDiv5.classList.add("imge");
            newDiv5.setAttribute('onclick',`handleDelete${i}()`)
            newDiv5.classList.add(`${e}`);
            e++;
            newDiv5.src = "close-box-outline.png";
            newDiv.appendChild(newDiv5);
            i++;
            g++;
          });

        /*this[`handleDelete${p}`]= ()=> {   
          v=0;
          let first = document.getElementsByClassName("card")[p];
          first.remove();
          let flip = document.getElementsByClassName('flip');
          var c = flip[0].childElementCount;
          while(v<c) {
            first = document.getElementsByClassName("card")[v];
            let second = first.lastChild;
            second.setAttribute('onclick',`handleDelete${v}()`)
            v++;
          }*/
          
let up = 0;
function reverse0(){
  up=0;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }}

function reverse1(){
  up=1;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse2(){
  up=2;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse3(){
  up=3;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse4(){
  up=4;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse5(){
  up=5;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse6(){
  up=6;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse7(){
  up=7;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse8(){
  up=8;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse9(){
  up=9;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse10(){
  up=10;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse11(){
  up=11;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse12(){
  up=12;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse13(){
  up=13;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse14(){
  up=14;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse15(){
  up=15;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse16(){
  up=16;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse17(){
  up=17;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse18(){
  up=18;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse19(){
  up=19;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}

function reverse20(){
  up=19;
  let first = document.getElementsByClassName("card")[up];
  let second = first.lastChild.previousElementSibling;
  if(second.classList.contains('wrong10')){
    second.removeAttribute('class', 'wrong10')
    second.setAttribute('class', 'wrong11')
    second.innerHTML = "Not Read";
  }
  else if(second.classList.contains('wrong11')){
    second.removeAttribute('class', 'wrong11')
    second.setAttribute('class', 'wrong10')
    second.innerHTML = "Read";
  }
}
function handleDelete0(){
  p=0;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete1(){
  p=1;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}   

function handleDelete2(){
  p=2;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}   

function handleDelete3(){
  p=3;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete4(){
  p=4;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete5(){
  p=5;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete6(){
  p=6;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete7(){
  p=7;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete8(){
  p=8;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete9(){
  p=9;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete10(){
  p=10;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete11(){
  p=11;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete12(){
  p=12;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete13(){
  p=13;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete14(){
  p=14;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete14(){
  p=14;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete15(){
  p=15;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete16(){
  p=16;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete17(){
  p=17;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete18(){
  p=18;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete19(){
  p=19;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete20(){
  p=20;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete21(){
  p=21;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete22(){
  p=22;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete23(){
  p=23;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete24(){
  p=24;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}
function handleDelete25(){
  p=25;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete26(){
  p=26;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete27(){
  p=27;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete28(){
  p=28;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete29(){
  p=29;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete30(){
  p=30;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete31(){
  p=31;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete32(){
  p=32;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete33(){
  p=33;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete34(){
  p=34;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete35(){
  p=35;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete36(){
  p=36;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete37(){
  p=37;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete38(){
  p=38;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete39(){
  p=39;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete40(){
  p=40;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete41(){
  p=41;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete42(){
  p=42;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete43(){
  p=43;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete44(){
  p=44;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete45(){
  p=45;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete46(){
  p=46;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete47(){
  p=47;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete48(){
  p=48;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete49(){
  p=49;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete50(){
  p=50;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete51(){
  p=51;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete52(){
  p=52;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete53(){
  p=53;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete54(){
  p=54;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete55(){
  p=55;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete56(){
  p=56;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete57(){
  p=57;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete58(){
  p=58;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete59(){
  p=59;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete60(){
  p=60;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete61(){
  p=61;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete62(){
  p=62;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete63(){
  p=63;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete64(){
  p=64;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete65(){
  p=65;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete66(){
  p=66;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

function handleDelete67(){
  p=67;
  v=0;
  let first = document.getElementsByClassName("card")[p];
  first.remove();
  let flip = document.getElementsByClassName('flip');
  var c = flip[0].childElementCount;
  while(v<c) {
    first = document.getElementsByClassName("card")[v];
    let second = first.lastChild;
    second.setAttribute('onclick',`handleDelete${v}()`)
    v++;
  }
}

