/*
	Autor: Wendel Gomes Silva
	Descrição: Temporizador
*/

function acao(){
	document.write('Executando...<br/>')
}

// Executar de tempo em tempo
setInterval(acao, 1000);

// Executar apó um tempo determinado
setTimeout(acao, 2000);