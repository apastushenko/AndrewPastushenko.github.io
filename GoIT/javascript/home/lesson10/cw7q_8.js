/**
 * Created by pastushenko-av on 06.11.2015.
 */
var Calculator = {
    average: function() {
        if(arguments.length === 0){return 0;}
        else{
            var sum = 0;
            for (var i = 0; i < arguments.length; i++){
                sum += arguments[i];
            };
            return sum / arguments.length;
        };
    }
};

//var Calculator = {
//    average: function() {
//
//        return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
//                return prev + next;
//            }, 0) / (arguments.length || 1);
//    }
//};