var nombre = document.getElementById("txtNombre");

var replica = document.getElementById("replica");


// Crear un evento de teclado
nombre.addEventListener("keyup", function(){
		replica.innerHTML = nombre.value;
});