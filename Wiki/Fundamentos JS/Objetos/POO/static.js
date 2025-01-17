/*

Métodos e Propriedades de Classe (Estáticos)
Estes são definidos diretamente na classe e não podem ser acessados 
pelas instâncias. São como os métodos e propriedades estáticos 
no Python (decorados com @staticmethod ou @classmethod).

*/

class Calculadora {
    static somar(a, b) { // Método estático
        return a + b;
    } 

    static PI = 3.1415; // Propriedade estática
}


// Acessando diretamente pela classe
console.log(Calculadora.somar(5, 3));
console.log(Calculadora.PI);

// Não pode ser acessado por instâncias:
const calc = new Calculadora();
console.log(calc.PI);
console.log(calc.somar);

/*

Resumo:

1 - Propriedades/Métodos de Instância:

    - Associados a objetos individuais.
    - Usam this para acessar propriedades e métodos da instância.

2 - Propriedades/Métodos de Classe:

    - Associados diretamente à classe.
    - Declarados com o modificador static.

*/