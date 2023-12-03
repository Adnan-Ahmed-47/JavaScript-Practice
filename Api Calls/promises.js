// Promises

// new Promise((res,rej)=>{})
// .then()
// .catch()

// --------------------------------------------------------------------------------------------

// let cart = ["item1","item2","item3","item4","item5","item6","item7","item8"]

// let promise = new Promise((res,rej)=>{
//     if(cart.length>0){
//         res(cart)
//     }else{
//         rej("add some items to the cart")
//     }
//     // rej("promise rejected")
// })

// // console.log(promise)

// promise
// .then((data)=>{return data})
// .then((data)=>{console.log(data , "Total amount : 200" )})
// .catch((data)=>{console.log(data)})

// -------------------------------------------------------------------------------------------

// function apiCall(url) {
//     let xhr = new XMLHttpRequest()
//     console.log(xhr)

//     xhr.responseType = 'json'
//     xhr.onprogress = function () {
//         console.log("loading...")
//     }
    
//     let promise = new Promise(function (resolve, reject) {
//         xhr.onload = function () {
//             resolve(xhr.response)
//         }
//         xhr.onerror = function () {
//             reject("err")
//         }
//     })

//     xhr.open('GET', url)
//     xhr.send()

//     return promise

// }


// apiCall('https://dummyjson.com/users')
//     .then((data) => { return data })
//     .then(data => { return apiCall(`https://dummyjson.com/users/${data.users[1].id}`) })
//     .then((userData) => { return apiCall(`https://dummyjson.com/users/${userData.id}/todos`) })
//     .then((todos) => { console.log(todos) })
//     .catch((err) => { console.log(err) })
//     .finally(()=>{console.log("data")})


// apiCall('https://dummyjson.com/users', (data) => {
//     // console.log()
//     apiCall(`https://dummyjson.com/users/${data.users[1].id}`, (userData) => {
//         // console.log(userData.id)
//         apiCall(`https://dummyjson.com/users/${userData.id}/todos`, (userTodo) => {
//             console.log(userTodo)
//         })
//     })
// })
//  

// fetch('https://dummyjson.com/users')
//     .then((data) => { 
//         console.log(data)
//         return data.json() })
//     .then((data) => console.log(data))
//     .catch(err => console.log(err))

// __________________________________________________________________________________________________


// let btn = document.querySelector('#btn');

// function ApiPromise(url){
//     let data = new XMLHttpRequest();
//     data.responseType='json';
    
//     let promise = new Promise((resolve,reject)=>{
//             data.onload = function(){
//                 let fetData = data.response
//                 if(fetData != null){
//                     resolve(data.response)
//                 }
//                 else{
//                     reject("Doesn't load the required information")
//                 }
//             }
            
//         })

//         data.open('GET', url)
//         data.send()
//         return promise
// }

// btn.addEventListener('click', function(e){
//     ApiPromise('https://dummyjson.com/carts/1')

//     .then((data)=>{console.log(data.products)}) 
//     .catch((data2)=>{console.log("error")}) 

// })


// --------------------------------------------------------------------------------------------

// DOUBT: HOW TO CALL MULTIPLE API'S BY USING PROMISES

// let btn = document.querySelector('#btn');

// function ApiPromise(url){
//     let data = new XMLHttpRequest();
//     data.responseType='json';
    
    
//     let promise = new Promise((resolve,reject)=>{
//             data.onload = function(){
//                 let fetData = data.response
//                 if(fetData != null){
//                     console.log(data.response)
//                     resolve(data.response)
//                 }
//                 else{
//                     reject("Doesn't load the required information")
//                     console.log("kaam karra")
//                 }
//             }
               
//         })
//         data.open('GET', url)
//         data.send()
//         return promise

// }


// btn.addEventListener('click', function(e){
//     let prom2 = ApiPromise('https://dummyjon.com/carts/2')
//     let prom1 = ApiPromise('https://dummyjon.com/carts/1')
    
//     Promise.all([prom1,prom2])

//     .then((data)=>{console.log(data)}) 
//     .catch((error)=>{console.log(error)}) 

// })

// --------------------------------------------------------------------------------------------


let btn = document.querySelector('#btn');

function ApiPromise(url){
    let data = new XMLHttpRequest();
    data.responseType='json';
     
    let promise = new Promise((resolve,reject)=>{
            data.onload = function(){
                let fetData = data.response
                if(fetData != null){
                    // console.log(data.response)
                    resolve(data.response)
                }
                else{
                    reject("Doesn't load the required information")
                    // console.log("kaam karra")
                }
            }
               
        })
        data.open('GET', url)
        data.send()
        return promise
}


btn.addEventListener('click', function(e){
    let tot = 0
    ApiPromise('https://dummyjson.com/carts/1')

    .then(
        
        (prom1) => {console.log(prom1)
        return prom1.total
        // return ApiPromise('https://dummyjson.com/carts/2')
    })
    .then((prom2)=> {
        // console.log(prom2)
        tot += prom2
        return ApiPromise('https://dummyjson.com/carts/2') 
    })
    .then((prom3)=>{console.log(prom3)
    return prom3.total})

    .then((total)=> {
        tot += total
        console.log("Total Amount: ", tot)
    })
    .catch((err) => {console.log(err)})


})






















// let promise= new Promise((res,rej)=>{
//     if(false){
//         res(34)
//     }else{
//         rej("error")
//     }
// })


// promise
// .then(data=>{
//     console.log(data)
//     return 1;
// })
// .then(data2=>{
//     console.log(data2)
// })
// .catch(data=> {console.log("errrror")})