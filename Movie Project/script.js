

async function moviesApi(){
    let load = await fetch('https://dummyapi.online/api/movies')
    // console.log(load)
    let actData = await load.json();
    // console.log(actData)
    return actData;
}

// let datas=moviesApi();

let display = document.querySelector('.main-sec')

window.onload = function(e){
    // let disp = ``
    display1(datas)
}
function display1(data){
    console.log(data)
    // let cards=data.map((el)=>{
    //         let cardItem=`${el.image}`
    //         return cardItem;
    // });
    // console.log(cards)
 

}