var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// i)
// console.log("Sorted ages : " ,ages.sort())
// console.log("Min age is : " , ages[0])
// console.log("Max age is : " , ages[ages.length-1])

// trying the min max with loops
// for(var i=0; i<=length-1; i++){
//     if(ages[i] < min){
//         var min = i
//     }
// }
    // --------------------------------------------------------------
// ii) 

if(ages%2 == 0){
    console.log("median is : ", ages[Math.floor((ages.length/2)-1)])
}
else{
    console.log("median is : ", ages[Math.floor(ages.length/2)])
}


