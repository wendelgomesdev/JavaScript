/*
	Autor: Wendel Gomes Silva
	Descrição: Estudo dos operadores. 
*/

function calcular_imc() {
	var formulario = document.getElementById("formulario");

	for (var prop in formulario){
		alert(formulario.length);
	}

	var kilos = +formulario.kl.value;
	var metros = +formulario.mt.value;
	var centimetros = +formulario.cm.value;

	var altura = (metros * 100 + centimetros)/100;
	var imc = kilos / (altura * altura);
	formulario.imc.value = imc.toFixed(2);

	if (imc < 16) {
		formulario.classificacao.value = "Magreza grave";
	}else if(imc > 16 && imc < 17){
		formulario.classificacao.value = "Magreza moderada";
	}else if(imc > 17 && imc < 18.5){
		formulario.classificacao.value = "Magreza Leve";
	}else if(imc > 18.5 && imc < 25 ){
		formulario.classificacao.value = "Saudável";
	}else if(imc > 25 && imc < 30){
		formulario.classificacao.value = "Sobrepeso";
	}else if(imc > 30 && imc < 35){
		formulario.classificacao.value = "Obesidade Grau I";
	}else if(imc > 35 && imc < 40){
		formulario.classificacao.value = "Obesidade Grau II (severa)";
	}else{
		formulario.classificacao.value = "Obesidade Grau III (mórbida)";
	}
	
}