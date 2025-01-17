function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome:');

    if (texto == '' || texto == null){
        alert('Por favor, digite seu nome!')
    }else{
        area.innerHTML = area.innerHTML +', ' + texto;
    }
    
}