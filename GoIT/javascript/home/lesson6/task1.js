/**
 * Created by user on 21.10.2015.
 */
var obj = {
    className: 'open menu submenu title menu button'
};

function deleteClass(obj, nameClass){
    var arr = obj.className.split(' ');
    while(true){
        var pos = arr.indexOf(nameClass);
        if(pos != -1) arr.splice(pos, 1);
        else break;
    }
    obj.className = arr.join(' ');
}

deleteClass(obj, 'name');
console.log(obj);

deleteClass(obj, 'menu');
console.log(obj);