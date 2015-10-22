/**
 * Created by user on 15.10.2015.
 */
function calculateNumbers(){
    arrNum = [];
    while(true){
        var num = prompt('Enter number: ', '');
        if(!+num || +num === 0) arrNum.push(num);
        else break;

        sum += +num;
    }

    var sum = 0;
    arrNum.forEach(function(item){
        sum += item;
    });
    return sum;
}

console.log(calculateNumbers());