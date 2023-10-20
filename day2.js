// var str = "hello world"
// var str1 = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
// var str2 = "javascript"
// var strMergeStart = "Javascript is used "
// var strMergeEnd   = "to add functionalitites to the web app"
// var str3 = "This course is all about Javascript"
// var num = 1

// console.log(str.length)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.substr(6,5))
// console.log(str1.split(','))
// console.log(str2.indexOf('a'))
// console.log(str2.lastIndexOf('a'))
// console.log(strMergeStart.concat(strMergeEnd))
// console.log(str3.includes('Javascript'))
// console.log(Math.round(Math.random()*100))
// console.log(Math.round(Math. random() * (100-50) + 50))




// console.log("\t 1 1 1 1  1")
// console.log("\t 2 1 2 4  8")
// console.log("\t 3 1 3 9 27")
// console.log("\t 4 1 4 16 64")
// console.log("\t 5 1 5 25 125")








var str = 'He earns 50000 from salary per month, 10000 annual bonus.'

// console.log(str.indexOf(5))
var sal = str.substr(9,5)
// console.log(str.indexOf(1))
var bon = str.substr(38,5)

var totalAnnualIncome = sal*12 + Number(bon)
console.log('Total Annual Income = ' , totalAnnualIncome)








