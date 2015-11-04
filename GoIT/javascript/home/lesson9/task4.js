/**
 * Created by pastushenko-av on 03.11.2015.
 */
function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    var cache = {};
    return function(x) {
        if (!(x in cache)) {
            cache[x] = f.call(this, x);
        }
        return cache[x];
    };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b ); // false, другой аргумент => другое значение
