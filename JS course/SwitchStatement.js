let day = "Sun";

if(day === "Mon"){
    console.log("Wake up at 7am");
}
else if(day === "Tue" || day === "Wed" || day === "Thurs"){
    console.log("Wake up at 4am");
}
else if(day === "Fri"){
    console.log("Wake up at 9am");
}
else{
    console.log("Wake up at 8am")
}

//Switch cases
const day1 = "Mon";
switch(day1){
    case "Mon":
        console.log("Wake up at 7am");
        break;
    case "Tue":
    case "Wed":
    case "Thurs":
        console.log("Wake up at 4am");
        break;
    case "Fri":
        console.log("Wake up at 9am");
        break;
    default:
        console.log("Wake up at 8am");
        break;
}

//Template Literal
let num1 = 5;
let num2 = 6;
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);
console.log(`THe sume of ${num1} and ${num2} is ${sum}`); // This is called template literal where we use backticks and ${} to use the variables in the string
console.log(`My name is 
ruku`); // This is used to print the string in multiple lines aswell using backticks and \n is not needed 