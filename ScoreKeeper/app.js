const playerOne = document.querySelector('#p1Button');
const playerTwo = document.querySelector('#p2Button');

const p1Total = document.querySelector('#p1Total');
const p2Total = document.querySelector('#p2Total');

const reset = document.querySelector('#reset');

const goal = document.querySelector('#goal');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;


playerOne.addEventListener('click', function(){
    if(!gameOver) {
        p1Score += 1;
        if(p1Score === winningScore){
            gameOver = true
        } 
        p1Total.textContent = p1Score;
    }
});
playerTwo.addEventListener('click', function(){
    if(!gameOver) {
        p2Score += 1;
        if(p2Score === winningScore){
            gameOver = true
        } 
        p2Total.textContent = p2Score;
    }
});

reset.addEventListener('click', reset);

goal.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Total.textContent = 0;
    p2Total.textContent = 0;
}
