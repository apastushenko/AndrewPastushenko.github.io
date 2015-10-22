/**
 * Created by user on 15.10.2015.
 */
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 110,
    'Anton': 99
};

function seachMaxTasks(obj){
    var maxTasks = 0;
    var name = '';
    for(var key in obj){
        if (obj[key] > maxTasks){
            maxTasks = obj[key];
            name = key;
        }
    }
    return name;
}

console.log(seachMaxTasks(tasksCompleted));
