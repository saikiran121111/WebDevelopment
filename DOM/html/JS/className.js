let paragraph = document.getElementById("para");
//paragraph.className += "HeyClass"//used concatenate to add for the class
paragraph.classList.add("newClass1","newClass2");//To add new class by classlist and we can add multiple classes
paragraph.classList.remove("HelloClass");//To remove the class
paragraph.classList.replace("newClass1","MeowClass");//To replace a class with another class
console.log(paragraph.classList.contains("MeowClass"));//to check class is available or not
paragraph.classList.toggle("className");//toggle is used if the classname is not present it will add if its present it will remove
console.log(paragraph.className);//to print the classes we have
console.log(paragraph.classList);//used to print the collection of classes
