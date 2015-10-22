/**
 * Created by pastushenko-av on 22.10.2015.
 */
function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    return array.reduce(function(prev, curr){
        return prev + curr;
    });
}