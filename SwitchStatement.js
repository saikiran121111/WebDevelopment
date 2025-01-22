let day ="Sun";

if(day === "Mon"){
    console.log("Wake up at 7am");
}
else if(day === "Tue" || day === "Wed" || day === "Thurs"){
    console.log("Wake up at 4am");
}
else if(day === "Fri"){
    console.log("Wake up at 9am");
}
else{
    console.log("Wake up at 8am")
}

//Switch cases
let day1 = "Mon";
switch(day1){
    case "Mon":
        console.log("Wake up at 7am");
        break;
    case "Tue":
    case "Wed":
    case "Thurs":
        console.log("Wake up at 4am");
        break;
    case "Fri":
        console.log("Wake up at 9am");
        break;
    default:
        console.log("Wake up at 8am");
        break;
}