// let btn = document.querySelector('#btn')

// btn.addEventListener('click', function(e){
//     let xhr = new XMLHttpRequest()
//     // console.log(xhr)
//     xhr.responseType = "json";

//     xhr.onload = function(e){
//         console.log(xhr.response)
//     }

//     xhr.open('GET','https://dummyjson.com/products')
//     xhr.send();
// })

// ---------------------------------------------------------------------------------------------------

// let display = document.querySelector('#display')

// btn.addEventListener('click', function(e){
//     let data = new XMLHttpRequest()
//     // console.log(data)
//     data.responseType = "json";
//     // console.log(data)

//     data.onload = function(){
//         let newData = data.response.products
//         // console.log(newData[0])
//         console.log(newData);
        
//         // let fin = newData[2].title;
//         // console.log(fin);

//         let objs = newData.map((elem)=>{
//             let item = `<li>${elem.title}</li>`
//             // obj.title = elem.title;
//             return item;
//         })
//         console.log(objs)

//         // // display.innerHTML = objs.join("")
//         display.innerHTML = `<ol>${objs.join("")}</ol>`

//     }
//     data.open('GET', 'https://dummyjson.com/products');
//     data.send();
// })

// ---------------------------------------------------------------------------------------------------

// let input = document.querySelector('input[placeholder=id]')
// let btn = document.querySelector('#btn')

// function apiCall(url){
//     let data = new XMLHttpRequest();
//     // data.responseType = "json";
//     // console.log(data)

//     data.onload = function(){
//         let newData = JSON.parse(data.response)
//         // console.log(newData.products[0].title)

//         console.log(newData)
//     }

//     data.open('GET',url);
//     data.send();
// }

// btn.addEventListener('click', function(e){
//     apiCall(`https://dummyjson.com/products/${input.value}`);
// })

// // apiCall('https://dummyjson.com/products')


// ---------------------------------------------------------------------------------------------------




