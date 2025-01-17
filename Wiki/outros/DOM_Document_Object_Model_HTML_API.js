/*
	Autor: Wendel Gomes Silva
	Descrição: Estudo DOM. 
*/

window.onload = function () {
	//Receber o elemento HTML e guardar para acessa-lo como objeto.
	var receb_element = document.getElementById('lista');
	//Lista que será adicionada no elemento.
	var frutas = ["Banana","Limão","Uva","Laranja","Maça","Goiaba", "Pessego", "Ameixa","Mexerica"];
	//Estrutura for para formar uma lista.
	for (var i = 0; i < frutas.length; i++) {
		//innerHTML será o conteudo do interior do elemento.
		receb_element.innerHTML +="<li>" + frutas[i] + "</li>";
	}

	var divCont = document.getElementById("ancoras");
	divCont.onclick = function () {
		alert("OK!");
	}

}
