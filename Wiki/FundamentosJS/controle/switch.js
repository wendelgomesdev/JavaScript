const teste = function (idade) {
    switch (idade){
        case 1:
            console.log('Você ainda é um bebê')
        break
        case 5: 
        console.log('Você ainda é uma criança')
        break
        default: 
        console.log("Digite um valor valido!")
    }
}

teste(4)
teste(5)
teste(1)
