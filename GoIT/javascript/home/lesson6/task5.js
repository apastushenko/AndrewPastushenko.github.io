/**
 * Created by user on 21.10.2015.
 */

function isPal(str){
    return str.toLowerCase().split(' ').join('') == str.toLowerCase().split(' ').join('').split('').reverse().join('');
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false