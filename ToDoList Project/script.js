// let title = document.querySelector('input[placeholder="title"]')
// let desc = document.querySelector('input[placeholder="desc"]')
// let btn = document.querySelector('#btn')
// let div = document.querySelector('div')

// let listVals = []

// let titleVal
// let descVal


// title.addEventListener("keyup", function (e) {
//     titleVal = e.target.value
//     console.log(titleVal)
// })

// desc.addEventListener("keyup", function (e) {
//     descVal = e.target.value
//     console.log(descVal)
// })

// btn.addEventListener("click", function (e) {
//     let objInps = { "title": titleVal, "desc": descVal }
//     listVals.push(objInps)
//     // localStorage.setItem("data",listVals)
//     localStorage.setItem("data", JSON.stringify(listVals))
//     console.log(listVals)

//     displayItems()

// })

// function displayItems() {
//     let items = listVals.map(function (obj) {
//         let elem = `<h1>${obj.title}</h1>
//         <h3>${obj.desc}</h3>`
//         return elem
//     })
//     console.log(items)
//     div.innerHTML = items.join('')

// }

// ____________________________________________________________________________________________________

// let data = [{fname:"adnan",lname:"ahmed",age:"23"},{fname:"meraj",lname:"hussain",age:"25"}];
// // console.log(data)

// let datStr = JSON.stringify(data,["fname","age"], 4)
// localStorage.setItem("data",datStr)
// console.log( datStr)

// let dataObj = JSON.parse(datStr,(key,value)=>{

//     return key == "fname" ? value.toUpperCase() : value

//     // if(key=="fname"){
//     //     value = value.toUpperCase()
//     // }
    
//     // return value

// });
// console.log(dataObj)

// ____________________________________________________________________________________________________


// adding data to LS

// let title = document.querySelector('input[placeholder="title"]')
// let desc = document.querySelector('input[placeholder="desc"]')
// let btn = document.querySelector('#btn')
// let div = document.querySelector('div')

// let listVals = []

// let titleVal
// let descVal


// window.onload = function() {
//     let dataLS = JSON.parse(localStorage.getItem('data'))
//     console.log(typeof dataLS," ",dataLS)
//     let items = dataLS.map(function (e) {
//         let elem = `<h1>${e.titleVal}</h1>
//         <h3>${e.descVal}</h3>`
//         return elem
//     })
//     // console.log(items)
//     div.innerHTML = items.join('')

// }

// title.addEventListener("keyup", function (e) {
//     titleVal = e.target.value
//     // console.log(titleVal)
// })

// desc.addEventListener("keyup", function (e) {
//     descVal = e.target.value
//     // console.log(descVal)
// })

// btn.addEventListener("click", function (e) {
//     let objInps = { "titleVal": titleVal, "descVal": descVal }
//     let dataLS = JSON.parse(localStorage.getItem('data')) || []
//     dataLS.push(objInps)

//      localStorage.setItem("data",JSON.stringify(dataLS) )
//     console.log(listVals)

//     displayItems(dataLS)


// })

// function displayItems(dataLS) {
//     console.log(typeof dataLS," ",dataLS)
//     let items = dataLS.map(function (e) {
//         let elem = `<h1>${e.titleVal}</h1>
//         <h3>${e.descVal}</h3>`
//         return elem
//     }) 
//     div.innerHTML = items.join('')

// }

// ____________________________________________________________________________________________________

// let title = document.querySelector('input[placeholder = title]')
// let desc = document.querySelector('input[placeholder = desc]')
// let button = document.querySelector('#btn')
// let div = document.querySelector('div')

// let listVals = []

// let titleVal
// let descVal

// title.addEventListener('keyup', function(e){
//     // console.log(e)
//     titleVal = e.target.value
//     console.log(titleVal)
// })

// desc.addEventListener('keyup', function(e){
//     descVal = e.target.value
//     console.log(descVal)
// })

// btn.addEventListener("click", function(e){
//     // console.log("inside the function")
//     let obj = {"title":titleVal , "desc":descVal}
//     listVals.push(obj)

//     localStorage.setItem("data", JSON.stringify(listVals))
//     // localStorage.stringify(listVals)
//     console.log(listVals)

//     displayItems()
// })


// function displayItems(){
//     let display = listVals.map(function(item){
//         return item
//     })
//     console.log(display)

//     let disp = JSON.stringify(display)
//     console.log(disp)
//     div.innerHTML = display.join("");
// }


// ____________________________________________________________________________________________________

let time = document.querySelector('input[type = time]')
let desc = document.querySelector('input[placeholder = desc]')
let button = document.querySelector('#btn')
let table = document.querySelector('tbody')


let timeVal
let descVal

time.addEventListener('keyup', function(e){
    timeVal = e.target.value
    // console.log(timeVal)
})

desc.addEventListener('keyup', function(item){
    descVal = item.target.value
    // console.log(descVal)
})


window.onload = function(){
    let arr = JSON.parse(localStorage.getItem("data"))||[];

    displayItems(arr)
}

button.addEventListener('click', function(e){
    let arr = JSON.parse(localStorage.getItem("data"))||[];
    // console.log(arr) 

    let stData = {timeVal, descVal}
    // console.log(stData)
     arr.push(stData)
    console.log(arr)

    // let b = JSON.stringify(arr)
    // localStorage.setItem("data", b)
    localStorage.setItem("data",JSON.stringify(arr))

    displayItems(arr)
})

function displayItems(arr1){
    let display = arr1.map((e)=> {
        let items = `<tr>
                        <td>${e.timeVal}</td>
                        <td>${e.descVal}</td>
                        <td><button class= "del"> Delete </button></td>
                    </tr>`
            
        return items
    })
    console.log(display)
    table.innerHTML = display.join("");

    // Delete the object when we click on delete button
    let ArrOfbtn = document.querySelectorAll('.del')//Because of querySelectorAll it gets NodeList
    // console.log(ArrOfbtn); //Nodelist of btns

    //using forEach
    ArrOfbtn.forEach((btn,index)=>{
        btn.addEventListener("click",function(e){
            arr1.splice(index,1);
            localStorage.setItem("data",JSON.stringify(arr1))
            displayItems(arr1)
            // arr1.splice(index,1)
            // localStorage.setItem()
        })
    }) 
   
    





    // arr.forEach(element => {
    //     element.timeVal
    //     element.descVal
    // });
}






