/**
 * Created by pastushenko-av on 16.11.2015.
 */
//�������� ��������� ������ ��� ���������� �������� power, ����� ������� ��� ��� ������ �������� ���������.
function CoffeeMachine(power, capacity) {
    var waterAmount, power;
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ���� ������, ��� " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    //this.setPower = function(power){
    //    if (power < 0) {
    //        throw new Error("�������� ������ ���� �������������");
    //    }
    //    power = power;
    //};

    this.getPower = function(){
        return power;
    };
}