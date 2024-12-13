/*
	Autor: Wendel Gomes Silva
	Descrição: Estruturas Condicionais. 
*/

var sexo = "F";
switch (sexo) {
	case "M":
		alert("Macho");
		break;
	case "F":
		alert("Femea");
		break;
	default:
		alert("Indefinido");
}

var alimento = "frango";

switch (alimento) {
	case "Manga":
	case "Abacaxi":
	case "Uva":
	case "Limão":
	case "Morango":
	case "Melao":
		alert("Fruta");
		break;
	case "Bisteca":
	case "Filé":
	case "Bife":
	case "Figado":
		alert("Carne");
		break;
	default:
		alert("Alimento não reconhecido!")

}