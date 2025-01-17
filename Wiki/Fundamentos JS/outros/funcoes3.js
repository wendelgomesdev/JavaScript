function escrevaMensagem(mensagem){
    console.log(mensagem)
}

escrevaMensagem('Atenção este é um teste!')

function escreverEndereco(rua, cidade, pais, ...complementos) {
    console.log(rua)
    console.log(cidade)
    console.log(pais)
    console.log(complementos)
}

escreverEndereco('Rua Antenor Domingues', 'São Paulo', 'Brasil', 'Cep: 08473-340', 'Bairro: Cidade Tiradentes');

// função auto invocavel
(function (nome) {
    console.log('executei', nome);
}('Wendel'));

// funcão anonima
let subtraiNumeros = function(a, b, c) {
    return a - b - c;
}

console.log(subtraiNumeros(15, 3, 5));

// funções Callback

function operacao(numb1, numb2, operador) {
   
}
