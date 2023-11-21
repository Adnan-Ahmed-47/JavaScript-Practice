// let prom=new Promise((res,rej){
//     //Condition true  res("data")
//     //Condition false  rej("data")
    
// })

let prom=new Promise((res,rej)=>{
    //Condition true  res("data")
    if(true){
        res("Adnan is going")
    }else{
        rej("Code gone worng")
    }
    //Condition false  rej("data")
    
})
// prom.then((data)=>{
//     console.log(data)
// })
// console.log("Sameer is going")

// prom.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// -------------------------------------------------------------------------------------------------------------------------------------------

async function AsyncProm(){
    let data1= await prom
    console.log(data1)
    console.log("Sameer is going")
}
AsyncProm()



