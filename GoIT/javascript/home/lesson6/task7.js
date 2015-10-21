/**
 * Created by user on 21.10.2015.
 */
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr){
    var forCheckArr = [];
    var clearArr = [];
    arr.forEach(function(item){
        var sortItem = item.toUpperCase().split('').sort().join('');
        if(forCheckArr.indexOf(sortItem) == -1) {
            forCheckArr.push(sortItem);
            clearArr.push(item)
        }
    });
    return clearArr;
}

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'