/**
 * Created by pastushenko-av on 23.11.2015.
 */
function Hamster() {
    this.food = [];
}

//Hamster.prototype.food = []; // ������ "�����"

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// ������ ���� ������� � ������ �������
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("������");
speedy.found("����");

console.log( speedy.food.length ); // 2
console.log( lazy.food.length ); // 2 (!??)