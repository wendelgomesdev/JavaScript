/*
	Autor: Wendel Gomes Silva
	Descrição: Elementos HTML. 
*/

window.onload = function () {
	document.getElementById("clique_aki").onclick = function(){
		let username = document.getElementById("nome").value;
		document.getElementById('mensagem_view').innerHTML = 'Olá, ' + username + ', seja bem-vindo(a)!';
	};
}
	

