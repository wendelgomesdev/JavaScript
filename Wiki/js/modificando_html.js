function minhaFuncao(){
    let area = document.getElementById('area');
    let texto = prompt('Você chamou a função. Digite algo para modificar o html...');
    
    if (texto == ''|| texto == null){
        alert('Digite algo, não deixe o campo vazio!');
    } else {
        area.innerHTML = texto;
    }

}