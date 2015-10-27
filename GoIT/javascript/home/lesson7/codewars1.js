/**
 * Created by user on 27.10.2015.
 */
function createFunctions(n) {
    var callbacks = [];

    var factory = function (count){
        return function(){
            return count;
        }
    };

    for (var i=0; i<n; i++) {
        callbacks.push(factory(i));
    }

    return callbacks;
}

var callbacks = createFunctions(5);

for (var i=0; i<callbacks.length; i++) {
    console.log(callbacks[i]());
}