const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(e) {
//     console.log("CHANGE")
// });
//change only triggers when you leave the input
input.addEventListener('input', function(e) {
    // console.log("INPUT!");
    h1.innerText = input.value
    // console.log(e)
})
//input event triggers as soon as change is made