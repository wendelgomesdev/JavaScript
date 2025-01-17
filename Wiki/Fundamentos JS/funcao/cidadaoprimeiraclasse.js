// Função em JS é First-Class Object (citizens)
// Higher-order function

//Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () { }

//Armazenar em um array
const array = [function (a, b) {return a+b}, fun1, fun2]
console.log(array[0](2, 3))

//ARmazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// 