// pseudo code
// 1) Target the display & then target the keys 
// 2) on clicking any key , the value of the key should be displayed on the target .
// 3) On clicking = sign , display the result on the input field

// code starts here

let buttons = document.querySelectorAll('.btns')
let display = document.querySelector('input[type=text]')
// console.log(buttons)

// button.addEventListener('click', function(e){
//     // dispKey = e.target.value
//     // console.log(dispKey)
//     console.log("inside the function")
// })

let str = ""
buttons.forEach((e)=>{
    // console.log(e.textContent)
    e.addEventListener('click', function(item){
        let num = item.target.textContent
        // console.log(num)

        if(item.target.textContent == "="){
            let opr = eval(str)
            display.value = opr
            str=""+opr;
            console.log(opr)
        }
        else if(item.target.textContent == "AC"){
            str = ""
            display.value = str
            console.log(str)
        }
        else if(item.target.textContent == "C"){
            let lastItem=str.split("");
            lastItem.pop();
            str=lastItem.join("")
            display.value = str
            
        }
        else{
            str += num 
            display.value = str
        }
        
    })

})

// console.log(button)
