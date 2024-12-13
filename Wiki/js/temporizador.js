/*
	Autor: Wendel Gomes Silva
	Descrição: Temporizador
*/

window.onload = function () {
	setInterval(rolar_segundos, 1000);

}

var segundo_guard = 0+"0";
var minuto_guard = 0+"0";
var hora_guard = 0+"0";

function rolar_segundos() {
	if (segundo_guard < 59) {
		segundo_guard++;

		if (segundo_guard < 10) {
			segundo_guard = "0"+segundo_guard;
		}
	}else if(segundo_guard == 59 && minuto_guard < 59){
		segundo_guard = 0+"0";
		minuto_guard++;

		if (minuto_guard < 10) {
			minuto_guard = "0"+minuto_guard
		}
	}
	if(minuto_guard == 59 && segundo_guard == 59 && hora_guard < 23){
		segundo_guard = 0+"0";
		minuto_guard = 0+"0";
		hora_guard++;
		if (hora_guard < 10) {
			hora_guard = "0"+hora_guard;
		}

		}else if(minuto_guard == 59 && segundo_guard == 59 && hora_guard == 23){
			segundo_guard = 0+"0";
			minuto_guard = 0+"0";
			hora_guard = 0+"0";
	}
	document.getElementById("secundos").innerHTML = segundo_guard;
	document.getElementById("minutos").innerHTML = minuto_guard+":";
	document.getElementById("horas").innerHTML = hora_guard+":";
}
