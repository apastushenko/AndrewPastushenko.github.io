/**
 * Created by pastushenko-av on 06.11.2015.
 */
function descendingOrder(n){
    return +((n + '').split('').sort(function(a,b){return b-a;}).join(''));
}

console.log(descendingOrder(1254859723));