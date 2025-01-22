let x =5, y = 3, z = 6
result = x>y && x<z
let n = !result
console.log(result,n)
x =7, y = 5, z = 4
result = x>y || x<z
console.log(result,n)

x=3,y=4,z=6
if(x<y&&y>z){
    console.log("x&y is lesser");
}
else if(x<z&&z<y){
    console.log("y is lesser");
}
else{
    console.log("cry");
}

//Ternery Operators ?://

let a =6;
let res = a%2===0 ? "Even" : "Odd" // ? and : is used for ternery operator
console.log(res)
