var i = 0;
function btn7() {
	var text = "";
	var producto = prompt("Escribe tu número");
	while(i<= 12) {
		var respuesta = producto*i;
		text += "<br>" + producto + " * " + i + " es: " + respuesta;
		console.log('producto + " x " + i + "es: " + respuesta');
		i++;
	}
	document.getElementById("ejm7").innerHTML = text;
}