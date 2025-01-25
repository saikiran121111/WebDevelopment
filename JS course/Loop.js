// //While loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// // For loop
// for(i=1;i<=5;i++){
//     console.log("Hi");
//     //Nested Loop
//     for(j=1;j<=5;j++){
//         console.log("Hello");
//     }
// }
// //Do while
// let k=1;
// do{
//     console.log(k);
//     k++;
// }while(k<=5);

// for(i=1;i<=100;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

let num = 2345709;
while(num>0){
    console.log(num%10);
    num = parseInt(num/10); // THe while loop will run until the number is greater than 0
}