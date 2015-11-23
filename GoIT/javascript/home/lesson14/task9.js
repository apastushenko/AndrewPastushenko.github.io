/**
 * Created by pastushenko-av on 23.11.2015.
 */
function Menu(state) {
    this._state = state || Menu.STATE_CLOSED;
}

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
    this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
    this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
    switch (this._state) {
        case Menu.STATE_OPEN:
            return '�������';

        case Menu.STATE_CLOSED:
            return '�������';
    }
};

Menu.prototype.showState = function() {
    console.log(this._stateAsString());
};

var AnimatingMenu = Menu; // �������� �� ��� ��� ��� AnimatingMenu

// �������������..
var menu = new AnimatingMenu();

menu.showState(); // �������

menu.open();
menu.showState(); // ��������

setTimeout(function() {
    menu.showState(); // �������

    menu.close();
    menu.showState(); // ������� (�������� ��� ��������)
}, 1000);