/*
	Autor: Wendel Gomes Silva
	Descrição: Operações em Array
*/

const lista = [1,2,3,4,5,6];

const nova_lista = lista.map(function(item){
    return item * 5;
});

console.log(nova_lista)


const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

console.log(soma)


const encontrar = lista.find(function(item){
    return item === 6;
});

console.log(encontrar);