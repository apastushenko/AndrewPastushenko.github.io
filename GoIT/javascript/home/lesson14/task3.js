/**
 * Created by pastushenko-av on 23.11.2015.
 */
function f() {
    this.name = 'Вася';
    console.log( "привет: " + this.name );
}

Function.prototype.defer = function(ms){
    setTimeout(this, ms);
};

f.defer(1000); // выведет "привет" через 1 секунду
