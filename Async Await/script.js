// let prom=new Promise((res,rej){
//     //Condition true  res("data")
//     //Condition false  rej("data")
    
// })

// let prom=new Promise((res,rej)=>{
//     //Condition true  res("data")
//     if(true){
//         res("Adnan is going")
//     }else{
//         rej("Code gone worng")
//     }
//     //Condition false  rej("data")
    
// })
// prom.then((data)=>{
//     console.log(data)
// })
// console.log("Sameer is going")

// prom.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// -------------------------------------------------------------------------------------------------------------------------------------------

// async function AsyncProm(){
//     let data1= await prom
//     console.log(data1)
//     console.log("Sameer is going")
// }
// AsyncProm()

// ----------------------------------------------------------
// console.log("Mey pehle aatau");

// function PRint(){
//     console.log("xcasdv")
// }
// fetch('https://dummyjson.com/users')
//     .then((data) => { 
//         console.log(data)
//         return data.json() 
//     })
//     .then((data) => console.log(data.users))
//     .catch(err => console.log(err))

// console.log("Mey baad mey aatau");

// setTimeout(()=>{
//     PRint()
// },2000)

//First Console.log or JS code runs 
//then promsies gives its output which are asynchronous(fetch,promise) 
//Lastly setTime out SetTimeInterval runs 


// async function FetchProm(){
// let data1 =await fetch('https://dummyjson.com/users');
// // console.log(data1)
// let actualdata=await data1.json();
// console.log(actualdata);
// }
// FetchProm()



// fetch('https://dummyjson.com/users')
//     .then((data1) => { 
//         console.log(data1)
//         return data1.json() //it is returns a promise 
//     })
//     .then((data) => console.log(data.users))
//     .catch(err => console.log(err))


// __________________________________________________________________________________________

// let display = document.querySelector('tbody')

// fetch('https://restcountries.com/v2/all')

// .then((data) => {
//     // console.log(data)
//     return data.json();
// })
// .then((actData) => {
//     // console.log(actData)
//     let myData = actData.map((item)=>{
//         let obj = {}
//         obj.name = item.name;
//         obj.capital = item.capital;
//         obj.languages = item.languages[0].name;
//         obj.population = item.population;
//         return obj
//     })
//     // console.log(myData)
//     return myData; 
// })

// .then((dispData)=> {
//     let table = dispData.map((item)=>{
//     let row = ` <tr>
//         <td>${item.name}</td>
//         <td>${item.capital}</td>
//         <td>${item.languages}</td>
//         <td>${item.population}</td>
//     </tr>  `

//     return row
//     })

//     return table
// })

// .then((dat)=> {
//     display.innerHTML = dat.join('');
//     console.log(dat)
// })

// ----------------------------------------------------------------------------

// let btn = document.querySelector('#btn')
// let display = document.querySelector('tbody')

// fetch('https://restcountries.com/v2/all')

// .then((data) => {
//     // console.log(data)
//     return data.json();
// })
// .then((objData) => {
//     // console.log(objData)
    
//     let fetData = objData.map((elem) => {
//         let obj = {}
//         obj.name = elem.name;
//         obj.area = elem.area;

//         return obj
//     })
//     return fetData

// })

// .then ((dispData) => {
//     // console.log(dispData)
//     let sortArray = dispData.sort((a, b) => {
//         return (b.area - a.area)})
//     console.log(sortArray)

//     let arr = []
//     for(let i=0; i<= 10 ; i++){
//         let rows = `<tr>
//         <td>${sortArray[i].name}</td>
//         <td>${sortArray[i].area}</td>
//         </tr>`

//         arr.push(rows)
//     }

//     return arr

//     // let table = dispData.map((elems)=>{
//     //     let rows = `<tr>
//     //     <td>${elems.name}</td>
//     //     <td>${elems.area}</td>
//     //     </tr>`

//     //     return rows
//     // })
//     // return table
// })

// .then((myData) => {
//     btn.addEventListener('click', function(e){
//         display.innerHTML = myData.join("");
//         console.log(myData)
//     })
// })


// ----------------------------------------------------------------------------------------------


// let display = document.querySelector('tbody')

// fetch('https://restcountries.com/v2/all')

// .then((data) => {
//     // console.log(data)
//     return data.json();
// })
// .then((actData) => {
//     // console.log(actData)
//     let myData = actData.map((item)=>{
//         let obj = {}
//         obj.name = item.name;
//         // obj.languages = item.languages;

//         let obj1 = item.languages.map((elem) =>{
//             return elem.name;
//         })
//         obj.languages = obj1.join(",");
//         obj.noOfLang = obj1.length;

//         return obj
//     })
//     // console.log(myData)
//     return myData; 
// })

// // .then((dat) => {console.log(dat)})

// .then((dispData)=> {
//     let table = dispData.map((item)=>{
//     let row = ` <tr>
//         <td>${item.name}</td>
//         <td>${item.languages}</td>
//         <td>${item.noOfLang}</td>
//     </tr>  `

//     return row
//     })

//     return table
// })

// .then((dat)=> {
//     btn.addEventListener('click', function(e){
//             display.innerHTML = dat.join('');
//             console.log(dat)
//         })  
    
// })


// _________________________________________________________________________________________

                // ASYNC AWAIT 

async function AsyncProm(){
    let data1= await fetch('https://dummyjson.com/users');
    console.log(data1)
    let actData = await data1.json();
    console.log(actData.users);

}

AsyncProm()


