var aleatorio = Math.ceil(Math.random() * 10);

var valorIngresado = prompt("Ingresa un entero");


// if(isNaN(valorIngresado) == true){
if(isNaN(valorIngresado)){
	alert("Por favor ingresa un ENTERO");

} else {

	if(valorIngresado == aleatorio) {
		alert("Acertaste");
	} else {
		alert("Vuelve a intentarlo");
	}

}

