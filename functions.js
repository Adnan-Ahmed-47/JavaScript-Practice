// function add(a,b)
// {
//     if(a>0){
//     // return a;
//     console.log(a)
//     }
//    console.log(a+b)
// }

// var a=add(4,7);
// console.log(a)
// add(6,8)
// console.log(add(8,7))


// console.log(this)
// var Student={
//     name:"Adnan",
//     place:'MehdiPatnam',
//     age:23,
//     drive:function(){
//         console.log(this.name+" is driving")
//     }
// }
// console.log(Student.drive());

var empDet1 = {
    name : "Rfgh",
    dept : "dfbh",
    role : "df",
    age : 2555,
    overview : function(){
        console.log(this)
    }

}

empDet1.overview()

var empDet = {
    name : "Raj",
    dept : "Accounts",
    role : "Accountant",
    age : 25,
    overview : function(){
        console.log(this)
    }

}



empDet.overview()

