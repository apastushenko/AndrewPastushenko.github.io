/**
 * Created by pastushenko-av on 12.10.2015.
 */
function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    }
    return n;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(10));
