function reverse(str){
let rstring = "";
for(i=0;i<str.length;i++){
    rstring = str.charAt(i)+rstring;
}
console.log(rstring);}
reverse("Ruku");