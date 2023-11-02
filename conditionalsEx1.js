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

// ----------------------------------------------------------------------------------------------------
// var age = prompt("Enter your age : ")
// var max = 18
// if(age >= 18){
//     alert('You are old enough to drive')
// }
// else if(age < 18 && age >= 0){
//     var number = max - age
//     alert('You are left with '+ number + ' years to drive')
// }

// ----------------------------------------------------------------------------------------------------

// var a = 2
// var b = 4
// var c = 7

// if(a>b && a>c){
//     console.log('a is the largest ')
// }
// else if(b>c){
//     console.log('b is the largest ')
// }
// else{
//     console.log('c is the largest')
// }

// ----------------------------------------------------------------------------------------------------

// var day = prompt("Enter today's day : ")

// switch(day){
//     case 'Sunday':
//         alert("Weekend")
//         break;

//     case 'Monday':
//         alert("Working Day")
//         break;

//     case 'Tuesday':
//         alert("Working Day")
//         break;

//     case 'Wednesday':
//         alert("Working Day")
//         break;

//     case 'Thursday':
//         alert("Working Day")
//         break;

//     case 'Friday':
//         alert("Working Day")
//         break;

//     case 'Saturday':
//         alert("Weekend")
//         break;

//     default:
//         alert("Not found")
//         break;
// }

// ----------------------------------------------------------------------------------------------------

var userRole = 'admin'
var action = {
    admin
}
var admin = {
    permission: 'create',
    permission: 'read',
    permission: 'update',
    permission: 'delete'
}
var user = {
    permission: 'create',
    permission: 'read'
}

var guest = {
    permission: 'read'
}
function checkPermission(userRole, action){
    if(userRole == admin){
        console.log("Permission granted.")
    }
    else if(userRole == user){
        console.log("you have the permission to create & read")
    }
    else{
        console.log("you only have a permission to read")
    }
}

console.log(checkPermission('admin', 'read'))





