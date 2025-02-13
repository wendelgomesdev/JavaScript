function acao(){
	console.log('Função acao sendo Executada...');
}

// Executar após um tempo determinado
setTimeout(acao, 2000);

function acao_dois(texto){
    console.log('Função acao_dois sendo Executada...', texto);
}

// Executar após temporizador e passar parametros
setTimeout(() => acao_dois('teste 2'), 3000);