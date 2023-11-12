// var - funtion scope
// let,const - block scope
// Lexical Environment
// DOM
// 
// debugger
// console.log(z)
// console.log(a)
// let z =10;
// var a = 10;


// if(true){
//     var b =20
//     let c = 30
//     let f = 30
// }
// b=30
// function f1(){
//     var e = 20
//     let g = 30
//     const k = 12
// }

// console.log(b)

// console.log(g)
// console.log(k)
// console.log(f)

// let a =10 
// function f1(){
//     console.log(b)
//     var b =10
//     f2()
//     function f2(){
//         console.log(a)
//         console.log(b)
//     }
// }

// f1()
// var i =10 
// for(var i = 0; i <=4;i++){

// }

// console.log(i)


// function clsr(){
// var a = 10;
// function fn(){
//     console.log(a)
// }
// }
// console.log(a) //10
// {
//     name: "clsr",
//     getfullname: function(){}
// }
// person.getfullname()
// var div = document.getElementsByClassName('cls')
// console.log(div)
// let text = "text"
// div[1].innerHTML = `<i>${text}</i>`
// div[0].innerHTML = `<i>${text}</i>`


// ________________________DOM EXERCISE__________________________________________________________________

// var para1 = document.querySelector('p')
// console.log(para1.textContent)

// -----------------------------------------------------------------------------------

// var paraId1 = document.querySelector('#p1')
// var paraId2 = document.querySelector('#p2')
// var paraId3 = document.querySelector('#p3')
// var paraId4 = document.querySelector('#p4')

// console.log(paraId1.textContent)
// console.log(paraId2.textContent)
// console.log(paraId3.textContent)
// console.log(paraId4.textContent)

// -----------------------------------------------------------------------------------

// var paraAll = document.querySelectorAll('p')

// console.log(paraAll)                 // displays the whole node list including tags&ids but not content.

// console.log(paraAll[0].textContent)  // displays the 0th index content
// console.log(paraAll[0])              // displays the 0th index's tag&id.

// Another method by me
// for(var i=0; i<=paraAll.length-1; i++){
//     console.log(paraAll[i].textContent)
// }

// -----------------------------------------------------------------------------------

// var para4 = document.querySelector('#p4')
// para4.textContent = "Hello World"
// console.log(para4.textContent)

// -----------------------------------------------------------------------------------

// var paraAll = document.querySelectorAll('p')

// paraAll[0].setAttribute("class","cl1")
// paraAll[1].setAttribute("class","cl2")
// paraAll[2].setAttribute("class","cl3")
// paraAll[3].setAttribute("class","cl4")
// console.log(paraAll)

// paraAll[0].setAttribute("id","one")
// paraAll[1].setAttribute("id","two")
// paraAll[2].setAttribute("id","three")
// paraAll[3].setAttribute("id","four")
// console.log(paraAll)

// console.log(paraAll[0])

// -----------------------------------------------------------------------------------

// var paraStyle = document.querySelectorAll('p')
// paraStyle.style.color = "red"
// console.log(paraStyle)

// var para1 = document.querySelector('#p1')
// para1.style.color = "white";
// para1.style.backgroundColor = "brown";
// para1.style.border = "2px solid black";
// para1.style.fontSize = "30px";
// para1.style.fontFamily = "Helvetica";
// console.log(para1)

// var para2 = document.querySelector('#p2')
// para2.style.color = "white";
// para2.style.backgroundColor = "red";
// para2.style.border = "2px solid black";
// para2.style.fontSize = "30px";
// para2.style.fontFamily = "Helvetica";
// console.log(para2)

// var para3 = document.querySelector('#p3')
// para3.style.color = "white";
// para3.style.backgroundColor = "blue";
// para3.style.border = "2px solid black";
// para3.style.fontSize = "30px";
// para3.style.fontFamily = "Helvetica";
// console.log(para3)

// var para4 = document.querySelector('#p4')
// para4.style.color = "white";
// para4.style.backgroundColor = "green";
// para4.style.border = "2px solid black";
// para4.style.fontSize = "30px";
// para4.style.fontFamily = "Helvetica";
// console.log(para4)

// -----------------------------------------------------------------------------------
// done this problem by 2 methods

var head = document.querySelector('h1')

// var isTrue = true;

var arr = ['red', 'green', 'blue', 'black']
var i = 0;

var set = setInterval(() => {
        // if(isTrue == true){
        //     head.style.color = "red";
        //     isTrue = false
        // }
        // else{
        //     head.style.color = "green"
        //     isTrue =true
        // }
        // console.log("2 sec")
    //-----------------------------------------------
        head.style.backgroundColor = arr[i]
        i++
        if(i==arr.length){
            i=0;
        }

}, 2000);

// console.log(setInterval())
console.log(set)

