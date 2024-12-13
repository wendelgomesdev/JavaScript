/*
	Autor: Wendel Gomes Silva
	Descrição: Usando métodos some e every. 
*/

let nomes = ['Matheus', 'Lucas', 'Joao'];

alert(nomes.some(nome => nome === 'Matheus'));

nomes = [
	{nome: 'Astolfo', idade: 30},
	{nome: 'Clodoaldo', idade: 45},
	{nome: 'Maria', idade: 15}
];

alert(nomes.every(nome => nome.idade >= 18));

