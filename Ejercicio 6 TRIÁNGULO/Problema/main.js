var text = "";
function btn6() {
	for(ca=1; ca <= 500; ca++){
		for(co=1; co <= 500; co++) {
			for(hp=1; hp <= 500; hp++) {
				if (hp*hp === ca*ca + co*co) {
					text +="<br> Los lados son : " + " hp = " +hp+ " ca = " +ca+ " co = " +co;
					console.log('<br> Los lados son : " +hp+ " " +ca+ " " +co');
				}
			}
		}
	}
	document.getElementById("ejm6").innerHTML = text;
}