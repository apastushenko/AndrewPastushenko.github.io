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
    // ������������
    Machine.apply(this, arguments);

    var food = []; // ��������� �������� food
    this.addFood = function() {
        if (!this._enabled) {
            throw new Error("����������� ��������");
        }
        if (food.length + arguments.length >= this._power / 100) {
            throw new Error("������ ��������, �� ������� ��������");
        }
        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]); // �������� �� �� arguments
        }
    };

    this.getFood = function() {
        // �������� ��� � ����� ������, ����� ����������� � ��� �� ������ food
        return food.slice();
    };

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("�������");
fridge.addFood("���", "�������");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // �������, ���, �������

// ���������� ��������� �� ������ �� ��� � ������������
fridgeFood.push("�����", "�����");

console.log( fridge.getFood() ); // ������ ��-��������: �������, ���, �������
