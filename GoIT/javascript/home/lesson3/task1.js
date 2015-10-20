/**
 * Created by pastushenko-av on 09.10.2015.
 */
// noprotect
while(true){
    var num = +prompt('Enter a number more then 100: ', '');
    if (num == null) break;
    if(num > 100){
        console.log(num);
        break;
    }
}