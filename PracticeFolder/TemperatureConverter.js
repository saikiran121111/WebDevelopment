function celsius(c,f){
if(c>0){
    f = c*9/5+32;
    console.log(`${c}°C is ${f}°F`);
}
if(f>0){
    c = (f-32)*5/9;
    console.log(`${f}°F is ${c}°C`);
}
else{
    console.log("Yo phone linging");
}
}
celsius(30);