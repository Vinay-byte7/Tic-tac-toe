// getting elements
let boxes = document.querySelectorAll(".btn");
let newgame = document.querySelector(".newgame");
let retry = document.querySelector(".retry");
let names = document.querySelectorAll(".name");
let points1 = document.querySelector(".point1");
let points2 = document.querySelector(".point2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

// writing initial conditions
names[0].innerText = prompt("enter player1 name: ");
names[1].innerText = prompt("enter player2 name: ");
let sym1 = "X";
let sym2 = "O";
let num = Math.floor(Math.random() * 2);
console.log(num);
let player1points = 0;
let player2points = 0;
let sym;
let initialsym;
if (num === 0) {
  sym = sym1;
  initialsym = sym;
  player1.classList.add("turn");
} else {
  sym = sym2;
  initialsym = sym;
  player2.classList.add("turn");
}
let winfound = false;

// select buttons and game mechanism
for (let box of boxes) {
  box.addEventListener("click", () => {
    box.innerText = sym;
    box.disabled = true;
    if (sym === sym1) {
      sym = sym2;
      player1.classList.remove("turn");
      player2.classList.add("turn");
    } else {
      sym = sym1;
      player1.classList.add("turn");
      player2.classList.remove("turn");
    }
    checkWinner();
  });
}
// checking winner
let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWinner = () => {
  for (let condition of win) {
    let val1 = boxes[condition[0]].innerText;
    let val2 = boxes[condition[1]].innerText;
    let val3 = boxes[condition[2]].innerText;

    if (val1 === val2 && val1 === val3 && val1 !== "") {
      winfound = true;
      for (let idx of condition) {
        boxes[idx].classList.add("win-btn");
      }
      for (let box of boxes) {
        box.disabled = true;
        retry.innerText = "Next Round";
        retry.classList.add("win-btn");
      }
      if (val1 === sym1) {
        player1points += 1;
        player1.classList.add("turn");
        player2.classList.remove("turn");
        points1.innerText = player1points;
        points2.innerText = player2points;
      } else {
        player2points += 1;
        player2.classList.add("turn");
        player1.classList.remove("turn");
        points1.innerText = player1points;
        points2.innerText = player2points;
      }
    }
  }
};

// writing retry or new game
let retrybtn = () => {
  if (retry.innerText === "Retry") {
    winfound = false;
    for (let box of boxes) {
      box.classList.remove("win-btn");
      box.innerText = "";
      box.disabled = false;
    }
    sym = initialsym;
    if (sym === "X") {
      player1.classList.add("turn");
      player2.classList.remove("turn");
    } else {
      player2.classList.add("turn");
      player1.classList.remove("turn");
    }
  } else {
    retry.classList.remove("win-btn");
    retry.innerText = "Retry";
    winfound = false;
    for (let box of boxes) {
      box.classList.remove("win-btn");
      box.innerText = "";
      box.disabled = false;
    }
    player1.classList.remove("turn");
    player2.classList.remove("turn");
    num = Math.floor(Math.random() * 2);
    console.log(num);
    if (num === 0) {
      sym = sym1;
      initialsym = sym;
      player1.classList.add("turn");
    } else {
      sym = sym2;
      initialsym = sym;
      player2.classList.add("turn");
    }
  }
};

retry.addEventListener("click", () => {
  retrybtn();
});

// wirting new game mechanism
newgame.addEventListener("click", () => {
  num = Math.floor(Math.random() * 2);
  console.log(num);
  player1points = 0;
  player2points = 0;
  winfound = false;
  points1.innerText = 0;
  points2.innerText = 0;
  for (let box of boxes) {
    box.classList.remove("win-btn");
    box.innerText = "";
    box.disabled = false;
  }
  player1.classList.remove("turn");
  player2.classList.remove("turn");
  if (num === 0) {
    sym = sym1;
    initialsym = sym;
    player1.classList.add("turn");
  } else {
    sym = sym2;
    initialsym = sym;
    player2.classList.add("turn");
  }
});
