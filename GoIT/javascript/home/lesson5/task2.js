/**
 * Created by user on 15.10.2015.
 */
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(obj){
    var clone = {};
    for(var key in obj){
        //if(isNaN(+obj[key])){
        if(!+obj[key]) clone[key] = obj[key];
        else clone[key] = obj[key] * 2;
    }
    return clone;
}

var newImage = multiplyNumeric(image);
console.log(newImage);

//console.log(!NaN);

