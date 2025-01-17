/*
	Autor: Wendel Gomes Silva
	Descrição: RegExp - Expressões Regulares.
*/

/*
Analisar uma data.
var regex = /^\d{2}\/\d{2}\/\d{2,4}$/;

var guard_teste = regex.test("22/11/1996");

console.log(guard_teste);
*/

/*
Analisar Email.
var regex = /^\w+@\w+\.\w{2,}/;

var guard_teste = regex.test("wendel@outlook.com.br");

console.log(guard_teste);
*/

/*
AGRUPADORES

var regex = /\d[\d,.]\d/;

var guard_teste = regex.test("22548489.2544554");

console.log(guard_teste);


var regex = /^[A-Z]{2}[a-z]{4}-\d{2}[A-Z]\w[A-Z]/;

var guard_teste = regex.test("ABabcd-54TyY");

console.log(guard_teste);
*/

//BUSCAS E SUBSTITUIÇÔES.
//Usando o RegExp e metodos do objeto String(match), (replace).
//var str = "Porco aranha, porco aranha, ele é um porco e um pouco de aranha!";
//alert("Encontrar palavras em uma string e dividir em um Array: "+str.match(/porco/ig));
//alert("Procurar e substituir: "+str.replace(/porco/ig, "elefante"));

//BUSCAS E SUBSTITUIÇÔES GUARDANDO TRECHOS DO TEXTO EM VARIAVEIS.
//var url = "www.w3schools.com/jsref/jsref_match.asp";
//alert(url.replace(/(www.w3schools.com)\/\w{5}\/(\w{11})\.\w+/,"http://$1/$2"));












