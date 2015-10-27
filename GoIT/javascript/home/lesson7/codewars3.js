/**
 * Created by user on 27.10.2015.
 */
var make_lazy = function (fn) {
    return fn.bind.apply(fn, arguments);
};

//var make_lazy = function (fn) {
//    return fn.bind.apply(fn, arguments);
//};
//function add(a,b){
//    return a+b;
//}
//console.log( make_lazy(add, 2 ,3)())