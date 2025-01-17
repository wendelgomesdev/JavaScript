/* 

"use strict"; é uma expressão em JavaScript que ativa o modo estrito, 
introduzido no ECMAScript 5. Ele ajuda a evitar erros comuns, melhora 
a segurança do código e torna as práticas de codificação mais seguras. 
Algumas características incluem a prevenção de declarações implícitas 
de variáveis, tornar o eval mais seguro e proibir o uso de 
palavras-chave reservadas futuras.

*/

"use strict";
// Tentativa de atribuir a uma variável não declarada
nome = 'Wendel'; // Isso resultará em um erro em modo estrito
console.log('Olá, ' + nome);
console.log(nome);