var btn = document.getElementById("boton");
var btn2 = document.getElementById("boton2");

var angulo = 30;

btn.addEventListener("click", function(){
	//alert("Hice clic sobre el article rojo");
	
	var anguloAGirar = "rotate(" + angulo + "deg)";  // rotate(30deg)
	btn.style.transform = anguloAGirar;
	angulo = angulo + 30;
});

//mouseover, mouseenter, mousemove, mouseleave, mouseout
btn2.addEventListener("mousemove", function(){
	var anguloAGirar = "rotate(" + angulo + "deg)";  // rotate(30deg)
	btn2.style.transform = anguloAGirar;
	angulo = angulo + 30;	
})