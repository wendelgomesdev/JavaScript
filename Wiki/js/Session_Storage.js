/*
	Autor: Wendel Gomes Silva
	Descrição: Local Storage. 
*/

window.onload = function () {
	var texto_cap = document.getElementById('texto');
	var gravar_bt = document.getElementById('gravar');
	var exibir_bt = document.getElementById('exibir');

	gravar_bt.onclick = function () {
		sessionStorage.setItem("texto", texto_cap.value);
	}

	exibir_bt.onclick = function () {
		texto_cap.value = sessionStorage.getItem("texto");
	}
}