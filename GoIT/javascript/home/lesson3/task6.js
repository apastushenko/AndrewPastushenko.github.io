/**
 * Created by pastushenko-av on 09.10.2015.
 */
function pow(x,n){
    var result = x;
    for(var i = n - 1 ; i > 0 ; i--){
        result *= x;
    }
    return result;
};

console.log(pow(2,6));