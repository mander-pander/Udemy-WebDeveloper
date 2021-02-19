//document.getElementById("adlfjsldkjf");
//document.getElementsByTagName('sadlkjfsdf');
//document.getElementsByClassName('alsdkfjsladf);

// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     console.log(img.src)
// }

// const squareImages = document.getElementsByClassName('square');

// for(let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
// }

//querySelector: newer all-in-one method to select a single element
// document.querySelector('a[title="Java]')

//querySelectorAll: same idea, but returns a collection of matching elements
// document.querySelectorAll('p')

const links = document.querySelectorAll('p a');
for(let link of links) {
    console.log(link.href);
}