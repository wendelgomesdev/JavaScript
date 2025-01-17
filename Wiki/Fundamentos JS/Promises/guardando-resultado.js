// Para guardar o resultado de uma Promise em uma variável, 
// você precisa usar async/await, pois isso permite que o 
// JavaScript espere a resolução da Promise antes de continuar 
// a execução. Vamos ver como isso funciona:

const myPromise = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve('Promessa cumprida!');
    } else {
        reject('Promessa rejeitada!');
    }
});

async function obterResultado() {
    try {
        const resultado = await myPromise;
        return resultado;
    } catch (erro) {
        return erro;
    }
}

const response = async () => {
    const resposta = await obterResultado();
    console.log('resposta guardada: ', resposta)
};

response()