/*

O que é o AsyncLocalStorage no Node.js?

É uma ferramenta para guardar e recuperar dados de forma local 
e isolada dentro de uma mesma requisição ou contexto assíncrono.

- Funciona como uma "memória local" que sobrevive entre vários awaits.

- É muito usado para armazenar informações de usuário, id de requisição, 
logs, dados de sessão, etc, sem precisar passar manualmente esses dados em cada função.

*/

const readline = require('readline');
const { asyncLocalStorage } = require('./context');
const { executarModuloA } = require('./moduloA');
const { executarModuloB } = require('./moduloB');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar() {
  rl.question('Digite um valor para guardar no contexto (ou "sair" para terminar): ', (resposta) => {
    if (resposta.toLowerCase() === 'sair') {
      console.log('Finalizando...');
      rl.close();
      return;
    }

    const contexto = { valorDigitado: resposta };

    asyncLocalStorage.run(contexto, () => {
      console.log('[App] Contexto iniciado:', asyncLocalStorage.getStore());

      executarModuloA();
      executarModuloB();

      console.log('--------------------------');
      
      // Pergunta novamente
      perguntar();
    });
  });
}

perguntar();