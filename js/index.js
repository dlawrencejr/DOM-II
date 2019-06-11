// Your code goes here
let navMouse = document.querySelector('.nav');
// console.log(navMouse);
navMouse.addEventListener('mouseover', (event) => {
    event.target.style.color = "blue";
    setTimeout(function() {
        event.target.style.color = "";
      }, 200);
    }, false);


