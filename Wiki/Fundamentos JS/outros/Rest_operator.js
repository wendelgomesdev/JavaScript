/*
	Autor: Wendel Gomes Silva
	Descrição: Spread operator. 
*/

function minhaLista(...nomes){
	alert(nomes);
}

minhaLista('Matheus', 'Astolfo', 'Rodolfo', 'Maria');


function minhaListaFrutas(frutas, ...novasfrutas){
	let todasFrutas = [
		...frutas,
		...novasfrutas
	];

	return todasFrutas;
}

let frutas = ['Banana', 'Maça', 'Laranja'];

let todasFrutas = minhaListaFrutas(frutas, 'Goiaba', 'Manga', 'Pera')

