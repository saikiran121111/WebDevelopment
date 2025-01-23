let laptop1 = {
    CPU: '9',
    GPU: 'Nvidia',
    RAM: '32',
    Brand: 'Asus',
    getConfig: function(){
        console.log("i9-DDR5-6500Mhz");
    },
    compare: function(other){ // This will not work on arrow functions
        if(this.CPU>other.CPU){
            console.log("Asus is better!!")
            for(let key in this){
                if(key==='getConfig'){
                    this.getConfig();
                }
                else if (key==='compare'){
                    return '';
                }
                else{
                    console.log(key+" : "+this[key]);
                }
            }
        }
        else{
            console.log("Mac is better");
            for(let key in other){
                if(key==='getConfig'){
                    other.getConfig();
                }
                else{
                    console.log(key+" : "+other[key]);
                }
            }
        }
    }
}
let laptop2 = {
    CPU: '3',
    GPU: 'Mac',
    RAM: '4',
    Brand: 'Apple',
    getConfig: function(){
        console.log("i3-expensive-shit");
    }
}
laptop1.compare(laptop2);
