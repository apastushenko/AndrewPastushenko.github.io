/**
 * Created by pastushenko-av on 12.10.2015.
 */
var spamList = ['spam', 'sex', 'dead'];

function checkSpam(str, spamList) {
    var strInLowerCase = str.toLowerCase();
    var spamListItem;
    for (var i = 0; i < spamList.length; i++) {
        spamListItem = spamList[i].toLowerCase();
        if (strInLowerCase.indexOf(spamListItem) >= 0)
            return true;
    }
    return false;
}


console.log(checkSpam('get new Sex videos', spamList));
console.log(checkSpam('[SPAM] How to earn fast money?', spamList));
console.log(checkSpam('New PSD template', spamList));