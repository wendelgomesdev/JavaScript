const condition = eval("'ok' === 'ok'");

console.log('resultado: ', condition);

if (condition){
    console.log('ok');
}

console.log(eval("['ok', 'certo', 'sim', 'positivo', 'finalizar'].includes('Ok'.toLowerCase())"));

