/*

Objetos Literais

Um objeto literal é uma maneira simples e direta de criar 
objetos em JavaScript. Ele é definido usando {} (chaves) 
e você pode adicionar propriedades e métodos diretamente.

*/

const pessoa = {
    nome: 'Wendel',
    cumprimentar: function(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

console.log(pessoa.nome);
pessoa.cumprimentar();

/*

Características:

    - Simplicidade: São ótimos para estruturas de dados simples 
    e configurações rápidas.

    - Sem herança complexa: Eles não possuem a estrutura mais 
    robusta para herança, embora você possa definir protótipos manualmente.

    - Rápido e direto: Ideal para quando você precisa criar apenas um ou poucos objetos com a mesma estrutura.

Limitações:

    - Não são adequados para cenários onde múltiplos objetos 
    semelhantes precisam compartilhar comportamento (herança).

    - Ficam menos organizados em projetos maiores ou quando 
    você deseja encapsular lógica e comportamento.

Qual usar?

    - Objetos Literais:

        * Quando você precisa de uma solução rápida e simples.

        * Para dados estáticos ou objetos únicos.

    - Objetos de Classe:

        * Para cenários com muitas instâncias semelhantes.

        * Quando você precisa de herança ou abstração para organizar 
        seu código.

*/