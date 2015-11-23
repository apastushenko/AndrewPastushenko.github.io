/**
 * Created by pastushenko-av on 16.11.2015.
 */
//Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.
function CoffeeMachine(power, capacity) {
    var waterAmount, power;
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    //this.setPower = function(power){
    //    if (power < 0) {
    //        throw new Error("Значение должно быть положительным");
    //    }
    //    power = power;
    //};

    this.getPower = function(){
        return power;
    };
}