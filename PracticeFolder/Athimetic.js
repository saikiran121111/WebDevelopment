function add(num1,num2){
    return console.log("Sum: " + num1+num2);
}
function subtract(num1,num2){
    return console.log("Difference:",num1-num2);
}
function multi(num1,num2){
    return console.log("Product: " + num1*num2);
}
function div(num1,num2){
    return console.log("Quotient: " + num1/num2);
}
function arthimetic(num1,num2){
    add(num1,num2);
    subtract(num1,num2);
    multi(num1,num2);
    div(num1,num2);
}
arthimetic(5,3);
