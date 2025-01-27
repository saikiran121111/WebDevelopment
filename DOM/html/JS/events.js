function buttonClick(){
    let btn = document.getElementById("btn");
    console.log("Stop spamming Buddy",btn.type);
}
let button = document.getElementById("btnn");// This is used to directly writing event handler in js
button.onclick = function(){
    console.log(this.id);
}
//addEventListener(event,function,usecapture(booleantype)) is another way to add an event
//removeEventListener() is used to remove event listener  

let but = document.getElementById("btn3");
but.addEventListener('click',function(){
    console.log(window.alert("Yo phone linging!!!"));   
})
