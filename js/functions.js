function checkIfExistsNumberInArray(number, array){

    let check = false;
    for( let i=0; i < array.length; i++){
        if(number == array[i]){
            check = true;
        }
    }

    return check;
}

function get16RandomNumber(min, max){
    let array = [];
    let num; 
    for( let i=0; i < 16; i++){
        num = Math.floor(Math.random() * (max - min + 1) ) + min;
        for( let c = 0; c < array.length; c++){
            if(!checkIfExistsNumberInArray){
                array.push(num);
            }
        }
        array.push(num);
    }
    return array;
}

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
            this.classList.toggle("bg-primary");
            console.log(`Hai cliccato il ${i}° quadrato`);
        })
        grid.append(newSquare);
    }

}