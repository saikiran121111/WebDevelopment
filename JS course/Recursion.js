let num = 1;
function r(){
    console.log("Hi",num);
    num++
    r();
}
r();