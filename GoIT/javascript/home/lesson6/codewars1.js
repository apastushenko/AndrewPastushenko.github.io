/**
 * Created by pastushenko-av on 22.10.2015.
 */
function getMissingElement(superImportantArray){
    //TODO
    return superImportantArray.reduce(function (sum, value) {
        return sum - value;
    }, 45);
}