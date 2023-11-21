let togBox = document.querySelector('.box')
let togCir = document.querySelector('#circle')
let body = document.querySelector('body')
// let heading = document.querySelector('h1')


togCir.onclick = function(e){
    if(e){
        togBox.style.backgroundColor = "white";
        togCir.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        
    }
}
// togCir.addEventListener('click', function(e){
//     // console.log(e.target.value)
//     togBox.style.backgroundColor = "white";
//     togCir.style.backgroundColor = "black";
//     body.style.backgroundColor = "black";
//     body.style.color = "white";

// })