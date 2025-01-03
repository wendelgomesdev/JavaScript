/*
	Autor: Wendel Gomes Silva
	Descrição: Poltronas disponiveis no cinema.
*/

//Executar função ao carregar a pagina. 
window.onload = function() {
	carregar_palitos();
}

//true=Inteiro
//false=Queimado

var palitos = [true, true, true, false, false, true, false, true];

function carregar_palitos() {
	var imagens = document.getElementsByTagName('img');
	for (var i = 0; i < imagens.length; i++) {

		if (palitos[i]) {
			imagens[i].src = "img/palito_fosforo.png";
		}else{
			imagens[i].src = "img/palito_fosforo_queimado.png";
		}
	}
}

function selecionar_palito(){
	//verificar se há algum palito inteiro.
	function verifiar_disponibilidade(chk) {
		return chk == true;
	}
	//Se ouver algum palito inteiro então proceguir com o processo.
	if (palitos.some(verifiar_disponibilidade)) {
		var imagens = document.getElementsByTagName('img');
		for (var i = 0; i < imagens.length; i++) {
			if (palitos[i]) {
				imagens[i].src = "img/palito_fosforo_selecionado.png";

				var escolha = confirm("Deseja acender este palito?");
				if(escolha){
					imagens[i].src = "img/palito_fosforo_fogo.png";
					palitos[i] = false;
					break;
				}else{
					imagens[i].src = "img/palito_fosforo.png";
				}
			}//fim do if que verifica se o palito presento no loop pode ser aceso.
		}//fim do for.
	}
	else{
		alert("Não há mais palitos para ser aceso!");
	}
}










