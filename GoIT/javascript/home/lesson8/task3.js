/**
 * Created by user on 02.11.2015.
 */
function User(fullName){
    this.fullName = fullName;

    function splitFullName(fullName){
        if(fullName) return fullName.split(' ');
    };

    Object.defineProperties(this, {
        firstName: {
            get: function(){ return splitFullName(this.fullName)[0]; },
            set: function(firstName_new) { this.fullName = firstName_new + ' ' + this.lastName; }
        },
        lastName: {
            get: function(){ return splitFullName(this.fullName)[1]; },
            set: function(lastName_new) { this.fullName = this.firstName + ' ' + lastName_new; }
        }
    });
};

var vasya = new User('Александр Пушкин');

console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);
vasya.firstName = 'Василий';
console.log(vasya.fullName);