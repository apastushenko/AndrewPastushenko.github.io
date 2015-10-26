/**
 * Created by user on 15.10.2015.
 */
function getSum () {
    arrNum = [];
    while (true){
        var number = prompt('Enter number: ', '');
        if (number === '' || typeof(number) === 'object' || isNaN(number)) {
            break;
        }
        arrNum.push(+number);
    }

    var sum = 0;
    arrNum.forEach(function(item){
        sum += item;
    });
    return sum;
}

console.log(getSum());