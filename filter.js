// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var newArr = arr.filter((elems) => {
//     return elems % 2 == 0
// })
// console.log(newArr)

// ------------------------------------------------------------------------------------------------

// var country = ['INDIA', 'PALESTINE', 'SAUDI', 'AMERICA', 'AUSTRALIA', 'NEPAL']

// var fcountry = country.filter((item) => {
//     // var len = country[item].length
//     if(item.length < 6){
//         // var len = fcountry.push(item)
//         // console.log(item)
//         // fcountry.push(country[item])
//         return item
//     }
//     // return country.item
   
// })

// console.log(fcountry)



// var newArr = country.map((item)=>{
//     var len = country[item].length
//     if(len < 6){
//         console.log(country[item])
//     }
//     return len
// })
// console.log(newArr)


// var country = ['INDIA', 'PALESTINE', 'SAUDI', 'AMERICA', 'AUSTRALIA', 'NEPAL']

// var newArr = []
// for(var i=0; i<=country.length-1; i++){
//     var len = country[i].length

//     if(len < 6){
//         newArr.push(country[i])
//     }
// }
// console.log(newArr)

// ------------------------------------------------------------------------------------------------

// var arr = ['ETHIOPIA', 'INDIA', 'EUROPE', 'AMERICA', 'AUSTRALIA', 'ENGLAND']

// var newArr = arr.filter((elems)=> {
//     return elems.startsWith('E')
// })
// console.log(newArr)

// ------------------------------------------------------------------------------------------------

// var obj = [
//     {product:'Shoes', price: 8},
//     {product:'Watch', price: 12},
//     {product:'Shirt', price: 9},
//     {product:'Bag', price: 11},
//     {product:'Coke', price: 5}

// ]

// var arr = obj.filter((elems)=> {
//     if(elems.price < 10){
//         return elems
//     }
// })

// console.log(arr)

// ------------------------------------------------------------------------------------------------

var empDet = [
    {name:'Mohan', salary:28000},
    {name:'Raj', salary:56000},
    {name:'Daniel', salary:52000},
    {name:'Raheem', salary:78000},
    {name:'Rajesh', salary:12000},
    {name:'Mohit', salary:50000},
]

var employees = empDet.filter((item)=> {
    if(item.salary >= 50000){
        return item
    }
})
console.log(employees)