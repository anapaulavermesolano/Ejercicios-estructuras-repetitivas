var suma = 0;

// EJERCICIO 2
function btn3() {
	for(i = 0; i < 10; i++) {
		numero = Number(prompt("Porfavor ingresa tu número " + (i+1)));
		suma = suma + numero; // Se almacena la suma
	}	
	document.getElementById("ejm3").innerHTML = 
	"La suma de tus números es " + suma;
}