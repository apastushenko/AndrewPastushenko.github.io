/**
 * Created by pastushenko-av on 23.11.2015.
 */
function Menu(options) {
    options = Object.create(options);
    options.width = options.width || 300;
    options.height = options.height || 300;

    console.log( options.width ); // ������ width �� ����������
    console.log( options.height ); // ������ height �� ��������� �������
}

Menu({
    width: 100,
});