/**
 * Created by pastushenko-av on 03.11.2015.
 */
function spread(func, args) {
    return func.apply(this, args);
}