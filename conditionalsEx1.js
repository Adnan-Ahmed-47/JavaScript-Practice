// var a = 23
// var b = 120
// if(a>b){
//     console.log("a is greater than b")
// }
// else{
//     console.log('a is less than b')
// }

// ----------------------------------------------------------------------------------------------------

// If u r using the prompt function , ur output will be displayed in the browser rather than in powershell.

// var num = prompt("Enter a number: ");
// if(num%2 == 0){
//     console.log(num + " is an even number")
// }
// else{
//     alert(num + " is an odd number")}


// CODE BY CHAT GPT
// var userInput = prompt("Please enter a number:");
// var number = parseInt(userInput);

// if (!isNaN(number)) {
//   if (number % 2 === 0) {
//     alert(number + " is an even number.");
//   } else {
//     alert(number + " is not an even number.");
//   }
// } else {
//   alert("Invalid input. Please enter a valid number.");
// }

// ----------------------------------------------------------------------------------------------------
var age = prompt("Enter your age : ")
var max = 18
if(age >= 18){
    alert('You are old enough to drive')
}
else if(age < 18 && age >= 0){
    var number = max - age
    alert('You are left with ', number , 'years to drive')
}


