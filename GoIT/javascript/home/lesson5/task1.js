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
    for(var key in obj){
        if (obj[key] > maxTasks) maxTasks = obj[key];
    }
    return maxTasks
}

console.log(seachMaxTasks(tasksCompleted));
