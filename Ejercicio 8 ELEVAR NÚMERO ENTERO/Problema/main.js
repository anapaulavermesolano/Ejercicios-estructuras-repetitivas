function btn8() {
	var text = "";
	var numero = parseInt (prompt("escribe tu numero"));
	var potencia = parseInt (prompt("escribe tu potencia"));
	var resultado = Math.pow(numero, potencia);
	text += "<br>" +"El resultado es:" + " " + resultado;
	console.log('"El resultado es:" + " " + resultado');
	document.getElementById("ejm8").innerHTML = text;
}