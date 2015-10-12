/**
 * Created by pastushenko-av on 12.10.2015.
 */
function checkStr(str){
    if(str.length > 20){
        return str.substring(0,20) + '...';
    }
    return str;
}

console.log(checkStr('Aa aaaaa aaaaa aaaaa!aaaaa'));