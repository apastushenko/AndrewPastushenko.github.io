/**
 * Created by user on 02.11.2015.
 */

function Calculator(){
    operations = {
        '+': function(a,b){
            return a + b;
        },
        '-': function(a,b){
            return a - b;
        }
    };

    this.calculate = function (str) {
        var args = str.split(' ');

        if(args.length != 3) return 'Wrong str!';

        if(operations[args[1]]) return operations[args[1]](+args[0],+args[2]);
        else return'Function is unknown!';
    };

    this.addMethod = function(name, func){
        if(operations[name]) console.log('Function: ' + name + ', is already exist!' );
        else operations[name] = func;
    }
};

var powerCalc = new Calculator();

console.log(powerCalc.calculate('2 + 3'));
console.log(powerCalc.calculate('5 - 3'));
console.log(powerCalc.calculate('5 ^ 3'));

powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

console.log(powerCalc.calculate('2 * 3'));
console.log(powerCalc.calculate('6 / 3'));
console.log(powerCalc.calculate('2 ** 3'));
