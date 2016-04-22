function btn5() {
	var text = "";
	for (var i = 0; i<= 100; i++) {
		if (i % 2 == 0) {
			text += "<br>i " + i + " es par";
			console.log("i " + i + " es par");
		}
	}
	document.getElementById("ejm5").innerHTML = text;
}