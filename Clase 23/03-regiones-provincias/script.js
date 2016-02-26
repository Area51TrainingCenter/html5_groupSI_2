// Esta función o tarea nos trae la lista de regiones que está almacenada en una base de datos
function listarRegiones(){
	var lista = [
		{id:1, nombre: "Lima"},
		{id:2, nombre: "Arequipa"}
	];

	console.log("Consulta a la base de datos");

	return lista;
};

function listarProvincias(){
	var lista = [
		{idProvincia:1, id:1, nombre: "Oyón"},
		{idProvincia:2, id:1, nombre: "Lima"},
		{idProvincia:3, id:1, nombre: "Canta"},
		{idProvincia:4, id:1, nombre: "Yauyos"},
		{idProvincia:5, id:2, nombre: "Camaná"},
		{idProvincia:6, id:2, nombre: "Yanahuara"},
		{idProvincia:7, id:2, nombre: "Arequipa"},
	];

	console.log("Consulta a la base de datos");

	return lista;
};

var listadoRegiones, listadoProvincias;

// Verifico si el navegador soporta localStorage
if(window.localStorage) {
	// Sí soporta localStorage
	//Pregunto si hay algo almacenado en la variable "regiones" del localStorage
	if(window.localStorage.regiones) {
		// Sí hay algo almacenado
		console.log("Consulta al localStorage");
		// Recuperar el valor de la variable "regiones" del localStorage y asignarlo a la variable "listadoRegiones"
		// JSON.parse convierte un texto en un arreglo (o lista)
		listadoRegiones = JSON.parse(window.localStorage.regiones);
	} else {
		// No hay valor almacenado en la variable "regiones" del localStorage.
		// Hacemos una consulta a la base de datos a través de la función "listarRegiones"
		listadoRegiones = listarRegiones();

		// Guardar la lista de regiones en la variable "regiones" del localStorage
		// JSON.stringify convierte un arreglo (o lista) en un texto
		window.localStorage.regiones = JSON.stringify(listadoRegiones);
	}

	if(window.localStorage.provincias) {
		console.log("Consulta al localStorage");
		listadoProvincias = JSON.parse(window.localStorage.provincias);
	} else {
		listadoProvincias = listarProvincias();
		window.localStorage.provincias = JSON.stringify(listadoProvincias);
	}
} else {
	// No lo soporta
	listadoRegiones = listarRegiones();
	listadoProvincias = listarProvincias();
}


// Obtiene una referencia al select que tiene el id="regiones"
var selRegiones = document.getElementById("regiones");
var selProvincias = document.getElementById("provincias");

// Recorrer todo el arreglo llamado "listadoRegiones" para crear las etiquetas "option"
for(var reg = 0; reg < listadoRegiones.length; reg++ ) {
	// Creo una etiqueta llamada "option"
	var opcion = document.createElement("option");
	// Asignar el valor "id" al atributo "value" de la etiqueta "option"
	opcion.value = listadoRegiones[reg].id;
	// Asignar el valor "nombre" a la etiqueta "option"
	opcion.innerHTML = listadoRegiones[reg].nombre;
	// opcion es <option value="1">Lima</option>

	// Agrega la etiqueta "option" (creada previamente) a la etiqueta "select" con el id=regiones
	// selRegiones es una referencia a la etiqueta "select" con el id="regiones"
	selRegiones.appendChild(opcion);
}
for(var reg = 0; reg < listadoProvincias.length; reg++ ) {
	if(listadoProvincias[reg].id == listadoRegiones[0].id) {
		var opcion = document.createElement("option");
		opcion.value = listadoProvincias[reg].idProvincia;
		opcion.innerHTML = listadoProvincias[reg].nombre;
		selProvincias.appendChild(opcion);		
	}
}


selRegiones.addEventListener("change", function(){
	selProvincias.innerHTML="";
	for(var reg = 0; reg < listadoProvincias.length; reg++ ) {
		 if(listadoProvincias[reg].id == selRegiones.value) {
			var opcion = document.createElement("option");
			opcion.value = listadoProvincias[reg].idProvincia;
			opcion.innerHTML = listadoProvincias[reg].nombre;
			selProvincias.appendChild(opcion);		 	
		 }

	}

})