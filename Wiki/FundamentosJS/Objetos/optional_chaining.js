const teste = {
    nome: 'teste',
    idade: 10,
    teste: {}
};

if (Object.keys(teste.teste).length != 0) {
    console.log(teste.teste);
}
console.log(teste?.idade);
console.log(teste?.altura ?? teste?.endereco ?? teste?.idade);