/**
 * Created by pastushenko-av on 04.11.2015.
 */
// Write a function suffle(arr) to shuffle an array.
function suffle(arr){
    for (var i=0 ; i<arr.length ; i++){
        var random = Math.floor(Math.random()*arr.length);
        var temp = arr[i];

        arr[i] = arr[random];
        arr[random] = temp;
    }
    return arr;
};

var sortArr = [1,2,3,4,5,6,7,8,9];
console.log(suffle(sortArr));