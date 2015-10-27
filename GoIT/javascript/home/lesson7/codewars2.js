/**
 * Created by user on 27.10.2015.
 */
function createSecretHolder(secret) {
    var _secret = secret;
    return {
        setSecret: function(s) {
            _secret = s;
        },
        getSecret: function() {
            return _secret;
        }
    };
}