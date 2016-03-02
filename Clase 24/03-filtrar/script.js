// Equivalente a una base de datos de empleados
var empleados = [
	{nombre: "sergio", apellido: "hidalgo"},
	{nombre: "monica", apellido: "veliz"},
	{nombre: "manuel", apellido: "paredes"},
	{nombre: "paola", apellido: "gazzolo"},
	{nombre: "javier", apellido: "parodi"}
];

// contenedor es una etiqueta article en la cual voy a mostrar la base de datos de empleados
var contenedor = document.getElementById("datos");

// filtro es una caja de texto con la cual filtro la base de datos de empleados
var filtro = document.getElementById("filtro");

// Esta función o tarea lo que hace es crear un tabla de empleados dentro del article "contenedor"
function crearTabla(emple){
	contenedor.innerHTML = "";
	var tabla = document.createElement("table");

	emple.forEach(function(item){
		var tr = document.createElement("tr");

		var td1 = document.createElement("td");
		td1.innerHTML = item.nombre;

		var td2 = document.createElement("td");
		td2.innerHTML = item.apellido;

		tr.appendChild(td1);
		tr.appendChild(td2);

		tabla.appendChild(tr);
	});

	contenedor.appendChild(tabla);
};

// Esta función fnFiltro se ejecuta cuando una persona a liberado una tecla del teclado
function fnFiltro(){
	// Obtener el texto a filtrar
	var valorAFiltrar = filtro.value;

	// Crear una variable de tipo arreglo llamada "arr"
	// Dentro de esa variable "arr" estará la base de datos filtrada
	var arr = [];

	// Recorre toda la base de datos de empleados y filtra todos aquellos items que cumplan con el filtro
	empleados.forEach(function(item) {
		// El if está verificando si el texto a filtrar cumple con algún item de la base de datos
		if(item.nombre.indexOf(valorAFiltrar) != -1 || item.apellido.indexOf(valorAFiltrar) != -1) {

			// Si algún item de la base de datos de empleados, coincide con el filtro. 
			arr.push(item);
		}
	});

	// Borra toda el contenido del article "contenedor"
	// Luego vuelve a crear la tabla
	crearTabla(arr);
};

crearTabla(empleados);

filtro.addEventListener("keyup", fnFiltro);