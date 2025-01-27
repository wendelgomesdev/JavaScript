/*
	Autor: Wendel Gomes Silva
	Descrição: Estudo de Eventos. 
*/

window.onload = function () {
	var bt = document.getElementById('botao');
	bt.addEventListener("click", um, false);
}
 	
function um() {
	alert("Oi meu chapa!!!");
}