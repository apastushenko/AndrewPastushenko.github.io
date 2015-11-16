/**
 * Created by pastushenko-av on 11.11.2015.
 */
(function printNumbersInterval(){
    var i = 1;
    setTimeout(function tick(){
        console.log(i);
        if(i<20) setTimeout(tick, 100);
        i++;
    } ,100);

})();