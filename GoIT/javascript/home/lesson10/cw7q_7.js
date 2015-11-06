/**
 * Created by pastushenko-av on 06.11.2015.
 */
function reverseIt(data){
    if(typeof(data) === 'string'){
        return data.split('').reverse().join('');
    }
    else if (typeof(data) === 'number'){
        return +(data+'').split('').reverse().join('');
    };
    return data;

    //switch (typeof data){
    //    case 'string':return data.split("").reverse().join("");
    //    case 'number':return +((data+'').split("").reverse().join(""));
    //    default: return data;
    //}
}
