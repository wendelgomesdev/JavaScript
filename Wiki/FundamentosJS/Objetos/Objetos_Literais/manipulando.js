// Manipulando objetos literais

const celular = {
	modelo : "S10",
	cor : "Preto"
};

// Adiciona uma nova propriedade
celular.marca = 'Samsung';

// Adiciona um novo método
celular.tocar = function(){
    console.log('Biririririririri')
};

/*

Usando o ponto .

    * O nome da propriedade deve ser um identificador 
    válido em JavaScript.

    * É fixo, ou seja, você escreve o nome diretamente 
    no código.

    * Não pode ser usado para nomes dinâmicos ou inválidos como 
    identificadores (exemplo: números, espaços, 
    caracteres especiais).

*/


const fruta = {};
const propriedade = 'nome';
const nomeFruta = 'goiaba';
fruta[propriedade] = nomeFruta;

fruta['preço'] = 2.5;

/*

Usando colchetes []

    - Permite usar expressões dinâmicas para definir 
    ou acessar o nome da propriedade.

    - Suporta nomes inválidos como identificadores, 
    incluindo números, espaços e caracteres especiais.

----------------------------------

Quando escolher cada um?

    - Use ponto . para acesso mais simples e intuitivo, 
    quando o nome da propriedade é fixo e válido.

    - Use colchetes [] quando precisar de:

        * Nomes dinâmicos gerados em tempo de execução.

        * Propriedades que não são identificadores 
        válidos (como strings com espaços ou caracteres especiais).
*/

let objeto2 = {
	nome : "Carro",
	cor : "Azul"
}

let paises = new Array(objeto1, objeto2, "Argentina", "Estados Unidos", "Pêru");

for (let i = 0; i < paises.length; i++) {
	console.log(paises[i]);
}

const carro = {
	marca: 'ford',
	modelo: 'KA',
	buzina: function(){
		return 'Biiiiiiiiiiiiii'
	}
}

// Playground

const prod1 = {}
prod1.nome = 'Celular Ultra Mega Power'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome:'Camisa branca',
    preco: 200.60
}

console.log(prod2)



let pessoa = {
    nome: 'Wendel',
    idade: '24',
    sexo: 'Masculino',
    endereco: 'R. Antenor Domingues, 29'
}

console.log(pessoa.idade)