/**
 * Created by pastushenko-av on 22.10.2015.
 */
function getVillainName(birthday){
    firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
    lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
    return firstNames[birthday.getMonth()] + ' ' + lastNames[birthday.getDate() % 10]
}

//function getVillainName(birthday){
//    objMonth = {
//        1: "The Evil",
//        2: "The Vile",
//        3: "The Cruel",
//        4: "The Trashy",
//        5: "The Despicable",
//        6: "The Embarrassing",
//        7: "The Disreputable",
//        8: "The Atrocious",
//        9: "The Twirling",
//        10: "The Orange",
//        11: "The Terrifying",
//        12: "The Awkward",
//    };
//
//    objDate = {
//        0: "Mustache",
//        1: "Pickle",
//        2: "Hood Ornament",
//        3: "Raisin",
//        4: "Recycling Bin",
//        5: "Potato",
//        6: "Tomato",
//        7: "House Cat",
//        8: "Teaspoon",
//        9: "Laundry Basket",
//    };
//
//    var firstName, lastName;
//    firstName = birthday.getMonth();
//    lastName = birthday.getDate() % 10;
//
//    return objMonth[firstName] + ' ' + objDate[lastName];
//}