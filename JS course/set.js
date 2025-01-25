let charact = new Set(); //Set is used to filter the common values and it doesn't have index values
charact.add("Izawa");//This is used to add values in set
charact.add("Seku");
charact.add("Ruku");
charact.add(21);
charact.add(3);
charact.add(3);
charact.add(361);
charact.add(34);

console.log(charact.has("Ruku"));//THis has is used to check wheather the value exist in set or not and this is string case sensitive

charact.forEach(value =>{
    console.log(value); 
    
})