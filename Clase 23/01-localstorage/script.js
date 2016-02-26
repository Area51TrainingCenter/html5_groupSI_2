// Si el navegador no soporta localStorage, window.localStorage será igual a "undefined". Javascript interpreta "undefined" como false
if(window.localStorage) {

	var seleccionColor = document.getElementById("colorFondo");

	// Este evento detecta cuando el usuario cambia el valor
	// seleccionado en la etiqueta "select" (combobox, lista desplegable)
	seleccionColor.addEventListener("change", function(e){
		// alert("el usuario cambió de color");
		// console.log(e.target);
		// console.log(seleccionColor.value);
		document.body.style.backgroundColor = seleccionColor.value;
		window.localStorage.colorUsuario = seleccionColor.value;
	});

	// Recuperar el valor del color previamente seleccionado por el usuario
	var colorSeleccionado = window.localStorage.colorUsuario;

	// Si el usuario ha seleccionado un color previamente, la variable colorSeleccionado deberá ser diferente de vacío
	if(colorSeleccionado) {
		// Si el usuario seleccionó un color, ese color lo pongo como color de fondo de la página
		document.body.style.backgroundColor = colorSeleccionado;


		// Recupera todas las etiquetas con el nombre "option"
		var opciones = document.getElementsByTagName("option");

		// Recorre todas las etiquetas option para averiguar cual tiene el valor del atributo "value" igual al color seleccionado por el usuario
		for(var corr=0; corr<opciones.length; corr++) {
			if(opciones[corr].value == colorSeleccionado) {
				// Cuando encuentra la etiqueta que tiene el valor del atributo "value" igual al color seleccionado, hace que esa etiqueta option aparezca como la opción por defecto o seleccionada
				opciones[corr].selected = true;
			}
		}

	}


}

