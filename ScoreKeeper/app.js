const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Total')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Total')
}


// const playerOne = document.querySelector('#p1Button');
// const playerTwo = document.querySelector('#p2Button');

// const p1Total = document.querySelector('#p1Total');
// const p2Total = document.querySelector('#p2Total');

const resetButton = document.querySelector('#reset');
const goal = document.querySelector('#goal');

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
let gameOver = false;

function updateScores(player, opponent){
    if(!gameOver) {
        player.score += 1;
        if(player.score === winningScore){
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        } 
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function(){
    updateScores(p1, p2)
});
p2.button.addEventListener('click', function(){
    updateScores(p2, p1)
});

resetButton.addEventListener('click', reset);

goal.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset(){
    gameOver = false;
    for(let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}
