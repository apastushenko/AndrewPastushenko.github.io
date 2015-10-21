/**
 * Created by user on 21.10.2015.
 */
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(arr){
    uniqueItemsArr = [];
    for(var i=0; i<arr.length; i++){
        if (uniqueItemsArr.indexOf(arr[i]) == -1) uniqueItemsArr.push(arr[i]);
    }
    return uniqueItemsArr;
}

console.log( unique(strings) ); // кришна, харе, 8-()