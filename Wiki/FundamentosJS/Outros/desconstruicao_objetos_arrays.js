// Criando objeto
const pessoa = {
    nome: 'Wendel',
    idade: '28',
    cargo: 'Dev'
};

// Desconstruindo objeto chave unica
let { nome } = pessoa; 

// Desconstruindo objeto pegando varias chaves
let { cargo, idade } = pessoa; 

console.log(nome);
console.log(cargo);
console.log(idade);

// Desconstruindo objeto pegando varias 
// chaves e trocando nomes das variaveis
let { cargo : cargoWendel, idade: idadeWendel } = pessoa; 

console.log(' ');
console.log(cargoWendel);
console.log(idadeWendel);

// Criando array
let nomes = ['Wendel', 'Astolfo', 'Rodolfo', 'Lucas'];

// Desconstruindo array pegando varias 
// indices e trocando nomes das variaveis
let  [ nomeUm, nomeDois ] = nomes

console.log(' ')
console.log('Nomes no array modo 1')
console.log(nomeUm)
console.log(nomeDois)

// Desconstruindo array pegando varias 
// indices e trocando nomes das variaveis
let { 0:primeiroNome, 1:segundoNome} = nomes

console.log(' ')
console.log('Nomes no array modo 2')
console.log(primeiroNome);
console.log(segundoNome);