// function add(a,b)
// {
//     if(a>0){
//         // return a
//         console.log(a)
//     }
//     console.log(a+b)
//     // return a+b;
// }

// gives undefined along with the output bcoz u haven't given return & also printing it in console.log.
// var a=add(4,7);
// console.log(a) 

// this doesn't give u the undefined value   
// add(6,8)

// this also gives u the undefined value as u have not given return in the function
// console.log(add(8,7))

// -----------------------------------------------------------------------------------------------------

// console.log(this)
// var Student={
//     name:"Adnan",
//     place:'MehdiPatnam',
//     age:23,
//     drive:function(){
//         console.log(this.name+" is driving")
//     }
// }
// Student.drive()                                  
// console.log(Student.drive());                      //undefined      

// -----------------------------------------------------------------------------------------------------

// var empDet1 = {
//     name : "Rfgh",
//     dept : "dfbh",
//     role : "df",
//     age : 2555,
//     overview : function(){
//         console.log(this)
//     }
// }

// empDet1.overview()

// -----------------------------------------------------------------------------------------------------

// var empDet = {
//     name : "Raj",
//     dept : "Accounts",
//     role : "Accountant",
//     age : 25,
//     overview : function(){
//         // if(this.age == 24){
//         //     console.log('This is valid employee')
//         // }
//         console.log(this)
//     }
// }

// empDet.overview()


