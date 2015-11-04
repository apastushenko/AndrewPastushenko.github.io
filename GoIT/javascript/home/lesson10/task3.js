/**
 * Created by pastushenko-av on 04.11.2015.
 */
//Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
//Example string: webmaster
//Expected Output: abeemrstw
//Assume punctuation and numbers symbols are not included in the passed string.
function alhabeticalFunc(str){
    return str.split('').sort().join('');
}
console.log(alhabeticalFunc('webmaster'));