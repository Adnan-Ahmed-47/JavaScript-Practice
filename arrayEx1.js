var arr = []
console.log(arr)

// ---------------------------------------------------------------------------------------------------------------------------------------------

var arr1 = [2, 5, 8, 4, 12, 100]
console.log(arr1)
console.log(arr1.length)

// ---------------------------------------------------------------------------------------------------------------------------------------------

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("First element : ", arr1[0])
console.log("Middle element : ", arr1[Math.floor(arr1.length/2)])
console.log("Last element : ",arr1[arr1.length -1 ])


// ---------------------------------------------------------------------------------------------------------------------------------------------

var mixedDataTypes = ['Adnan', 'Meraj', 'Mateen', 'Sameer', 34, 12, 425, 45, 1, true]
console.log(mixedDataTypes.len)


// ---------------------------------------------------------------------------------------------------------------------------------------------

var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
    // ---------------------------------------------------------
console.log("Number of Companies : " , itCompanies.length)
    // ---------------------------------------------------------
console.log("First Company : " ,itCompanies[0])
console.log("Middle Company : " , itCompanies[Math.floor(itCompanies.length/2)])
console.log("Last Company : " , itCompanies[itCompanies.length-1])
    // ---------------------------------------------------------
var arr1 =[]
arr1.push( itCompanies[0].toUpperCase())
arr1.push( itCompanies[1].toUpperCase())
arr1.push( itCompanies[2].toUpperCase())
arr1.push( itCompanies[3].toUpperCase())
arr1.push( itCompanies[4].toUpperCase())
arr1.push( itCompanies[5].toUpperCase())
arr1.push( itCompanies[6].toUpperCase())
console.log(arr1)
    // ---------------------------------------------------------
var store = itCompanies.pop()
console.log(itCompanies)
console.log(itCompanies.join(), "and" , store, "are big IT companies.")
    // ---------------------------------------------------------
// var chComp = 'Microsoft'
// for(var i=1; i<=itCompanies.length; i++){
//     if(chComp == itCompanies[i]){
//         console.log(itCompanies[i])
//     }
//     else{
//         console.log("Company is not found")
//     }
// }                   
//              (OR) 

var chComp = 'Microsoft'
if(itCompanies.includes(chComp)){
    console.log(chComp)
}
else{
    console.log("Company not found")
}
    // ---------------------------------------------------------
    


















