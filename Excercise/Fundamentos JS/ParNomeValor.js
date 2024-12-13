//Par nome/valor

const saudacao = 'eai' // contexto léxico 1

function exec() {
    const saudacao = 'é nois' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua do Pedro',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)