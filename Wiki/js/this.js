/* 

Em JavaScript, this é uma palavra-chave que se refere ao objeto atual. 
O valor de this depende do contexto em que é utilizado. 
Dentro de um método de um objeto, por exemplo, this se refere 
ao próprio objeto no qual o método está sendo chamado.

*/

const pessoa = {
    nome: 'João',
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome}`);
    }
  };
  
  pessoa.saudacao();