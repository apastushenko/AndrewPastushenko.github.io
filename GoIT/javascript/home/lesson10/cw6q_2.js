/**
 * Created by pastushenko-av on 09.11.2015.
 */
function isPangram(string){
    var stringLetters = string.toLowerCase().split('');
    var letters = "abcdefghijklmnopqrstuvwxyz".split('');
    for (var i =0; i < letters.length; i++){
        if (stringLetters.indexOf(letters[i]) < 0){
            return false;
        };
    };
    return true;

    //string = string.toLowerCase();
    //return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    //    return string.indexOf(x) !== -1;
    //});
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));