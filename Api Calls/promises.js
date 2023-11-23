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
//                 if(true){
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

//     .then((data)=>{console.log(data)}) 
//     .catch((data2)=>{console.log("error")}) 

// })

// DOUBT: HOW TO CALL MULTIPLE API'S BY USING PROMISES

// --------------------------------------------------------------------------------------------

// let btn = document.querySelector('#btn');


// function Promiseall(){
//     ApiPromise()
// }
// function ApiPromise(url1,url2){
//     let data = new XMLHttpRequest();
//     data.responseType='json';
    
    
//     let promise1 = new Promise((resolve,reject)=>{
//             data.onload = function(){
//                 if(true){
//                     resolve(data.response)
//                 }
//                 else{
//                     reject("Doesn't load the required information")
//                 }
//             }       
//         })
//         // data.open('GET', url)
//         // data.send()
//         // return promise1

//     let promise2 = new Promise((resolve,reject)=>{
//             data.onload = function(){
//                 if(true){
//                     resolve(data.response)
//                 }
//                 else{
//                     reject("Doesn't load the required information")
//                 }
//             }       
//         })
//         data.open('GET', url)
//         data.send()
//         return promise1,promise2
// }


// btn.addEventListener('click', function(e){
//     // ApiPromise('https://dummyjson.com/carts/1')
//     Promiseall([promise1,promise2])

//     .then((data)=>{console.log(data)}) 
//     .catch((data2)=>{console.log("error")}) 

// })






















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