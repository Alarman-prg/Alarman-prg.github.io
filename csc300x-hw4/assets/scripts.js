let playerChoice;
let computerChoice;
let result = document.getElementById('winnerResult');

let imgs = document.querySelectorAll('img.player');

for (let index = 0; index < imgs.length; index++) {
    const element = imgs[index];
    element.addEventListener('click', addBorders);
}
function addBorders() {
    const myImg = event.currentTarget;
    playerChoice = myImg.id;
    myImg.style.border = "5px solid black";
}

let comp = document.getElementById('computerResult');
comp.addEventListener('click', shuffle);

function shuffle() {
    const myImg = event.currentTarget;
    myImg.src = "assets/imgs/rock.PNG";
    setTimeout(() => { myImg.src = "assets/imgs/paper.PNG" }, 3000);
    setTimeout(() => { myImg.src = "assets/imgs/scissors.PNG" }, 6000);
    setTimeout(() => { myImg.src = "assets/imgs/paper.PNG" }, 9000);
    setTimeout(() => { computerChoice = myImg.src }, 9000);
    setTimeout(() => { decide() }, 9000);
}

function decide() {
    if (playerChoice === 'rockSelect') {
        result.append("Lose");
    } else if (playerChoice === 'paperSelect') {
        result.append("Tie");
    } else if (playerChoice === 'scissorsSelect') {
        result.append("WIN");
    }
}