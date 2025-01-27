// Formas de percorrer objetos em JavaScript

const pessoas = {
    1: 'Wendel',
    1: 'Lucas',
    3: 'Guilherme',
    4: 'João',
    5: 'Julio',
    6: 'Alfredo',
    7: 'Alfonso',
    8: 'Rodolfo'
}

// 1. Usando forEach

console.log('Usando forEach:')
console.log(' ')
Object.keys(pessoas).forEach(function(item) {
    console.log(item + ' - ' + pessoas[item]);
});
console.log(' ')
console.log('=============')
console.log(' ')

// 2. Usando for in

console.log('Usando for in:')
console.log(' ')
for (let item in pessoas){
    console.log(item + ' - ' + pessoas[item]);
}
console.log(' ')
console.log('=============')
console.log(' ')

// 3 Usando Object.entries

console.log('Usando Object.entries:')
console.log(' ')
for (let [key, value] of Object.entries(pessoas)){
    console.log(key + ' - ' + value);
}
console.log(' ')
console.log('=============')