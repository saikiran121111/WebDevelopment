function buttonClick(){
    let btn = document.getElementById("btn");
    console.log("Stop spamming Buddy",btn.type);
}
let button = document.getElementById("btnn");// This is used to directly writing event handler in js
button.onclick = function(){
    console.log(this.id);
}
//addEventListener(event,function,usecapture(booleantype)) is another way to add an event
//removeEventListener(event,function,usecapture(booleantype)) is used to remove event listener  

let but = document.getElementById("btn3");
but.addEventListener('click',function(){
    console.log(window.alert("Yo phone linging!!!"));   
})

//Imp event listeners
//mousemove-constant calls when mouse is moved
//mousedown-event occurs when mouse button is pressed
//mouseup-event occurs when you release the mouse button
//mouseover-when the mouse is moved from outside to inside of the element this event occurs
//mouseout-when the curser is out of one element and moved to other element then this event is occured
//keydown-it occurs when key is pressed and it repeats until you hold the keyboard
//keyup-it occurs when you release a key in keyboard
//keypress-it occurs when you press a character like a,b,c and fires repeatedly when holding down
//scroll-it occurs when scolling
