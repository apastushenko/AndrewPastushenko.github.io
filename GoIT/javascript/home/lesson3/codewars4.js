/**
 * Created by pastushenko-av on 09.10.2015.
 */
function lovefunc(flower1, flower2){
    // moment of truth
    return (flower1 + flower2) % 2 ? true : false;
    //return (flower1 + flower2) % 2 == 1;
}