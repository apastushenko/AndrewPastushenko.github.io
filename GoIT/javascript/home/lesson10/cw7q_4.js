/**
 * Created by pastushenko-av on 06.11.2015.
 */
function pattern(n){
    var output= "";
    if(n>0){
        results = [];
        var line = Array(n).join(' ');

        for(var i=1; i<=n; i++){
            line += (i%10);
        }

        results.push(line);

        for(var i=1; i<n; i++){
            results.push(results[i-1].substring(1)+' ')
        }
        output = results.join("\n");
    }

    return output;

    //var i, line = '', lines = [];
    //for (i=1;i<=n;i++) line += i%10;
    //for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
    //return lines.join("\n");
}

console.log(pattern(5));