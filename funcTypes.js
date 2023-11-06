// higher order function & Call Back function
// ===> variable, value
//==> takes another function as an argument/parameter
//passing a function as an argument/parameter directly
setTimeout(function hello(){
    console.log('hello')
},2000)

//function expression (storing a function inside a variable)
let fn = function (){
    console.log('am inside fn')
}
setTimeout(fn,2000)
// fn()

// -------------------------------------------------------------------------------------------------------------------------

//forEach, arrow function, map, reduce , filter

//Arrow Function 
setTimeout(()=>{
    console.log('inside arrow function')
},3000)

//for loop 
let arr = [1,11,14,13,2,4,6,7,8,9,10]
// for(let i=0;i<arr.length;i++){
// console.log(arr[i])
// }
// /forEach Loop : Easier version of for loop
// arr.forEach((item)=>{
    // console.log(item)
// })
// -----------------------------------------------------------------------

//Map : it returns a new array after doing some thing

let newArr = arr.map((item)=>{
    return item*item;
    //map returns a new Array, does not modify existing array
})
// console.log(newArr)
// console.log(arr)
// --------------------------------------------------------------------------

//Filter : checks for conditions, returns true when satisfied

let evenNum = arr.filter((elem)=>{
// console.log(elem)
        return elem % 2 ==0

        //does not modify original array, return a new array
})
// console.log(arr)
// console.log(evenNum)
// -----------------------------------------------------------------------------

//REDUCE : reduce the entire value into a single digit
// let balance = 100;
// dbit  20
// credti 40
let a = [1,2,3,4,5,6,7,8,9,10]
let reduceArr = a.reduce((prev,next)=>{
        // console.log(prev,next)
        var sum = 0;
        sum = prev + next;
        return sum
},100)
//that 100 is an initial value 
console.log(reduceArr)