/*
	Autor: Wendel Gomes Silva
	Descrição: Spread operator. 
*/

function minha_lista(...nomes){
	alert(nomes);
}

minha_lista('Matheus', 'Astolfo', 'Rodolfo', 'Maria');


function minha_lista_frutas(frutas, ...novasfrutas){
	let todas_frutas = [
		...frutas,
		...novasfrutas
	];

	return todas_frutas;
}

let frutas = ['Banana', 'Maça', 'Laranja'];

let todas_frutas = minha_lista_frutas(frutas, 'Goiaba', 'Manga', 'Pera')

