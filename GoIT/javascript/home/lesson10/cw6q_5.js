/**
 * Created by pastushenko-av on 09.11.2015.
 */
var typer = (function() {
    function getClass(obj){
        return {}.toString.call(obj).slice(8,-1);
    }
    return {
        isNumber: function(arg){return (getClass(arg) === 'Number' && isFinite(arg));},
        isString: function(arg){return (getClass(arg) === 'String');},
        isArray: function(arg){return (Array.isArray(arg));},
        isFunction: function(arg){return (getClass(arg) === 'Function');},
        isDate: function(arg){return (getClass(arg) === 'Date');},
        isRegExp: function(arg){return (getClass(arg) === 'RegExp');},
        isBoolean: function(arg){return (getClass(arg) === 'Boolean');},
        isError: function(arg){return (getClass(arg) === 'Error');},
        isNull: function(arg){return (arg === null);},
        isUndefined: function(arg){return (getClass(arg) === 'Undefined');}
    };
}());

//var typer = (function(){
//    function type(val, expected) {
//        var ret = {}.toString.call(val).match(/[A-Z]\w+/)[0]
//        return ret != 'Object' ?
//        ret === expected :
//        val.toString().match(/\b\w+/g)[1] === expected;
//    }
//
//    return {
//        isNumber:    function(x){return type(x,'Number') && !isNaN(x)},
//        isString:    function(x){return type(x,'String')},
//        isArray:     function(x){return type(x,'Array')},
//        isFunction:  function(x){return type(x,'Function')},
//        isDate:      function(x){return type(x,'Date')},
//        isRegExp:    function(x){return type(x,'RegExp')},
//        isBoolean:   function(x){return type(x,'Boolean')},
//        isError:     function(x){return type(x,'Error')},
//        isNull:      function(x){return type(x,'Null')},
//        isUndefined: function(x){return type(x,'Undefined')}
//    }
//})()

typer.isArray([1,2,3]);
typer.isArray(true);
typer.isString('Aaa aaa aaa');
