const teste = {
    nome: 'teste',
    idade: 10
};

console.log(teste?.idade);
console.log(teste?.altura ?? teste?.endereco ?? teste?.idade);