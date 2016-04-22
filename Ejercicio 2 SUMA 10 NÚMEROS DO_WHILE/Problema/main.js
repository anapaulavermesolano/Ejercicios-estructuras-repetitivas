var suma = 0;

// EJERCICIO 2
var i = 0;
function btn2() {
	do {
		numero = Number(prompt("Porfavor ingresa tu número " + (i+1)));
		suma = suma + numero; // Se almacena la suma
		i++;
	}while(i < 10);
	document.getElementById("ejm2").innerHTML = 
	"La suma de tus números es " + suma;
}