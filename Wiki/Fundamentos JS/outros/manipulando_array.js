lista_de_nomes = ['Wendel', 'José', 'Lucas', 'Carlos']

function exibir(){
    let lista = document.getElementById('lista');

    // Limpa a lista removendo todos os elementos existentes
    lista.innerHTML = '';

    for (let i = 0; i < lista_de_nomes.length; i++) {
        let item = document.createElement("li");
        item.textContent = lista_de_nomes[i];
        lista.appendChild(item);
    }
    
}

function buscar_indice_nome(nome_encontrar){
    if (nome_encontrar){
        indice_nome = lista_de_nomes.indexOf(nome_encontrar);
        return indice_nome;
    }
}

function editar(){
    let nome_encontrar = document.getElementById('nome_buscar').value;
    let nome_novo = document.getElementById('nome_novo').value;

    indice_nome = buscar_indice_nome(nome_encontrar);
    lista_de_nomes[indice_nome] = nome_novo;
    exibir();
}

function adicionar_nome(){
    let nome_novo = document.getElementById('nome_novo').value;
    verificar_existencia_nome = buscar_indice_nome(nome_novo);
    if (verificar_existencia_nome !== -1){
        alert('Esse nome já vou cadastrado!')
    }
    else{
        if (nome_novo !== ''){
            lista_de_nomes.push(nome_novo);
            exibir();
        }else{
            alert('O campo novo nome está vazio!')
        }
        
    }
    
}

