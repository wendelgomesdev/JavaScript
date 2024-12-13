/*
	Autor: Wendel Gomes Silva
	Descrição: Spread operator. 
*/

//Usando em um array
let primeiros_numeros = [1,2,3];

let todos_numeros = [...primeiros_numeros, 4,5,6];

alert(todos_numeros)

//Usando em um objeto
let pessoa = {
	nome: 'Wendel',
	idade: 27,
	profissao: 'Empreendedor'
}

let nova_pessoa = {
	...pessoa,
	ano_atual: 2050,
	cidade: 'São Paulo'
}
