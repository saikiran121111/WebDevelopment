let value = new Array;
value.push(2);
value.push(3);
value.push(5);// we can use the push method aswell to push values in to array
console.log(value[1]);


let values = [2,3,4,5];
values[4] = 7;
values[0] = 3;// replacing the value
console.log(values);


let data =['Ruku', 3, {user: 'ruku'}, function(){console.log("Hey there!!!");
}]

console.log(data);
data[3]();

let array = [3,6,4,7];
console.log(array.pop()); // Pop will remove the last value of array which is last in first out lifo
console.log(array.shift()); // Shift will remove the first value of array which is first in first out fifo
console.log(array.unshift(8));// Unshift will add the value into array from the first
console.log(array.splice(2,1,3));//splice removes the element from the desired place format -  "splice(location,no of values to remove,add values,adding values...)""



console.log(array);

// let arr = [];
// arr[0] = 4;
// arr[99] = 6;
// for(let n of arr){//here n is the value of the array
//     console.log(n);//we can use for in loop aswell but for arrays for of is better way
// }

//Array Destructuring - it is to assing the values in array separately to a variable
let box = [3,6,5,7,2];
console.log(box);
let [a,b,c,d,e] = box; //here we are assigning the values to the variables from array box

//if we need to skip the value like skipping assigning the value [a,b,c,,e]we need to use 2 commas so it will skip the values

[a,b,c,d,e] = [b,d,c,e,a]; //swapping the values in the array

let y = [a,b,c,d,e]

console.log(y);
console.log('//string destructuring');

let word = "My name is Ruku and I am the rule of this cosmos".split(' '); // here the split is used to split the string based on what I given in brackets here its space

//here if I want to use multiple elements in one variable we can use [a,b,,...d] here 2 commas to skip is and ...d is to assign the rest to d

let [f,g,h,i] = word;

console.log(f,g);


console.log('//Array Methods');


let boxarr = [4,7,2,8,5];// for each is used when I need to take the values spearately and execute them

boxarr.filter(n=> // this n is different and for each loop n is different as this will assign inside the method
    n%2===0) //here I'm adding  the filter for even numbers //filter will filter the values based of conditions
    .map(n => n*2)  //this is used for taking the value and changing the value // map will change the value based on conditions for filtered array
    .forEach(n=> // here I used arrow function adn for n I removed the brackets as its only 1 parameter(n)
        //for each is used to print the values of array separately
    console.log(n) // I initialized num index and array in the function foreach loop and it can print them aswell
    
)

 // boxarr.filter(n).map(n).forEach(n) // This is how we can use multiple methods

// boxarr.filter(n=>{ // this n is different and for each loop n is different as this will assign inside the method
// n%2===0; //here I'm adding  the filter for even numbers
// })//This filter is used to filter the array for the only things we are going to use like adding logics to filter the array
//     .forEach((n,i,arr)=>{// here I used arrow function adn for n I removed the brackets as its only 1 parameter(n)
//     console.log(n*2,i,arr); // I initialized num index and array in the function foreach loop and it can print them aswell
// });

console.log('//Reduce method')

let result = boxarr.filter(n=>n%2===0).map(n=>n*2).reduce((x,y)=>(x+y))
console.log(`reduced method result ${result}`); // reduced method is used to reduce the array values either to add sub or anything









