/*
	Autor: Wendel Gomes Silva
	Descrição: Estudo DOM CORE API. 
*/

window.onload = function () {

	//Navegar na Arvore do docuemnto

	//Tipo de Nós (Documento, Elemento, Atributo e Texto)

	/*
	Parentesco dos "Nós"
	(Pai=parent, Filho=child, Irmão=sibling)
	*/
	//var div = document.getElementsByTagName('div').item(0);
	//alert("Elemento: "+div);//elemento
	//alert("Pai: "+div.parentNode);//Pai
	//alert("Filhos: "+div.childNodes);//Filhos

	//Apresentar filho de um "Nó"
	//var apres_filhos = div.childNodes.item(1);//Primeiro filho do "Nó"
	//alert(apres_filhos.nodeName);//Nome do "Nó"
	//alert(apres_filhos.nodeType);//Tipo de "Nós"

	//alert(apres_filhos.childNodes.item(0));

	
	/*
	Manipular Nós

	°creatElement
	°createTextNode
	°createAttribute
	
	Atribuição de "Nós"

	°appendChild
	°removeChild
	°replaceChild

	*/

	var ul = document.createElement("ul");
	var div = document.body.childNodes.item(3);
	div.appendChild(ul);
	var lista = ["Banana","Uva","Maça","Goiaba","Melancia","Laranja","Limão","Mamão","Manga","Maracuja"];

	for (var i = 0; i < lista.length; i++) {
			
		if ((i % 2) == 0) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(lista[i]));
			ul.appendChild(li);
			
		}else{
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(lista[i]));
			ul.appendChild(li);
			li.setAttribute("style","color:#609458");
		}
		
	}

	//Manipulando pela class 
	var elemento = document.getElementsByClassName('teste');
	elemento.item(0).setAttribute("style", "color:red");

}


