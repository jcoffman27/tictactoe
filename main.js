//Store the gameboard as an array inside a gameboard object
let gameBoard = {
    board: ["","","",
            "","","",
            "","",""],

}
//Keep the two types of players stored in an object
let players ={
    player1: "X",
    player2: "O",
}

//Keep track of turns
let turn = null;

//Get boxes responding to clicks
let box0 = document.getElementById("box0");
gameBoard.board[0] = box0;
let box1 = document.getElementById("box1");
gameBoard.board[1] = box1;
let box2 = document.getElementById("box2");
gameBoard.board[2] = box2;
let box3 = document.getElementById("box3");
gameBoard.board[3] = box3;
let box4 = document.getElementById("box4");
gameBoard.board[4] = box4;
let box5 = document.getElementById("box5");
gameBoard.board[5] = box5;
let box6 = document.getElementById("box6");
gameBoard.board[6] = box6;
let box7 = document.getElementById("box7");
gameBoard.board[7] = box7;
let box8 = document.getElementById("box8");
gameBoard.board[8] = box8;

//Switch turns on each click while also allowing players to set pieces
box0.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box1.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box2.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box3.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box4.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box5.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box6.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box7.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})
box8.addEventListener("click", function(){
    if (turn % 2 === 0){
        this.textContent = players.player1;
        turn++
    } else{
        this.textContent = players.player2;
        turn++
    }
})




//Have an object control the flow of the game itself
//have a function that allows players to set pieces that runs on click in whatever div
//Have a function that will render the contents of the gameboard array to the webpage/HTML

/**let gamePlay = {
    playerSetPiece: function(){
        
    },
}


//Tuck everything inside a module or factory - if you need only one of something use a module, if need multiples of something like players use a factory.
//Create functions that allow players to add marks to a specific spot on the board and get it tied to the DOM, allowing players to click to place a marker, ensure logic is there to prevent players from playing in taken spots.
//Build the logic that checks for 3 in a row
//Build the logic that checks for a tie game





//Allow players to put in their names
//Create a start button to begin the game
//Add play again button that resets the game.
//Create display element that congratulates the winner

**/