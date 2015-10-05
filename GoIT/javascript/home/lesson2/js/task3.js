/**
 * Created by pastushenko-av on 05.10.2015.
 */
var login, password;
login = prompt('Enter login: ', '');
if(login == 'admin'){
    password = prompt('Enter password', '');
    if(password == 'passw0rd'){
        alert('Welcome home!');
    }else if(password === null){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }
}else if(login === null){
    alert('Canceled');
}else{
    alert('Access denied');
}
