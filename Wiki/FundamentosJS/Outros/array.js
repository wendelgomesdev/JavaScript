let lista_de_nomes = ['Wendel', 'Itagiane', 'Lucas', 'Carlos']

function exibir() {
    let lista = document.getElementById('lista');

    for (let i = 0; i < lista_de_nomes.length; i++) {
        let item = document.createElement("li");
        item.textContent = lista_de_nomes[i];
        lista.appendChild(item);
    }
    
}