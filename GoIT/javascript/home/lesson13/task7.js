/**
 * Created by pastushenko-av on 20.11.2015.
 */
function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    // унаследовать
    Machine.apply(this, arguments);

    var food = []; // приватное свойство food
    this.addFood = function() {
        if (!this._enabled) {
            throw new Error("Холодильник выключен");
        }
        if (food.length + arguments.length >= this._power / 100) {
            throw new Error("Нельзя добавить, не хватает мощности");
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]); // добавить всё из arguments
        }
    };

    this.getFood = function() {
        // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
        return food.slice();
    };

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
