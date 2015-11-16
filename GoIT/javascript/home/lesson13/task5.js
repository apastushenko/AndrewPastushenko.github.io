/**
 * Created by pastushenko-av on 16.11.2015.
 */
function Machine(power) {
    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function(amount) {
        waterAmount = amount;
    };

    function onReady() {
        alert('���� �����!');
    }

    this.run = function() {
        if (!this._enabled) {
            throw new Error("��������� ���������");
        }
        setTimeout(onReady, 1000);
    };

}

var coffeeMachine = new CoffeeMachine(10000);
//coffeeMachine.run(); // ������, ��������� ���������!

coffeeMachine.enable();
coffeeMachine.run(); // ...���� �����!