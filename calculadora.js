function insert(num){
	//recebe o valor do usuario
	var num1 = document.getElementById('resposta').innerHTML;
	//imprime simultaneamento no espaço com id = resposta
	document.getElementById('resposta').innerHTML = num1 + num;
}
	//clear apagar tudo no espaço com id = resposta
function Clear(){
	document.getElementById('resposta').innerHTML = ' ';
}
	//back apaga somente o ultimo numero digitado
function Back(){
	//aloca a string digitada
	var resultado = document.getElementById('resposta').innerHTML;
	//remove o ultimo digito
	document.getElementById('resposta').innerHTML = resultado.substring(0, resultado.length -1);
}
	//faz os calculos matematicos
function calculo(){
	var resultado = document.getElementById('resposta').innerHTML;
	if (resultado){
		document.getElementById('resposta').innerHTML = eval(resultado);
	}
	else{
		document.getElementById('resposta').innerHTML = "nada...";
	}
}