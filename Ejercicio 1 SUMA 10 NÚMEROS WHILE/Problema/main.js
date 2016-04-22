var suma = 0; // VARIABLE SUMA DEFINIDO PARA TODOS LOS EJERCICIOS!!!!

// EJERCICIO 1
var i = 0;
function btn1() {
	while(i < 10) {
		numero = Number(prompt("Porfavor ingresa tu número " + (i+1)));
		suma = suma + numero; // Se almacena la suma
		i++;
	}
	document.getElementById("ej1").innerHTML = 
	"La suma de tus números es " + suma;
}