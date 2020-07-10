class drop{
    constructor(){

    }
    display(){
        var maxDrops = 100;
        for(var i = 0, i<maxDrops, i++){
            maxDrops.push(new createDrop(random(0, 400), random(0, 400)))
        }
    }
}