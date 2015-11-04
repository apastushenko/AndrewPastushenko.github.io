/**
 * Created by pastushenko-av on 04.11.2015.
 */
//Write a JavaScript function which accepts an argument and returns the type.
//Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getType(arg){
    return typeof arg;
}
console.log(getType({}));           //"object"
console.log(getType(true));         //"boolean"
console.log(getType(function(){})); //"function"
console.log(getType(2));            //"number"
console.log(getType('text'));       //"string"
console.log(getType(undefined));    //"undefined"
