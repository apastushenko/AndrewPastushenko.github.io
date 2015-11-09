/**
 * Created by pastushenko-av on 09.11.2015.
 */
function count (string) {
    result = {};
    string.split('').forEach(function(item){
        if(result[item]){
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    });
    return result;

    //var count = {};
    //string.split('').forEach(function(s) {
    //    count[s] ? count[s]++ : count[s] = 1;
    //});
    //return count;
}

console.log(count("abaa"));