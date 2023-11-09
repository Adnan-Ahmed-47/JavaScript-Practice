// function a(c){
//     console.log("a")
//     // return c()
// }

// function b(){
//     console.log("b")
// }

// a(b)

// ---------------------------------------------------------------------------------------------------

// setTimeout(function sum(){
//     console.log(12+34)
// }, 2000)

// setInterval(function(){
//     console.log(1)
// }, 2000)

// clearInterval()
// ---------------------------------------------------------------------------------------------------

// arrow function
// var sum = () => {
//     console.log(1+2)
// }
// sum()

// var arr = [1,2,3,4,5]
// var newArr = arr.map(func(elem, index, arr){
//     console.log(elem, " ", index," ", arr)
//     // return elem*2
// })

// console.log(newArr)

// _____________________________________________________________________________________________________________________________________________

// var arr = ['html', 'css', 'js']
// var newArr = arr.map((item)=>{
//     return item.toUpperCase()
// })
// console.log(newArr)

// ---------------------------------------------------------------------------------------------
// var sqNum = [1, 2, 3, 4, 5, 6]
// var newNum = sqNum.map((elems)=> elems*elems)
// console.log(newNum)

// TRIED BY ME
// var newNum = []
// function squareNums(sqNum){
//     for(var i=0; i<=sqNum.length-1; i++){
//         // var final = sqNum[i]*sqNum[i]
//         var final = i*i
//         newNum.push(final)
//     }
//     // return newNum
//     console.log(newNum)
// }
// squareNums([1, 2, ,3 ,4 , 5])
// // console.log(squareNums([1, 2, ,3 ,4 , 5]))
// ------------------------------------------------------------------------------------------------

// var proDet = [{prod:'Shoes', price:2300}, {prod:'Glasses', price:300}, {prod:'Mobile', price:30000}, {prod:'Shirt', price:1500}]
// var ProdNames = proDet.map((item)=> (item.prod))
// console.log(ProdNames)

// ------------------------------------------------------------------------------------------------
// var temp = [98, 87, 90, 94, 96]
// // console.log(temp.join('C '))
// var newArr = temp.map((temp)=>{
//     return (temp*9/5)+32+ 'F'
// })
// console.log(newArr)

// ------------------------------------------------------------------------------------------------

var students = [
  { name: "Adnan", age: 23 },
  { name: "Meraj", age: 25 },
  { name: "Mateen", age: 24 },
  { name: "Sameer", age: 26 },
];

var studNames = students.map((item) => {

  var years = 2023;
  //   console.log(students.name)
  // console.log(students)
  // return year - students.age;
  // var z =  year - students.age;
  // console.log(z)
  // let newData = [...students, year= z]
  // // var arr = [ students.name, z]
  // return newData
    let {name} = item;
    let year = years - item.age;
    let obj = {name,year}
  return obj;
});

console.log(studNames)



// ##################################### END ##################################################

// FOR UNDERSTANDING
// let arr = [1,2,3,4,5];
// let newArr = arr;
// // console.log(newArr)
// newArr[0] = 10;
// console.log(newArr,arr)

//destructuring

// let arr = [1,2,3,4,5,6];
// let newArr = [...arr]  //deep copy
// console.log(newArr)

// newArr[0] = 20;
// console.log(newArr,arr)


// let obj1 = [{
//   name : 'abx',
//   year : 2022
// },
// {
//   name : 'xyz',
//   year : 2023
// }]

// console.log(obj1)

// let newObj = [...obj1]

// console.log(newObj)

// let  {year} = obj1

// // console.log(obj1)
// obj1.forEach((item)=>{
//   let {name} = item
//   console.log(name)
// })

//ES6 : map,filter,reduce,let,const,arrow functions,callbacks,fetch&promises,destrucing

//DOm : DOcument object Model

// JS : ECMASCRIPT
// ES2015 ==> 