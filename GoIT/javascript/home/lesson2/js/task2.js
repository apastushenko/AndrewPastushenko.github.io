/**
 * Created by pastushenko-av on 05.10.2015.
 */
var number;

number = prompt('Введите любое целое число?','');

if(+number < 0){
    alert('-1');
}else if(+number == 0){
    alert('0');
}else if(+number > 0){
    alert('1');
}else{
    alert('NaN! WTF?');
}