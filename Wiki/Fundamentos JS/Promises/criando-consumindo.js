/*

Promises (ou "Promessas") são um recurso do JavaScript 
para trabalhar com operações assíncronas de uma forma mais 
organizada e legível do que usando apenas callbacks. 
Elas representam um valor que pode estar disponível 
agora, no futuro ou nunca.

Uma Promise é como uma promessa na vida real: 
você promete que algo vai acontecer no futuro. 
Essa promessa pode ser:

Cumprida (resolve): A operação foi bem-sucedida.
Rejeitada (reject): Algo deu errado.
Quando você cria uma Promise, ela começa no estado 
de pendente (pending) e depois vai para um dos estados:

Fulfilled (resolvida): Deu certo, e temos o resultado.
Rejected (rejeitada): Deu errado, e temos o motivo do erro.


Explicação com uma analogia:

Imagine que você pediu um empréstimo no banco. 
O gerente diz:

"Eu vou analisar sua solicitação."
Nesse momento, a promessa está pendente.

Se ele aprovar:
A promessa será cumprida e você receberá o dinheiro.

Se ele rejeitar:
A promessa será rejeitada, e ele vai te dizer o motivo.

*/

// Criando uma Promise:
const minhaPromise = new Promise((resolve, reject) => {
    const sucesso = true; // Simulando sucesso ou falha
    
    if (sucesso) {
        resolve("Promessa cumprida!"); // Chama resolve se der certo
    } else {
        reject("Promessa rejeitada!"); // Chama reject se der errado
    }
});

// Consumindo uma Promise:
minhaPromise
    .then(resultado => {
        console.log(resultado); // "Promessa cumprida!"
    })
    .catch(erro => {
        console.log(erro); // "Promessa rejeitada!" se algo deu errado
    });

