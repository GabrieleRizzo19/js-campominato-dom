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


function createGrid(difficulty){

    let numberOfSquare = 100;
    grid.style.height = "var(--10x10GridSize)";
    grid.style.width = "var(--10x10GridSize)";

    if(difficulty == "medium"){
        numberOfSquare = 81;
        grid.style.height = "var(--9x9GridSize)";
        grid.style.width = "var(--9x9GridSize)";
    }else if(difficulty == "easy"){
        numberOfSquare = 49;
        grid.style.height = "var(--7x7GridSize)";
        grid.style.width = "var(--7x7GridSize)";
    }
    for( let i=1; i <= numberOfSquare; i++ ){
        const newSquare = document.createElement("div");
        newSquare.classList.add("my-square");
        newSquare.classList.add(difficulty);
        newSquare.innerHTML = i;
        newSquare.addEventListener("click", function(){
            this.classList.toggle("bg-warning");
            console.log(`Hai cliccato il ${i}° quadrato`);
        })
        grid.append(newSquare);
    }

}



