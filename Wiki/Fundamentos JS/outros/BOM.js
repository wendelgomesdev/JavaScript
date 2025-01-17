/*
	Autor: Wendel Gomes Silva
	Descrição: Estudo de Eventos. 
*/

window.onload = function () {
	for (var i = 1; i <= 10; i++) {
		var resultado = parseInt(i * i);
		var estrt = i +" X "+ i +" = " + resultado;
		document.getElementById('tabuada').innerHTML = estrt;
	}
}