let btn = document.querySelector('#btn')

btn.addEventListener('click', function(e){
    // console.log('inside the function')

    let xhr = new XMLHttpRequest()
    
    xhr.onload = function(e){
        console.log(xhr.response)

    }
    xhr.open('GET','https://dummyjson.com/products')
    xhr.send();
})
