const grid = document.getElementById("my-grid");
const playButton = document.getElementById("play-button");
const difficultySelector = document.getElementById("difficulty");
const messageClickToPlay = document.getElementById("message-click-to-play");
const endgameMessage = document.getElementById("endgame-message");

// createGrid();

playButton.addEventListener("click", function(){

    endgameMessage.innerHTML = "";
    messageClickToPlay.classList.add("d-none");
    grid.innerHTML = "";
    let difficulty = difficultySelector.value;

    createGrid(difficulty);

})

// let randomNumber = get16RandomNumber(1,49);
// console.log(randomNumber);
