const grid = document.getElementById("my-grid");
const playButton = document.getElementById("play-button");
const difficultySelector = document.getElementById("difficulty");
const messageClickToPlay = document.getElementById("message-click-to-play");

// createGrid();

playButton.addEventListener("click", function(){

    messageClickToPlay.classList.add("d-none");
    grid.innerHTML = "";
    let difficulty = difficultySelector.value;

    createGrid(difficulty);

})


