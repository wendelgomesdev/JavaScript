/*
	Autor: Wendel Gomes Silva
	Descrição: Local Storage. 
*/

window.onload = function () {
	var texto_cap = document.getElementById('texto');
	var gravar_bt = document.getElementById('grav');
	var exibir_bt = document.getElementById('exib');

	gravar_bt.onclick = function () {
		localStorage.setItem("texto", texto_cap.value);
	}

	exibir_bt.onclick = function () {
		texto_cap.value = localStorage.getItem("texto");
	}
}