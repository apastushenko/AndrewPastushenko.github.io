/**
 * Created by pastushenko-av on 23.11.2015.
 */
function Hamster() {
    this.food = [];
}

//Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// —оздаЄм двух хом€ков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("€блоко");
speedy.found("орех");

console.log( speedy.food.length ); // 2
console.log( lazy.food.length ); // 2 (!??)