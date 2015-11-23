/**
 * Created by pastushenko-av on 23.11.2015.
 */
Function.prototype.defer = function(ms){
    var func = this;
    return function(){
      var args = arguments;
      var context = this;
        setTimeout(function(){
            func.apply(context,args);
        }, ms);
    };
};

// проверка
function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.