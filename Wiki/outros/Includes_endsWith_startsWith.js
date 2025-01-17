/*
	Autor: Wendel Gomes Silva
	Descrição: Includes endsWith startsWith
*/

let nomes = ['Matheus', 'Lucas', 'Joao']

alert('A lista possui o nome Lucas? - ' + nomes.includes('Lucas'));

let nome = 'Matheus';
alert(nome + ' termina com "eus" - ' + nome.endsWith('eus'));

alert(nome + ' começa com: "Ma" - ' + nome.startsWith('Ma'));