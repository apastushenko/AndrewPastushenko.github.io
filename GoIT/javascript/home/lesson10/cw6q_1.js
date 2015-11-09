/**
 * Created by pastushenko-av on 09.11.2015.
 */
//The function 'fibonacci' should return an array of fibonacci numbers.
// The function takes a number as an argument to decide how many no. of elements to produce.
// If the argument is less than or equal to 0 then return empty array
//Example:
//fibonacci(4); // should return [0,1,1,2]
//fibonacci(-1); // should return []

function fibonacci(n) {
    if (n < 1){ return []; }
    else if (n === 1){ return [1]; }
    else if (n === 2){ return [0,1]; }
    else{
        var output = [0,1,1];
        var a = 1 , b = 1;

        for (var i = 1; i < n-2; i++){
            var fib = a + b;
            output.push(fib);
            b = a;
            a = fib;
        };
        return output;
    };

    //if (n <= 0) return [];
    //if (n == 1) return [0];
    //if (n == 2) return [0,1];
    //var res = fibonacci(n-1);
    //res.push(res[res.length-1] + res[res.length-2]);
    //return res;
}