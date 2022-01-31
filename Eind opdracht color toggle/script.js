


let dropdown = document.querySelector('.dropdown')
let buttonRed = document.querySelector('.colorRed')
let buttonGreen = document.querySelector('.colorGreen')
let buttonYellow = document.querySelector('.colorYellow')
let buttonBlue = document.querySelector('.colorBlue')

dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
    dropdown.classList.add('closed')    
  }  
})

buttonRed.addEventListener("click", changeToColorRed);
buttonGreen.addEventListener("click", changeColorToGreen);
buttonYellow.addEventListener('click', changeColorToYellow);
buttonBlue.addEventListener('click', changeColorToBlue);

function changeToColorRed() {
    document.body.style.backgroundColor = "red";
}
function changeColorToGreen() {
    document.body.style.backgroundColor = "green";
}
function changeColorToYellow() {
    document.body.style.backgroundColor = "yellow";
}
function changeColorToBlue() {
    document.body.style.backgroundColor = "blue";
}