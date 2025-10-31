/** @type {HTMLDivElement | null} */

let boxes = document.querySelectorAll(".btn");
let next = document.querySelector(".next");
let reset = document.querySelector(".reset");
let players = document.querySelectorAll(".player");
let symbols = document.querySelectorAll(".symbol");
let player1 = document.querySelector("#name1");
let player2 = document.querySelector("#name2");
let points = document.querySelectorAll(".points");
let note = document.querySelector(".note");

player1.innerText = prompt("enter player1 name: ");
player2.innerText = prompt("enter player2 name: ");

let count1 = 0;
let count2 = 0;
let a =0;
let sym1 = "X";
let sym2 = "O";
let sym = sym1;
players[0].classList.add("win");
symbols[0].classList.add("win");

for(let box of boxes){
  box.addEventListener("click", ()=>{
    if(a===7) return;
    box.innerText= sym;
    box.disabled = true;
    if(sym === sym1){
      sym = sym2;
      players[1].classList.add("win");
      symbols[1].classList.add("win");
      players[0].classList.remove("win");
      symbols[0].classList.remove("win");
    }else{
      sym = sym1;
      players[0].classList.add("win");
      symbols[0].classList.add("win");
      players[1].classList.remove("win");
      symbols[1].classList.remove("win");
    }
    checkWinner();
  });
}

let possibilities= [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
const checkWinner = ()=>{
  for(possible of possibilities){
    let val1 = boxes[possible[0]].innerText;
    let val2 = boxes[possible[1]].innerText;
    let val3 = boxes[possible[2]].innerText;

    if(val1 !== "" && val1 === val2 && val2 === val3){
      boxes[possible[0]].classList.add("win");
      boxes[possible[1]].classList.add("win");
      boxes[possible[2]].classList.add("win");
      next.disabled=false;
      note.remove();
      next.classList.add("win2");
      next.innerText= "Next Round";
      a = 7;
      if(val1 === "X"){
        players[0].classList.add("win");
        symbols[0].classList.add("win");
        players[1].classList.remove("win");
        symbols[1].classList.remove("win");
        count1++;
        points[0].innerText= count1;
      }
      if(val1 === "O"){
        players[1].classList.add("win");
        symbols[1].classList.add("win");
        players[0].classList.remove("win");
        symbols[0].classList.remove("win");
        count2++;
        points[1].innerText= count2;
      }
    }
  }
}

next.addEventListener("click", ()=>{
  next.innerText= "Retry";
  for(let box of boxes){
    box.innerText= "";
    box.classList.remove("win");
    box.disabled= false;
  }
  a = 0;
  players[0].classList.add("win");
  players[1].classList.remove("win");
  sym = sym1;
});

reset.addEventListener("click", ()=>{
  for(let box of boxes){
    box.innerText= "";
    box.classList.remove("win");
    box.disabled= false;
  }
  a = 0;
  players[0].classList.add("win");
  players[1].classList.remove("win");
  sym = sym1;
  points[0].innerText= 0;
  points[1].innerText= 0;
  player1.innerText = "";
  player2.innerText = "";
  player1.innerText = prompt("enter player1 name: ");
  player2.innerText = prompt("enter player2 name: ");
  count1 =0;
  count2 =0;
});