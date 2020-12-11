//Store the gameboard as an array inside a gameboard object
let gameBoard = {
            //0,1,2
            //3,4,5
            //6,7,8
    board: ["","","",
            "","","",
            "","",""],

}



//
//
/** 
let winningCombination = [
                        [gameBoard.board[0],[1],[2]],
                        gameBoard.board[[0],[3],[6]],
                        gameBoard.board[[0],[4],[8]],
                        gameBoard.board[[1],[4],[7]],
                        gameBoard.board[[2],[5],[8]],
                        gameBoard.board[[2],[4],[6]],
                        gameBoard.board[[3],[4],[5]],
                        gameBoard.board[[6],[7],[8]]
                        ];
*/

    /**[
                        [gameBoard.board[0],gameBoard.board[1],gameBoard.board[2]],
                        [gameBoard.board[0],gameBoard.board[3],gameBoard.board[6]],
                        [gameBoard.board[0],gameBoard.board[4],gameBoard.board[8]],
                        [gameBoard.board[1],gameBoard.board[4],gameBoard.board[7]],
                        [gameBoard.board[2],gameBoard.board[5],gameBoard.board[8]],
                        [gameBoard.board[2],gameBoard.board[4],gameBoard.board[6]],
                        [gameBoard.board[3],gameBoard.board[4],gameBoard.board[5]],
                        [gameBoard.board[6],gameBoard.board[7],gameBoard.board[8]]
                        ]; */

//how do i get my multidimensional array to take in values X or O
//everytime I click on a box board[i] gets filled with an X or O
//if (winningCombination[i][j] = "XXX"){
    //console.log("player one wins");
    //} else if (winningCombination[i][j] )
    //


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
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
    console.log(gameBoard.board[0].innerText);
    
    
})
box1.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
    console.log(gameBoard.board[1].innerText);
})
box2.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
    console.log(gameBoard.board[2].innerText);
    console.log(gameBoard.board[0].innerText + gameBoard.board[1].innerText + gameBoard.board[2].innerText);
})
box3.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
})
box4.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
})
box5.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
})
box6.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
})
box7.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }
})
box8.addEventListener("click", function(){
    if ((turn % 2 === 0) && (this.textContent == 0)){
        this.textContent = players.player1;
        turn++
    } else if((turn % 2 === 1) && (this.textContent == 0)){
        this.textContent = players.player2;
        turn++;
    } else {
        alert("try another spot");
    }

})

//Have an object control the flow of the game itself
//have a function that allows players to set pieces that runs on click in whatever div
//Have a function that will render the contents of the gameboard array to the webpage/HTML
//Tuck everything inside a module or factory - if you need only one of something use a module, if need multiples of something like players use a factory.
//Create functions that allow players to add marks to a specific spot on the board and get it tied to the DOM, allowing players to click to place a marker, ensure logic is there to prevent players from playing in taken spots.
//Build the logic that checks for 3 in a row
//Build the logic that checks for a tie game





//Allow players to put in their names
//Create a start button to begin the game
//Add play again button that resets the game.
//Create display element that congratulates the winner
