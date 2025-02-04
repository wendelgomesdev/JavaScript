/*
	Autor: Wendel Gomes Silva
	Descrição: Estrutura de repetição for.
*/

/*

for tradicional
Usado quando se sabe exatamente quantas vezes o loop deve ser executado.

for (inicialização; condição; incremento) {
    // Código a ser executado
}

*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}


/*
O laço for...in  interage sobre propriedades enumeradas de um objeto.
Para aqueles que conhecem o laço de repetição for(let i=0; i < 10; i++) ele é semelhante, 
porém, com particularidades e mais simplicidade na utilização.

variavel:
Uma propriedade diferente do objeto é atribuida em cada iteração.
objeto:
Objeto com as propriedades enumeradas.

for (let propriedade in objeto) {
    // Código a ser executado
}

ATENÇÃO: NÃO É IDEAL PARA PERCORRER ARRAYS, POIS PODE RETORNAR ÍNDICES EM ORDEM INESPERADA.

*/

const pessoa = { nome: "João", idade: 25, cidade: "São Paulo" };
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}

/*

for...of
Percorre elementos de um iterável (Array, String, Map, Set, etc.).

for (let elemento of iteravel) {
    // Código a ser executado
}

Funciona bem para arrays, pois retorna os valores diretamente.

*/

const numeros = [10, 20, 30];
for (let numero of numeros) {
    console.log(numero);
}

/*

forEach (método de array)
Executa uma função para cada elemento do array.

Diferente dos outros for, o forEach não pode ser interrompido com break.

array.forEach((elemento, índice, array) => {
    // Código a ser executado
});


*/

const frutas = ["Maçã", "Banana", "Laranja"];
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`);
});
