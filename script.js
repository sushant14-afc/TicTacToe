let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newGameBtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".result");

let turnO = true; //playerX playerO


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("Box is clicked");
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation Player ${winner} is the winner of this game`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    winPattern.forEach(pattern =>{
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val!= "" && pos3Val!= ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
            
        }
    })
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);