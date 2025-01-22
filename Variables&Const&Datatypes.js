let num = 2+2 // let is used to declare a variable at first in js which is different in other languages like java
//where in java  we use int a = 5; something like that
console.log(num)
num = 6 // here I'm not using the let because num is already declared I'm just using that to change the value
console.log(num)// you can rewrite the value of num aswell
console.log(num+3)
let username = "Ruku"
let $user_id = 'Ruku' // string can be kept either in single quotes or in double quotes
//dollar and underscore are the only symbols that are allowed in js
console.log(username,$user_id)

let r = 45
const pi = 3.14
const area = pi * r * r// here const are constants where if I want to change the value of variable it can't be changed
console.log(area)

        //DATA TYPES
        //         \\
       //           \\
       //            \\
// PRIMITIVE        OBJECT 
// NUMBER
// STRING
// BOOLEAN
// NULL
// UNIDENTIFIED
// SYMBOL

console.log(typeof username) // type of is used to know what is the type of variable
let hex = 0xf // here we can initiate the value of hexa decimal aswell we need to start with 0x inorder to use hexadecimal 0xf value is 15
let exp = 14e75 // I can also declare the exponential value
let bigint = 98258973456984235689324659832456n // n is used at last to say this is a big int
console.log(hex)
console.log(exp)
let infy = 5/0 // Here the output will be infinity
console.log(infy)
console.log(Number.MAX_VALUE)//Number is an interface
console.log(Number.POSITIVE_INFINITY)
let myname = "V \nS K \"RU\tku\"" // Here the slash \ is used to cancel the meaning of the symbol
console.log(myname)
let bool = 4>5
console.log(bool) // boolean values
console.log(num / "Hi") // The output is NaN which is not a number but the type is number
let num1 = String(6) // Typecasting
let num2 = Number("123")// Typecasting
let boolean = Boolean("false")// Typecasting
console.log(num1,typeof num1)// Typecasting
console.log(typeof boolean)// Typecasting 
//Coercion is basically it will change the data based on the operator we use
let x = 5
console.log(x, typeof x)
x = x + ""
console.log(x, typeof x)
x = x - 2
console.log(x, typeof x)
// THis behaviour is called coercion