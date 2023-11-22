let btn = document.querySelector('#btn');

btn.addEventListener('click', function(e){
ApiPromise('https://dummyjson.com/carts/1')
.then((data)=>{
    console.log(data)
})
    
    
})
function ApiPromise(url){
    let data = new XMLHttpRequest();
    
        let promise = new Promise((resolve,reject)=>{
            data.responseType='json';
            data.onload = function(){
            resolve(data.response)
            }
        })
        data.open('GET', url)
        data.send()
        return promise
}

let promise((res,rej)=>{
    res(34)
})
promise.then(data=>{
    console.log(data)
    return 1;
}).then(data2=>{
    console.log(data2)
})