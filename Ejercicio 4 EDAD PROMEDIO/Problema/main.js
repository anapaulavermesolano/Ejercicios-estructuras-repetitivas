

// EJERCICIO 2
function btn4() {
	var suma = null;
	var i = 1;
	var cantidad = parseInt(prompt("Dime cuantos alumnos son?"));
	while(i<= cantidad) {
		var number = parseInt(prompt("Dime la edad del alumno " + i + ":"));
		suma = suma + number;
		i++;
	}
	promedio = suma/cantidad;
	document.getElementById("ejm4.1").innerHTML = 
	"La edad promedio es: " + promedio;
}

function botn4() {
	var suma = null;
	var m = 1;
	var cantidad = parseInt(prompt("Dime cuantos alumnos son?"));
	do {
		var number = Number(prompt("Dime la edad del alumno " + m + ":"));
		suma = suma + number;
		m++;
	}while(m<= cantidad);
	promedio = suma/cantidad;
	document.getElementById("ejm4.2").innerHTML = 
	"La edad promedio es: " + promedio;
}

function bton4() {
	var suma = null;
	var cantidad = parseInt(prompt("Dime cuantos alumnos son?"));
	for(var x = 1; x<= cantidad; x++) {
		var number = Number(prompt("Dime la edad del alumno " + x + ":"));
		suma = suma + number;
	};
	promedio = suma/cantidad;
	document.getElementById("ejm4.3").innerHTML = 
	"La edad promedio es: " + promedio;
}
