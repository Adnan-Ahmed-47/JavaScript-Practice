// var target = document.querySelectorAll('.key')
// console.log(target[4].textContent)
// console.log(target.textContent)    // Have a doubt in this line


// var body = document.querySelector("body");
// var create = document.createElement('div');
// create.textContent="Created";
// body.append(create)
// console.log(create.textContent)




// create.setAttribute('class', 'cl1')
// create.setAttribute('id', 'id1')

// console.log(create)

// ______________________________________________________________________________________________

// Event Listeners

// let btn = document.querySelector('#btn');   

// btn.addEventListener('click', function (e) {

//     e.target.innerText = "BUTTON CLICKED"
//     // console.log(e.target)
//     // console.log(e.target.innerText)
//     // console.log(e.target.value)
// })

// btn.addEventListener('dblclick', function (e) {

//     // e.target.value = "BUTTON CLICKED"
//     e.target.innerText = "BUTTON CLICKED"
//     // console.log(e.target.value)
//     console.log(e.target.innerText)

//     // console.log("button clicked")
// })

// let movAct

// let box = document.querySelector('.box');
// btn.addEventListener('mouseenter', (e) => {
//     // btn.style.backgroundColor = "red"
//     console.log("mouse entered")
//     // box.setAttribute('id','bx')

//     // console.log(btn.style.backgroundColor)
// })


// btn.addEventListener('mouseleave', (e) => {
//     btn.style.backgroundColor = "black"
//     console.log("mouse leave")
//     // console.log(e)
// })

// btn.addEventListener('mousemove', (e) => {
//     // console.log(e.clientX)
//     // movAct = e.timeStamp
//     console.log("mouse move")
//     // box.style.backgroundColor = "black"
// })



// btn.addEventListener('mouseover', (e) => {
//     // console.log(e.clientX)
//     movAct = e.timeStamp
//     // console.log("mouse over")
//     // box.style.backgroundColor = "black"
// })
// console.log(movAct)


// btn.addEventListener('mouseout', (e) => {
//     // console.log(e.clientX)
//     // movAct = e.timeStamp
    // console.log("mouse out")
//     // btn.style.backgroundColor = "black"
// })


// let username = document.querySelector('input[placeholder=username]')
// let password = document.querySelector('input[placeholder=password]')


// username.addEventListener('input', function(e){
//     console.log(e.target.value)
// })


// username.addEventListener('change', function (e) {
//     console.log(e.target.value)
// })

// username.addEventListener('blur', function (e) {
//     console.log(e)
// })


// username.addEventListener('focus', function (e) {
       
// })



// username.addEventListener('keydown', function (e) {
//     // console.log(e)
//     console.log(e.target.value)
// })


// let inpVal
// username.addEventListener('keyup', function (e) {
//     inpVal = e.target.value
// console.log(inpVal)
// if(inpVal.length<=3){
//     username.style.border = "1px solid red"
// }else if(inpVal.length > 3){
//     username.style.border = "1px solid blue"

// }
// })
 