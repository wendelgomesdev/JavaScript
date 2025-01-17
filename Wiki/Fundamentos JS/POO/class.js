/* 

O que é uma classe?

Uma classe é como uma "receita" ou "modelo" para criar objetos. 
Ela define as propriedades (dados) e métodos (funções) que 
os objetos criados a partir dela terão.

Métodos e Propriedades de Instância

Estes são definidos para cada objeto criado a partir de uma classe. 
Cada instância da classe terá sua própria cópia desses 
métodos e propriedades.

*/

// Definindo uma classe
class Pessoa{
    // O construtor é chamado automaticamente quando criamos um novo objeto
    constructor(nome, idade){
        // Propriedade de instância
        this.nome = nome; // Propriedade 'nome'

        // Propriedade de instância
        this.idade = idade; // Propriedade 'idade'
    }

    // Método de instância
    aprensentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando objetos usando a classe
const pessoaUm = new Pessoa('Astofo', 25);
const pessoaDois = new Pessoa('Frederico', 30);

console.log(pessoaUm.aprensentar());
console.log(pessoaDois.aprensentar());

