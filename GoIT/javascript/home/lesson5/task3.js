/**
 * Created by user on 15.10.2015.
 */

function calculateNumbers(){
    var sum = 0;
    while(true){
        //window.prompt(message, default);
        var num = window.prompt('Enter number: ', '');
        if(!+num || +num === 0) sum += +num;
        else break;
    }
    return sum;
}

console.log(calculateNumbers());