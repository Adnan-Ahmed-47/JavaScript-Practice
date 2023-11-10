// var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// var arr1 = []
// var newArr = arr.reduce((p,c)=> {
//     p = p+c
//     // arr1.push(p)
//     return p
// },0)
// // newArr.push(p)
// arr1.push(newArr)
// console.log(arr1)

// ------------------------------------------------------------------------------------------------

// ACTUAL ANSWER

//  var arr = ['Harry', 'is', 'the', 'best', 'coder']
// let str="";
// let isTrue=true;

// let reduce1 = arr.reduce((acc,el)=>{
//     if(isTrue==true){
//         // str=str+el+" ";
//         acc.push(str);
//         isTrue=false;
//     }
//     acc[0]=acc[0] + el + " ";
//     return acc;
// },[])

// console.log(reduce1)


// TRIED BY ME

//  var arr = ['Harry', 'is', 'the', 'best', 'coder']
// var newArr = []
// var p = arr.join(' ')
// newArr.push(p)
// console.log(newArr)

// console.log(arr.join(' '))

// ------------------------------------------------------------------------------------------------

// var obj = [
//     {product:'Shoes', price: 8000},
//     {product:'Watch', price: 12000},
//     {product:'Shirt', price: 9000},
//     {product:'Bag', price: 1100},
//     {product:'Coke', price: 500}

// ]

// var newArr = obj.reduce((acc,el) => {
//     acc = acc + el.price
//     return acc
// },0)

// console.log("The total Price is : " ,newArr)

// ------------------------------------------------------------------------------------------------

var arr = [
    {type: 'debit', amount:50},
    {type: 'credit', amount:100},
    {type: 'debit', amount:30}
]

var amount = arr.reduce((acc,elem) => {
    if(elem.type == 'debit'){
        acc = acc - elem.amount
    }
    else if(elem.type == 'credit'){
        acc = acc + elem.amount
    }

    return acc
},0)

console.log("The account balance is : Rs" ,amount)