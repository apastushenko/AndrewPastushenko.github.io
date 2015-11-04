/**
 * Created by pastushenko-av on 03.11.2015.
 */

function sumArgs() {
    var args = [].slice.call(arguments);
    return args.reduce(function(a, b) {
        return a + b;
    });
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

//function sumArgs() {
//    // скопируем reduce из массива
//    arguments.reduce = [].reduce;
//    return arguments.reduce(function(a, b) {
//        return a + b;
//    });
//}
//
//function sumArgs() {
//    // запустим reduce из массива напрямую
//    return [].reduce.call(arguments, function(a, b) {
//        return a + b;
//    });
//}