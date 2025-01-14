/*

Herança com Classes

Classes também suportam herança, permitindo que uma classe 
herde propriedades e métodos de outra classe:

*/

class Animal{
    constructor(nome){
        this.nome = nome;
    }

    fazerSom(){
        return `${this.nome} está fazendo um som.`;
    }
}

class Gato extends Animal {
    fazerSom() {
        return `${this.nome} está latindo.`;
    }
}

const alfonsoCat = new Gato('Alfonso');
console.log(alfonsoCat.fazerSom()); 