const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log("You clicked me!")
    console.log("Does it work?")
}

function scream(){
    console.log("AAAAAAAAAHHHHH");
    console.log("Stop touching me!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function() {
    alert('you clicked the h1, not the button')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('dblclick', function() {
    alert("Double Clicked!")
});

function twist() {
    console.log("Twist")
}
function shout() {
    console.log("Shout")
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout);
