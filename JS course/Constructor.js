function Techguy(name,tech){
    this.name = name;
    this.tech = tech;
    this.work = function(){
        console.log("Hi there");
    }
}
let techie1 = new Techguy('Buchik','JS');
let techie2 = new Techguy('Machik','Java');

function compare(techguy){
    for(let key in techguy){
        console.log(key+" : "+ techguy[key]);
    }
}
compare(techie2);
techie1.work();

