/**
 * Created by pastushenko-av on 06.11.2015.
 */
function add() {
    var sum = 0;
    if (arguments){
        for (var i=0; i < arguments.length; i++){
            sum += arguments[i] * (i+1);
        };
    };
    return sum;

    //for (var n = 0, i = 0; i < arguments.length; i++) {
    //    n += arguments[i] * (i + 1)
    //}
    //
    //return n
};

console.log(add(1,2,3));