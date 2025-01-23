function Compare(brand,cpu,gpu){
    this.brand = brand;
    this.cpu = cpu;
    this.gpu = gpu;
    this.comparing = function(other){
        let looping =function(obj){
            console.log("This laptop has Higher configuration");
            for(let key in obj){
                if(key==='comparing'){
                    return '';
                }
                console.log(key+" : "+obj[key]);
            }
        }
        if(this.cpu>other.cpu){
            looping(this);
        }
        else{
            looping(other);
        }
    }
}

let lappy1 = new Compare('Lenovo','i3','Nvidia'); // Don't forget this initialization
let lappy2 = new Compare('Macbook','i7','Mac');

lappy2.comparing(lappy1);

