/**
 * Created by pastushenko-av on 06.11.2015.
 */
function duplicates(arr) {
    for (var dup = [], i = 0; i < arr.length; i++) {
        var n = arr[i]
        if (arr.indexOf(n, i + 1) >= 0 && dup.indexOf(n) < 0) {
            dup.push(n)
        }
    }

    return dup
}
