// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(5, 7)
imprimirSoma(2) // a funcao é executada sem erro mesmo com só 1 parametro
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // tambem inserindo mais doque o configurada
imprimirSoma() // tambem estando vazia

//Funcao com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())