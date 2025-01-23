let itguy = {
    name: "Randhir",
    age: 25,
    laptop:{
        cpu: "i7",
        gpu: "nvidia"
    }
}
for(let key in itguy){
    console.log(key,itguy[key]);
}
for(let key in itguy.laptop){
    console.log(key,itguy.laptop[key]);
}

function greet(user,id){ // Two things we are initializing the function
    return `Hi there ${user} ${id}`  // Returning the value of the function so the greet() will hold the string value
}
let user = "Ruku";
let id = 10;
let str = greet(user,id);// and calling the function
console.log(str); // returning the function and passing the value to a function

//functional Expression
let add = function(num1,num2,num3=1){ // This is an anonymous function and we assigning it to a variable so variable considered as function //added the default value as 1 for num3
    return num1+num2+num3;
}
console.log(add(2,5,3));  // we assigning the value to variable like this

//arrow function

let mul = (num1,num2,num3)=>{ //removing the function and adding => in middle makes as arrow function
    return num1*num2*num3;
}
console.log(mul(2,3,4))

let adding = (num1,num2)=>{
    if(num1>0 && num2>0){
        return num1+num2;
    }
    else{
        console.log("There's a negative number in the input");
    }
}
console.log(adding(3,-4));

let addwn = (num1,num2)=>{
    if(num1<0){
        num1 = -num1;
        return num1+num2;
    }
    if(num2<0){
        num2 = -num2;
        return num1+num2;
    }
    else{
        return num1+num2;
    }
}
console.log(addwn(-1,4));

//arrow function with ternery operator
let addawto = (num1,num2)=>(num1<0?num1=-num1:num1)+(num2<0?num2=-num2:num2)// Anonymous function with ternery operator
console.log(addawto(-1,3)); // This will not work on arrow functions
//if we have a single parameter we can skip the () aswell for arrow function