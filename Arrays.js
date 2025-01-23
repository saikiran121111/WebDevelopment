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
console.log(array.splice(2,1));//splice removes the element from the desired place format -  "splice(location,no of values to remove)""



console.log(array);


