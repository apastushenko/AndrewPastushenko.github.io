/**
 * Created by pastushenko-av on 23.11.2015.
 */
function f() {
    this.name = '����';
    console.log( "������: " + this.name );
}

Function.prototype.defer = function(ms){
    setTimeout(this, ms);
};

f.defer(1000); // ������� "������" ����� 1 �������
