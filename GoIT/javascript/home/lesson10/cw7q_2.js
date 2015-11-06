/**
 * Created by pastushenko-av on 06.11.2015.
 */
function swap(str){
    var result = '';
    str.split('').forEach(function(item){
        (item === item.toUpperCase()) ? result += item.toLowerCase() : result += item.toUpperCase();
    });
    return result;
}

console.log(swap('CodEwArs'));

//function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }
//function swap(str) { return str.split("").map(swapCase).join("") }