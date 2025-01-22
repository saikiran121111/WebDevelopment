let laptop = {
    Brand: 'Lenovo',
    CPU: 'i9',
    GPU: 'Nvidia',
    OS: ()=>console.log("windows")
}
for(let key in laptop){
    if(key==='OS'){
        return laptop.OS();
    }
    else{
        console.log(key +" : " + laptop[key])
    }   
}

let itGuy = {
    name: 'sundar',
    age: '24',
    getPc: { // Bro this is a key and this is how we declare a method in javascript don't forget this please man
        os: 'chromeOs',
        lappy: 'chromebook',
        specs: 'sanka_nakudu'
    }
}
for(let key in itGuy){
    if(key==='getPc'){
        for(let key1 in itGuy.getPc){ // the for in loop works like for(let the property name in the object)
            console.log(key1 + " : " + itGuy.getPc[key1])
        }
    }
    else{
        console.log(key + " : " + itGuy[key]);
    }
    
}

