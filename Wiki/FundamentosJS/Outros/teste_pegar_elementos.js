/*
	Autor: Wendel Gomes Silva
	Descrição: Elementos HTML. 
*/

window.onload = function () {
	var botao = document.getElementById("ativ_func");
	botao.addEventListener("click", mostrar_pess, false);
}

function mostrar_pess() {
	var formulario = document.getElementById('teste_form');
	var nome_guard = formulario.nome.value;
	var idade_guard = formulario.idade.value;
	document.getElementById('mostrar_pess').innerHTML = nome_guard + " tem " + idade_guard + " anos de idade.";
}
	

