/**
 * Created by pastushenko-av on 22.10.2015.
 */
function isValidWalk(walk) {
    if(walk.length !== 10){
        return false;
    }
    else{
        return walk.filter( function(direction){return direction === 'n';} ).length ===
            walk.filter( function(direction){return direction === 's';} ).length &&
            walk.filter( function(direction){return direction === 'e';} ).length ===
            walk.filter( function(direction){return direction === 'w';} ).length;
    };
};