const condition = eval("'ok' === 'ok'");

console.log('resultado: ', condition);

if (condition){
    console.log('ok');
}

// Verificação mais complexa
console.log(eval("['ok', 'certo', 'sim', 'positivo', 'finalizar'].includes('Ok'.toLowerCase())"));

