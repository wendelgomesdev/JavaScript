/*
	Autor: Wendel Gomes Silva
	Descrição: Spread operator. 
*/

//Usando em um array
let primeirosNumeros = [1,2,3];

let todosNumeros = [...primeirosNumeros, 4,5,6];

alert(todosNumeros)

//Usando em um objeto
let pessoa = {
	nome: 'Wendel',
	idade: 27,
	profissao: 'Empreendedor'
}

let novaPessoa = {
	...pessoa,
	ano_atual: 2050,
	cidade: 'São Paulo'
}
