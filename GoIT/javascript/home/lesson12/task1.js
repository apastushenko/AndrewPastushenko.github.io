/**
 * Created by pastushenko-av on 11.11.2015.
 */
(function printNumbersInterval(){
    var counter = 1;
    var timerID = setInterval(function(){
        console.log(counter);
        if (counter == 20) clearInterval(timerID);
        counter++;
    }, 100);
})();