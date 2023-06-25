// const oneSection = document.getElementById("one-sec");
// const btnStartGameIndex = document.getElementById("btnStartGame");
// const input = document.getElementById("input");
// //Section-2 Select
// const gameBox = document.getElementById("gameBox");
// const scoreCount = document.getElementById("scoreCount");
// const playerName = document.getElementById("playerName");
// const gameMain = document.getElementById("game-main");
// const gameZoneBox = document.getElementById("game-zone-box");
// //level select
// const easy = document.getElementById("easy");
// const medium = document.getElementById("medium");
// const hard = document.getElementById("hard");
// //controls btn
// const startGame=document.getElementById("startGame")
// const stopGame=document.getElementById("stopGame")

// let randomColor = [
//   "#FADADD",
//   "#FFE6E6",
//   "#FFD1D1",
//   "#FFC2C2",
//   "#FFB5B5",
//   "#FFA8A8",
//   "#FF9B9B",
//   "#FF8E8E",
//   "#FF8181",
//   "#FF7474",
//   "#FF6767",
//   "#FF5A5A",
//   "#FF4D4D",
//   "#FF4040",
//   "#FF3333",
//   "#FF2626",
//   "#FF1919",
//   "#FF0C0C",
//   "#FF0000",
//   "#FFA07A",
//   "#FF7F50",
//   "#FF6347",
//   "#FF4500",
//   "#FF8C69",
//   "#FF7256",
//   "#FF5733",
//   "#FF4500",
//   "#FFA500",
//   "#FF8C00",
//   "#FF7F00",
// ];
// btnStartGameIndex.addEventListener("click", () => {
//   let inputValue = input.value;

//   localStorage.setItem("user", JSON.stringify(inputValue))
//   let letterLength = inputValue.length;
//   if (letterLength >= 3) {
//     gameMain.style.display = "flex";
//     oneSection.style.display = "none";
//     playerName.innerText = `Player: ${inputValue}`;

//     startGame.addEventListener("click", () => {

//     let newArr = [];
//     let interval;

//     function addBubble() {
//       const randomTop = Math.floor(Math.random() * 360);
//       const randomLeft = Math.floor(Math.random() * 350);

//       let bubble = document.createElement("button");
//       bubble.style.position = "absolute";
//       bubble.style.top = randomTop + "px";
//       bubble.style.left = randomLeft + "px";
//       bubble.style.backgroundColor =
//         randomColor[Math.floor(Math.random() * randomColor.length)];
//       bubble.addEventListener("click", deleteFun);
//       gameZoneBox.appendChild(bubble);

//       newArr.push(bubble);
//       console.log(newArr.length);

//       if (newArr.length >= 5) {
//         clearInterval(interval);

//         let youLose = document.createElement("p");
//         youLose.style.position = "absolute";
//         youLose.style.top = "40%";
//         youLose.style.left = "30%";
//         youLose.style.color = "red";
//         youLose.innerText = "YOU LOST 👿";
//         youLose.style.fontSize = "25px";
//         youLose.style.border = "1px solid white";
//         gameZoneBox.appendChild(youLose);
//       }
//     }

//     interval = setInterval(addBubble, 1000);

//     let count = 0;
//     function deleteFun() {
//       let index = -1;

//       let clickedButton = this;

//       for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] === clickedButton) {
//           index = i;
//           break;
//         }
//       }

//       if (index !== -1) {
//         newArr.splice(index, 1);
//         clickedButton.outerHTML = "";
//       }
//       count++;
//       scoreCount.innerText = `Score: ${count}`;
//     } })
//   } else {
//     document.getElementById("required").innerHTML = "Minimum of three letters";
//     input.style.border = " 1px solid red";
//   }
  
// });


const oneSection = document.getElementById("one-sec");
const btnStartGameIndex = document.getElementById("btnStartGame");
const input = document.getElementById("input");
const highScore1 = document.getElementById("highScore");
//Section-2 Select
const gameBox = document.getElementById("gameBox");
const scoreCount = document.getElementById("scoreCount");
const playerName = document.getElementById("playerName");
const gameMain = document.getElementById("game-main");
const gameZoneBox = document.getElementById("game-zone-box");
//level select
const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
//controls btn
const startGame = document.getElementById("startGame");
const stopGame = document.getElementById("stopGame");

let randomColor = [
  "#FADADD",
  "#FFE6E6",
  "#FFD1D1",
  "#FFC2C2",
  "#FFB5B5",
  "#FFA8A8",
  "#FF9B9B",
  "#FF8E8E",
  "#FF8181",
  "#FF7474",
  "#FF6767",
  "#FF5A5A",
  "#FF4D4D",
  "#FF4040",
  "#FF3333",
  "#FF2626",
  "#FF1919",
  "#FF0C0C",
  "#FF0000",
  "#FFA07A",
  "#FF7F50",
  "#FF6347",
  "#FF4500",
  "#FF8C69",
  "#FF7256",
  "#FF5733",
  "#FF4500",
  "#FFA500",
  "#FF8C00",
  "#FF7F00",
];
let interval;
let newArr = [];
let count = 0;

btnStartGameIndex.addEventListener("click", () => {
  let inputValue = input.value;

  localStorage.setItem("user", JSON.stringify(inputValue));
  let letterLength = inputValue.length;
  if (letterLength >= 3) {
    gameMain.style.display = "flex";
    oneSection.style.display = "none";
    playerName.innerText = `Player: ${inputValue}`;

    startGame.addEventListener("click", startGameHandler);
    stopGame.addEventListener("click", stopGameHandler);
  } else {
    document.getElementById("required").innerHTML = "Minimum of three letters";
    input.style.border = " 1px solid red";
  }
});


let level=2000;
function startGameHandler() {
  startGame.disabled = true;
  stopGame.disabled = false;

  easy.addEventListener("click", function() {
    level = 3000;
  });
  
  medium.addEventListener("click", function() {
    level = 2000;
  });
  
  hard.addEventListener("click", function() {
    level = 1000;
  });

  interval = setInterval(addBubble, level);
}

function addBubble() {
  const randomTop = Math.floor(Math.random() * 360);
  const randomLeft = Math.floor(Math.random() * 350);

  let bubble = document.createElement("button");
  bubble.style.position = "absolute";
  bubble.style.top = randomTop + "px";
  bubble.style.left = randomLeft + "px";
  bubble.style.backgroundColor = randomColor[Math.floor(Math.random() * randomColor.length)];
  bubble.addEventListener("click", deleteFun);
  gameZoneBox.appendChild(bubble);

  newArr.push(bubble);
  console.log(newArr.length);

  if (newArr.length >= 5) {
    clearInterval(interval);

    let youLose = document.createElement("p");
    youLose.style.position = "absolute";
    youLose.style.top = "40%";
    youLose.style.left = "30%";
    youLose.style.color = "red";
    youLose.innerText = "YOU LOST 👿";
    youLose.style.fontSize = "25px";
    youLose.style.border = "1px solid white";
    gameZoneBox.appendChild(youLose);

    let highScore = localStorage.getItem("highScore");
    if (highScore === null || count > highScore) {
      localStorage.setItem("highScore", count);
      highScore1.innerHTML = `High Score: ${count}`;
    }
  }
}

function deleteFun() {
  let index = -1;

  let clickedButton = this;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === clickedButton) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    newArr.splice(index, 1);
    clickedButton.outerHTML = "";
  }
  count++;
  scoreCount.innerText = `Score: ${count}`;
}

function stopGameHandler() {
  startGame.disabled = false;
  stopGame.disabled = true;
  clearInterval(interval);

  gameZoneBox.innerHTML = "";
  newArr = [];
  count = 0;
  scoreCount.innerText = `Score: ${count}`;
}

window.addEventListener("load", () => {
  let highScore = localStorage.getItem("highScore");
  if (highScore !== null) {
    highScore1.innerHTML = `High Score: ${highScore}`;
    console.log(`High Score: ${highScore}`);
  }
});

