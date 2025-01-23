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

let arr = [];
arr[0] = 4;
arr[99] = 6;
for(let n of arr){//here n is the value of the array
    console.log(n);//we can use for in loop aswell but for arrays for of is better way
}

//Array Destructuring - it is to assing the values in array separately to a variable
let box = [3,6,5,7,2];
console.log(box);
let [a,b,c,d,e] = box; //here we are assigning the values to the variables from array box

//if we need to skip the value like skipping assigning the value [a,b,c,,e]we need to use 2 commas so it will skip the values

[a,b,c,d,e] = [b,d,c,e,a]; //swapping the values in the array

let y = [a,b,c,d,e]

console.log(y);

//string destructuring
let word = "My name is Ruku and I am the rule of this cosmos".split(' '); // here the split is used to split the string based on what I given in brackets here its space

//here if I want to use multiple elements in one variable we can use [a,b,,...d] here 2 commas to skip is and ...d is to assign the rest to d

let [f,g,h,i] = word;

console.log(f,g);






