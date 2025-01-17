// Formas de mostrar objetos JavaScript no terminal usando Node.js

// 1. console.log() - Exibição Simples
const obj1 = { name: "Alice", age: 25, city: "New York" };
console.log("Exibindo com console.log:", obj1);

// 2. console.dir() - Controle Detalhado da Exibição
const obj2 = { name: "Alice", details: { age: 25, city: "New York" } };
console.dir(obj2, { depth: null }); // depth: null exibe todos os níveis de aninhamento

// 3. JSON.stringify() - Formatação Personalizada
console.log("Exibindo com JSON.stringify:", JSON.stringify(obj2, null, 2)); // Indentação de 2 espaços

// 4. util.inspect() - Exibição Avançada
const util = require("util");
console.log("Exibindo com util.inspect:", util.inspect(obj2, { showHidden: false, depth: null, colors: true }));

// 5. Usando Pacotes de Terceiros

// 5.1 prettyjson
// Instale com: npm install prettyjson
const prettyjson = require("prettyjson");
console.log("Exibindo com prettyjson:");
console.log(prettyjson.render(obj2));

// 5.2 chalk
// Instale com: npm install chalk
const chalk = require("chalk");
console.log("Exibindo com chalk:");
console.log(chalk.green(JSON.stringify(obj2, null, 2)));

// 6. Debuggers (Ferramentas Avançadas)
// - Node.js Debugger:
//   Execute: node inspect seuArquivo.js
// - VS Code Debugger:
//   Use um ponto de interrupção para inspecionar objetos diretamente no editor.

/*
Resumo das Ferramentas:
1. console.log() -> Simples e direto
2. console.dir() -> Controle maior sobre profundidade
3. JSON.stringify() -> Conversão para string JSON com personalização
4. util.inspect() -> Inspeção avançada com opções como cores e profundidade
5. Pacotes de Terceiros -> Exibições estilizadas (prettyjson, chalk)
6. Debuggers -> Inspeção interativa
*/
