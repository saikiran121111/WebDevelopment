let input = "name";
let obj = { // This is how we can create an object in JavaScript
    name: "Sakshi",
    age: 21,
    city: "Delhi",
    'work exp': 5, // We can also use spaces in the property name
    geo: { // We can also have objects inside an object
        lat: 23.45,
        long: 45.67
    }
}
console.log(obj.geo.lat); // This is how we can access the properties of an object
console.log(obj['work exp']); // This is how we can access the properties of an object
console.log(obj[input]); // This is how we can access the properties of an object


let itGuy = {
    name: "Sumit",
    age: 25,
    skills: ["Python", "JavaScript", "React"], // We can also have arrays inside an object
    isStudent: false,
    address: {
        city: "Delhi",
        pincode: 110001
    },
    Laptop : { // We can also have objects inside an object
        CPU: 'i7-5thgen',
        GPU: 'Nvidia'
    }
    
}
console.log(itGuy.skills[2]);// This is how we can access the properties of an object
console.log(itGuy.address.city); // This is how we can access the properties of an object
console.log(itGuy.Laptop.CPU); // This is how we can access the properties of an object
console.log(itGuy.Laptop.GPU?.length); // The quetion mark is used to check if the property exists or not
delete itGuy.isStudent; // This is how we can delete a property from an object
console.log(itGuy); // This is how we can access the properties of an object