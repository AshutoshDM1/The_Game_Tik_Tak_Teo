let boxes = document.querySelectorAll(".box");
let winner =document.querySelector(".winner");
let winnerText =document.querySelector(".winnerText");
let resetBtn =document.querySelector(".resetBtn");
let restartBtn =document.querySelector(".restartBtn");
let restartBtnDiv =document.querySelector(".restartBtnDiv");


// for(i=0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", (click) => {
//         click = boxes[i].classList.add("print"); 
//     })
// }


let turn = true; // true means X turn
let count = 0; //for checking darw


//for making buttons clickable for x and o turns;    
boxes.forEach ( (box) => {
    box.addEventListener("click", () => {
        if ( turn === true) {
            box.classList.add("printx");
            box.innerText= "x";
            box.classList.add("x");
            turn = false;
        }
        else { 
            box.classList.add("printo");
            box.innerText= "o";
            box.classList.add("o");
            turn = true
        }
        box.disabled = true;//so that box cant be clicked again
        count++;
        checkWinner();
        draw();
        
          
    })
})

//for checking winner for game
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

//winner fucntion 
const checkWinner= () => {

    for ( let pattern of winPattern ) {

        let text1 = boxes[pattern[0]].innerText;
        let text2 = boxes[pattern[1]].innerText;
        let text3 = boxes[pattern[2]].innerText;
    
        if (text1 != "" && text2 != ""  && text3 != "" ){
            if (text1 === text2 && text2 === text3){
                displayWinner(text1);
            }
        }
    }
};

//for displaying the winner name 
const displayWinner = (win) => {
    winner.classList.remove("hide");
    winnerText.classList.remove("hide");
    restartBtn.classList.remove("hide");
    restartBtnDiv.classList.remove("hide");
    winnerText.innerText = `Winner is ${win}`;
    disableBox();
    count=0;
    
}

//if Game is draw 
function draw() {
    if (count === 9){
        disableBox();
        winner.classList.remove("hide");
        winnerText.classList.remove("hide");
        restartBtn.classList.remove("hide");
        restartBtnDiv.classList.remove("hide");
        winnerText.innerText = `Your Game is Draw`;
        count=0;

    }

}

//restart btn for the winner and draw page
function RestartBtn() {
    enableBox();
    for (box of boxes) {
    box.classList.remove("printx");
    box.classList.remove("x");
    box.classList.remove("printo");
    box.classList.remove("o");
    box.innerText= "";
    turn = true; 
    winner.classList.add("hide");
    }


}

//reset btn for using during the game
const ResetBtn = () => {
    enableBox();
    for (box of boxes) {
    box.classList.remove("printx");
    box.classList.remove("x");
    box.classList.remove("printo");
    box.classList.remove("o");
    box.innerText= "";
    turn = true; 
    winner.classList.add("hide");
   }
}    


function enableBox() {
    for (let box of boxes) { 
        box.disabled = false ;
    }
}

function disableBox() {
    for (let box of boxes) { 
        box.disabled = true ;
    }
}
resetBtn.addEventListener("click",ResetBtn);
restartBtn.addEventListener("click",RestartBtn);