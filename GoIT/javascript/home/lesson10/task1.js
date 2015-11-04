/**
 * Created by pastushenko-av on 03.11.2015.
 */
//Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк.
//Написать метод extractNumber или extractString, который будет возвращать массив.
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

function extractNumber(obj){
    var arrRes = [];
    for(key in obj){
        if (Number(obj[key])) arrRes.push(obj[key])
    }
    return arrRes;
};

function extractString(obj){
    var arrRes = [];
    for(key in obj){
        if (isNaN(obj[key])) arrRes.push(obj[key])
    }
    return arrRes;
};

console.log(extractNumber(obj));
console.log(extractString(obj));