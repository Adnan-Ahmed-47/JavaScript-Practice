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

// let data = [{fname:"abc",lname:"xyz",age:"23"},{fname:"abc",lname:"xyz",age:"23"}];

// let datStr = JSON.stringify(data,["fname","age"],4)

// localStorage.setItem("data",datStr)

// console.log( datStr)

// let dataObj = JSON.parse(datStr,(key,value)=>{
//     return key == "fname" ? value.toUpperCase() : value
// });
// console.log(dataObj)

// ____________________________________________________________________________________________________


// adding data to LS

let title = document.querySelector('input[placeholder="title"]')
let desc = document.querySelector('input[placeholder="desc"]')
let btn = document.querySelector('#btn')
let div = document.querySelector('div')

let listVals = []

let titleVal
let descVal


window.onload = function() {
    let dataLS = JSON.parse(localStorage.getItem('data'))
    console.log(typeof dataLS," ",dataLS)
    let items = dataLS.map(function (e) {
        let elem = `<h1>${e.titleVal}</h1>
        <h3>${e.descVal}</h3>`
        return elem
    })
    // console.log(items)
    div.innerHTML = items.join('')

}

title.addEventListener("keyup", function (e) {
    titleVal = e.target.value
    // console.log(titleVal)
})

desc.addEventListener("keyup", function (e) {
    descVal = e.target.value
    // console.log(descVal)
})

btn.addEventListener("click", function (e) {
    let objInps = { "titleVal": titleVal, "descVal": descVal }
    let dataLS = JSON.parse(localStorage.getItem('data')) || []
    dataLS.push(objInps)

     localStorage.setItem("data",JSON.stringify(dataLS) )
    console.log(listVals)

    displayItems(dataLS)


})

function displayItems(dataLS) {
    console.log(typeof dataLS," ",dataLS)
    let items = dataLS.map(function (e) {
        let elem = `<h1>${e.titleVal}</h1>
        <h3>${e.descVal}</h3>`
        return elem
    }) 
    div.innerHTML = items.join('')

}






