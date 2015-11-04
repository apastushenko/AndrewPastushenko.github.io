/**
 * Created by pastushenko-av on 04.11.2015.
 */
//Write a JavaScript function that accepts a string as a parameter and converts the first
//letter of each word of the string in upper case. Go to the editor
function convertString(string){
    return (string.split(' ').map(function(word){
        return word[0].toUpperCase() + word.slice(1);
    })).join(' ');
}
console.log(convertString('the quick brown fox'));