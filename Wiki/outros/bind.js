/* 

O método bind() em JavaScript é usado para criar uma nova função que, 
quando chamada, tem um this (valor do contexto) pré-definido. 
Em outras palavras, ele permite definir explicitamente 
o valor de this quando uma função é chamada, o que é especialmente 
útil em situações onde o valor de this pode se 
comportar de maneira imprevisível.

Ao utilizar o método bind() na função exibirDetalhes e passar 
o objeto carro como argumento, você está criando uma nova função 
exibirDetalhesDoCarro que está "vinculada" ao contexto 
do objeto carro. Isso significa que, quando você chama 
exibirDetalhesDoCarro(), o valor de this dentro da função 
será sempre o objeto carro.

Assim, você pode chamar exibirDetalhesDoCarro() diretamente, 
e o resultado será o mesmo que chamar carro.exibirDetalhes(). 
Isso proporciona uma maneira mais flexível de usar a função 
em diferentes contextos, garantindo que o valor de this 
seja sempre o objeto desejado.

*/

const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    exibirDetalhes: function() {
      console.log(`${this.marca} ${this.modelo}`);
    }
  };
  
  const exibirDetalhesDoCarro = carro.exibirDetalhes.bind(carro);
  
  exibirDetalhesDoCarro(); // Saída: Toyota Corolla