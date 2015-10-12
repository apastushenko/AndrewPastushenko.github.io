/**
 * Created by pastushenko-av on 09.10.2015.
 */
outer:
    for( var i = 2; i < 20; i++){
        for(var j = 2; j < i; j++){
            if( i % j == 0 ) continue outer;
        }

        console.log(i + ' ');
    }