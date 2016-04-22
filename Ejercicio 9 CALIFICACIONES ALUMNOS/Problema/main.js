var suma = null;
var puntaje = 20;
function btn9() {
	for(var i = 1; i<=4; i++) {
		var nota = parseInt(prompt("Dime las notas de los alumnos " + i+": "));
		suma = suma + nota;
		if (puntaje > nota) {
			puntaje=nota;
		}
	}
	var promedio = suma/4;
	document.getElementById("ejm9").innerHTML = '<br>'+ "El promedio de las notas es: "+ promedio + '<br>'+"La menor nota es: "+ puntaje;
}