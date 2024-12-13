/*
	Autor: Wendel Gomes Silva
	Descrição: Poltronas disponiveis no cinema.
*/

//Executar função ao carregar a pagina. 
window.onload = function() {
	carregar_poltronas();

	var imagens = document.getElementsByTagName('img');
	
	for (var i = 0; i < imagens.length; i++) {
			imagens[i].onclick = verificar_status(i);
	}
}

function verificar_status(poltrona) {
	return function(){
		var end_img = document.getElementsByTagName('img')[poltrona].src;
		var msg = "";
		if (end_img.indexOf("poltronas_disponiveis.png") > 0) {
			msg = "Poltrona disponivel";
		}else if(end_img.indexOf("poltronas_indisponiveis.png") > 0){
			msg = "Poltrona Indisponivel";
		}else{
			msg = "Esta poltrona é toda sua!!!";
		}

		alert(msg);
		
	}
	
}

//true=disponivel
//false=insdisponivel
var poltronas = [false, true, false, true, false, true, true, true, false];
function carregar_poltronas() {
	//Guardar os elementos img numa variavel.
	var imagens = document.getElementsByTagName('img');
	//Estrutura para carregar poltronas de acordo com a condição delas "true" e "false".
	for (var i = 0; i < imagens.length; i++) {

		/*Se ao repetir o loop o valor da poltrona seja "true", 
		mudar o src para a imagem de poltrona disponivel */
		if (poltronas[i]) {
			imagens[i].src = "img/poltronas_disponiveis.png";
		}else{
			/*Caso seja "false" o src será da editado 
			para imagem de poltrona indisponivel.*/
			imagens[i].src = "img/poltronas_indisponiveis.png";
		}
		
	}
}

//Função para usuario selecionar poltrona desejada.
function selecionar_poltrona() {
	var imagens = document.getElementsByTagName('img');
	//Estrutura para marcar poltrona desejada.
	for (var i = 0; i < poltronas.length; i++) {
		if(poltronas[i]) {
			imagens[i].src = "img/poltronas_selecionada.png";

			//Verificar se o usuario selecionou a poltrona que está sendo indicado.
			var escolha = confirm("Deseja selecionar está poltrona");
			if (escolha) {
				/*Caso a escolha seja positiva editar o 
				src para imagem de poltrona selecionada*/
				imagens[i].src = "img/poltronas_selecionada.png";
				break;
			}else{
				/*Caso seja negativa restaurar pra imagem de poltrona disponivel*/
				imagens[i].src = "img/poltronas_disponiveis.png";
			}
			
			
		}
	}
}

//Função para selecionar poltronas juntas para casais.
function selecionar_casal() {
	var imagens = document.getElementsByTagName('img');
	for (var i = 0; i < poltronas.length; i++) {
		//Verificar se há duas poltronas disponiveis e juntas.
		if(poltronas[i] && poltronas[i+1]) {
			//Caso exista editar os src das imagens para poltronas selecionadas.
			imagens[i].src = "img/poltronas_selecionada.png";
			imagens[i+1].src = "img/poltronas_selecionada.png";

			/*Se o usuario confirmar a sua escolha editar os src 
			das duas poltrona desejadas, para a imagem de poltrona selecionada.*/
			var escolha = confirm("Deseja selecionar estas poltronas");
			if (escolha) {
				imagens[i].src = "img/poltronas_selecionada.png";
				imagens[i+1].src = "img/poltronas_selecionada.png";
				break;
			}else{
				imagens[i].src = "img/poltronas_disponiveis.png";
				imagens[i+1].src = "img/poltronas_disponiveis.png";
			}
			
			
		}
	}
}







