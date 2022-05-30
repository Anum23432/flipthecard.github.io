const cardArray=[
    {
        name:"ani1",
        img:"./images/ani1.jpg"
    },
    {
        name:"ani2",
        img:"./images/ani2.jpg"
    },
    {
        name:"ani3",
        img:"./images/ani3.jpg"
    },
    {
        name:"ani4",
        img:"./images/ani4.jpg"
    },
    {
        name:"ani5",
        img:"./images/ani5.jpg"
    },
    {
        name:"ani6",
        img:"./images/ani6.jpg"
    },
    {
        name:"ani7",
        img:"./images/ani7.jpg"
    },
    {
        name:"ani8",
        img:"./images/ani8.jpg"
    },
    {
        name:"ani9",
        img:"./images/ani9.jpg"
    },
    {
        name:"ani10",
        img:"./images/ani10.jpg"
    },
    {
        name:"ani11",
        img:"./images/ani11.jpg"
    },
    {
        name:"ani12",
        img:"./images/ani12.jpg"
    },
];

const game = document.getElementById("game");

const grid = document.createElement("section");
grid.classList.add('grid');
game.appendChild(grid);
let gameGrid = cardArray.concat(cardArray);
gameGrid.sort(() => 0.5 - Math.random());
gameGrid.forEach((item) => {
const card = document.createElement("div");
card.classList.add(`card` , `${item.name}`);
card.dataset.name = item.name;
const front= document.createElement("div");
front.classList.add("front");
const back = document.createElement("div");
back.classList.add("back");
back.style.backgroundImage = `url(${item.img})`;
grid.appendChild(card);
card.appendChild(front);
card.appendChild(back);
});

let attemptCount=0;
let attempts = document.querySelector(".count");
attempts.innerText = attemptCount;
var sec = 0;
var timeInSec;
let min=0;
function secCount() {
    sec= sec+1;
    document.querySelector('.sec-count').innerText = Math.floor(sec % 60);
    timeInSec = setTimeout(secCount, 1000);
    min = Math.floor(sec/60);
    document.querySelector(".min-count").innerText = min;

}
var timeStarted = false;


 secCount();  
//  RESET ALL  
 let reset = document.querySelector(".reset");  
 reset.addEventListener("click", () => {  
  let confirmReset = confirm("Whole game will start again. continue to reset?");  
  if (confirmReset === true) {  
   window.location.reload();  
  }   
 });  
 // VARIABLES FOR THE GAME  
 let firstGuess = "";  
 let secondGuess = "";  
 let previousTarget = null;  
 let count = 0;  
 let delay = 1200;  
 // FUNCTIONS FOR THE GAME  
 const match = () => {  
  var selected = document.querySelectorAll(".selected");  
  selected.forEach((card) => {  
   card.classList.add("match");  
  });  
 };  
 const resetGuesses = () => {  
  firstGuess = "";  
  secondGuess = "";  
  count = 0;  
  var selected = document.querySelectorAll(".selected");  
  selected.forEach((card) => {  
   card.classList.remove("selected");  
  });  
 };  
 // GAME LOGICS  
 grid.addEventListener("click", function (event) {  
  !timeStarted && secCount();  
  timeStarted = true;  
  let clicked = event.target;   
  attemptCount++;  
  attempts.innerText = attemptCount;  
  if (  
   clicked.nodeName === "SECTION" ||  
   clicked === previousTarget ||  
   clicked.parentNode.classList.contains("selected")  
  ) {  
   return;  
  }  
  if (count < 2) {  
   count++;  
   if (count === 1) {  
    // Assign first guess  
    firstGuess = clicked.parentNode.dataset.name;  
    clicked.parentNode.classList.add("selected");  
   } else {  
    // Assign second guess  
    secondGuess = clicked.parentNode.dataset.name;  
    clicked.parentNode.classList.add("selected");  
   }  
   // If both guesses are not empty...  
   if (firstGuess !== "" && secondGuess !== "") {  
    // and the first guess matches the second match...  
    if (firstGuess === secondGuess) {  
     // run the match function  
     // match();  
     // resetGuesses();  
     setTimeout(match, delay);  
     setTimeout(resetGuesses, delay);  
     var matched = document.querySelectorAll(`.${firstGuess}`);  
     matched.forEach(node => node.addEventListener('click',function (e) {    
      e.stopPropagation();  
     }))  
    } else {  
     setTimeout(resetGuesses, delay);  
    }  
   }  
  }  
  // Set previous target to clicked  
  previousTarget = clicked;  
 }); 
