function buttonClick(){
    let btn = document.getElementById("btn");
    console.log("Stop spamming Buddy",btn.type);
}
let button = document.getElementById("btnn");// This is used to directly writing event handler in js
button.onclick = function(){
    console.log(this.id);
}
    
