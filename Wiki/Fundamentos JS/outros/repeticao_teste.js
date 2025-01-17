/*
	Autor: Wendel Gomes Silva
	Descrição: Estrutura de repetição.
*/

var objeto = ["Manga","Banana","Laranja","Limão"];

/*
O laço for...in  interage sobre propriedades enumeradas de um objeto.
Para aqueles que conhecem o laço de repetição for(var i=0; i < 10; i++) ele é semelhante, 
porém, com particularidades e mais simplicidade na utilização.

variavel:
Uma propriedade diferente do objeto é atribuida em cada iteração.
objeto:
Objeto com as propriedades enumeradas.
*/

//for in
for( var variavel in objeto){
	alert("for in: " + variavel + " = " + objeto[variavel]);
}

//for
for (var i = 0; i<=10; i++){
	alert("for: " + i + " ");
}

//while
var l = 0;
while(l < 3){
	l++;
	alert("while: " + l);
}

//do while
var f = 0;
do{
	f++;
	alert("do while: " + f);
}while(f < 10);


