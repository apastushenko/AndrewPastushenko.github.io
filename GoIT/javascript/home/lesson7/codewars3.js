/**
 * Created by user on 27.10.2015.
 */
var make_lazy = function (fn) {
    return fn.bind.apply(fn, arguments);
};