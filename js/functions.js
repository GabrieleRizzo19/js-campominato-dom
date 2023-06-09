function createGrid(difficulty){

    let points = 0;
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

    let sixteenRandomNumber = get16RandomNumber(1, numberOfSquare);
    console.log(sixteenRandomNumber);
    for( let i=1; i <= numberOfSquare; i++ ){
        const newSquare = document.createElement("div");
        newSquare.classList.add("my-square");
        newSquare.classList.add(difficulty);
        newSquare.innerHTML = i;
        
        newSquare.addEventListener("click", checkIfBomb);
        grid.append(newSquare);

    }

    function checkIfBomb(){
        if(sixteenRandomNumber.includes(parseInt(this.innerHTML))){
            this.classList.add("bg-danger");
            let removeEvent = document.querySelectorAll(".my-square");
            // console.log(removeEvent);
            for(let c=0; c < removeEvent.length; c++){
                removeEvent[c].removeEventListener("click", checkIfBomb);
                if(sixteenRandomNumber.includes(parseInt(removeEvent[c].innerHTML))){
                    removeEvent[c].classList.add("bg-danger");
                }
            }
            if(points == (numberOfSquare - 16)){
                endgameMessage.innerHTML = `Complimenti, HAI VINTO!!!`;                
            }else{
                endgameMessage.innerHTML = `GAME OVER! Hai ottenuto ${points} punti`
            }
        }else{
            this.classList.add("bg-primary");
            this.removeEventListener("click", checkIfBomb);
            points++;
            if(points == (numberOfSquare - 16)){
                endgameMessage.innerHTML = `Complimenti, HAI VINTO!!!`;
                let removeEvent = document.querySelectorAll(".my-square");
                // console.log(removeEvent);
                for(let c=0; c < removeEvent.length; c++){
                    removeEvent[c].removeEventListener("click", checkIfBomb);
                }                
            }
        }
        console.log(`Hai cliccato il ${this.innerHTML}° quadrato`);
    }

    
}



// function checkIfExistsNumberInArray(number, array){

//     let check = false;
//     for( let i=0; i < array.length; i++){
//         if(number == array[i]){
//             check = true;
//         }
//     }

//     return check;
// }

function get16RandomNumber(min, max){
    let array = [];
    let num;
    let pushed = false;
    for( let i=0; i < 16; i++){
        pushed = false;
        while(pushed == false){
            num = Math.floor(Math.random() * (max - min + 1) ) + min;
            // if(!checkIfExistsNumberInArray(num, array)){
            //     array.push(num);
            //     pushed = true;
            // }
            if(!(array.includes(num))){
                array.push(num);
                pushed = true;
            }
        }
        
    }
    return array;
}

