var boton01 = document.getElementById("boton01");
var boton02 = document.getElementById("boton02");
var boton03 = document.getElementById("boton03");

function botonPresionado(e){
	alert(e.target.name);
}



boton01.addEventListener("click", botonPresionado);
boton02.addEventListener("click", botonPresionado);
boton03.addEventListener("click", botonPresionado);