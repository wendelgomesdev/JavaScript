/*
	Autor: Wendel Gomes Silva
	Descrição: RegExp - Expressões Regulares.
*/

function validar() {
	//Receber o elemento formulario e guardar em uma variavel.
	var formulario = document.getElementById('validar_form');
	//Como o CPF deve ser digitado no campo. 
	var formato_cpf = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
	//Receber o numero do cpf do campo e guardar em uma variavel.
	var num_cpf = formulario.cpf.value;
	//Verificar se o cpf foi digitado corretamente.
	if (formato_cpf.test(num_cpf)) {
		/*Se o teste for positivo então formatar o cpf digitado 
		da seguinte forma: 123.456.789-12 */
		formulario.cpf.value = formulario.cpf.value.replace(formato_cpf, "$1.$2.$3-$4");
	}else{
		//Caso o teste seja negativo informar o erro.
		alert("O CPF deve conter no maximo 11 digitos. Sem pontos e traços.");
	}

	var formato_email = /^([\w-]+(\.[\w-]+))@(([\w-]+\.)\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;
	var end_email = formulario.email.value;
	if (formato_email.test(end_email)) {
		alert("E-mail: "+formato_email.test(end_email));
	}
	
}














