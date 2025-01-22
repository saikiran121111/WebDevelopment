let laptop = {
    name: 'lenovo',
    os: 'windows',
    getConfig: function(){
        console.log(this.name); // Here this will refer to a particular object 
    }
}
laptop.getConfig(); // I'm calling getConfig() method with laptop object so if I use this keyword that refers to laptop object
//If I use different object like pc.getConfig() then the this keyword will refer to pc object