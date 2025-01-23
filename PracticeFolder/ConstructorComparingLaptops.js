function Compare(brand,cpu,gpu){
    this.brand = brand;
    this.cpu = cpu;
    this.gpu = gpu;
    this.comparing = function(other){
        if(this.cpu>other.cpu){
            console.log("This laptop has Higher configuration");
            for(let key in this){
                if(key==='comparing'){
                    return '';
                }
                console.log(key+" : "+this[key]);
            }
        }
        else{
            for(let key1 in other){
                if(key1==='comparing'){
                    return '';
                }
                console.log("This laptop has Higher configuration");
                console.log(key1+" : "+ other[key1]);
            }
        }
    }

}

let lappy1 = new Compare('Lenovo','i9','Nvidia'); // Don't forget this initialization
let lappy2 = new Compare('Macbook','i3','Mac');

lappy2.comparing(lappy1);

