


let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (e) => {
  if (dropdown.classList.contains('closed')) {
    dropdown.classList.remove('closed')
  } else {
    dropdown.classList.add('closed')    
  }
})

function myfunction() {
    document.body.style.backgroundColor = "red";
}
function myfunction1() {
    document.body.style.backgroundColor = "green";
}
function myfunction2() {
    document.body.style.backgroundColor = "Yellow";
}
function myfunction3() {
    document.body.style.backgroundColor = "blue";
}