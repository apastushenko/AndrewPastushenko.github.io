/**
 * Created by pastushenko-av on 23.11.2015.
 */
function Menu(options) {
    options = Object.create(options);
    options.width = options.width || 300;
    options.height = options.height || 300;

    console.log( options.width ); // возьмёт width из наследника
    console.log( options.height ); // возьмёт height из исходного объекта
}

Menu({
    width: 100,
});