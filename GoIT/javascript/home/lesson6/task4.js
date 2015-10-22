/**
 * Created by user on 21.10.2015.
 */
var vasya = { name: 'vasya', age: 23 };
var masha = { name: 'masha', age: 18 };
var misha = { name: 'Misha', age: 18 };
var vovochka = { name: 'vovochka', age: 6 };

var people = [ vasya , masha , misha, vovochka ];

people.sort(function compare(a,b){
    if(a.age > b.age) return 1;
    if(a.age < b.age) return -1;
});

console.log(people[0].age);

people.forEach(function(item){
    console.log(item.name);
});