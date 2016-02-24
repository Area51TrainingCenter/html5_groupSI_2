//Obtener una lista de todas las etiquetas html que se llamen td
var celdas = document.getElementsByTagName("td");

//celdas = [obj_td0, obj_td1, obj_td2, ..., obj_td8]
//celdas es una lista o arreglo o array

var cantidadCeldas = celdas.length;  //número de elementos que hay en la lista celdas

var turno = 1;  //Indica el turno de los jugadores. 1 indica jugador "X". 2 indica jugador "O"

function verificarSiHayGanador(letra){
	var ganador = false;

	//Combinaciones horizontales ganadoras
	if(celdas[0].innerHTML==letra && celdas[1].innerHTML==letra && celdas[2].innerHTML==letra) {ganador=true;}

	if(celdas[3].innerHTML==letra && celdas[4].innerHTML==letra && celdas[5].innerHTML==letra) {ganador=true;}

	if(celdas[6].innerHTML==letra && celdas[7].innerHTML==letra && celdas[8].innerHTML==letra) {ganador=true;}	

	//Combinaciones verticales ganadoras
	if(celdas[0].innerHTML==letra && celdas[3].innerHTML==letra && celdas[6].innerHTML==letra) {ganador=true;}

	if(celdas[1].innerHTML==letra && celdas[4].innerHTML==letra && celdas[7].innerHTML==letra) {ganador=true;}

	if(celdas[2].innerHTML==letra && celdas[5].innerHTML==letra && celdas[8].innerHTML==letra) {ganador=true;}	

	//Combinaciones diagonales ganadoras
	if(celdas[0].innerHTML==letra && celdas[4].innerHTML==letra && celdas[8].innerHTML==letra) {ganador=true;}

	if(celdas[2].innerHTML==letra && celdas[4].innerHTML==letra && celdas[6].innerHTML==letra) {ganador=true;}

	return ganador;
};

function verificarSiHayEmpate(){
	var empate = true;

	for(var corr=0; corr < celdas.length; corr++) {
		if(celdas[corr].innerHTML=="") {
			empate = false;
		}
	};

	return empate;
}

for(var corr = 0; corr < cantidadCeldas; corr++) {
	//cuando el mouse pasa encima de la etiqueta td
	celdas[corr].addEventListener("mouseover", function(event){
		event.target.style.backgroundColor = "yellow";
	});

	//cuando el mouse sale de la etiqueta td
	celdas[corr].addEventListener("mouseout", function(event){
		event.target.style.backgroundColor = "";
	});		

	//cuando hacemos clic con el mouse
	celdas[corr].addEventListener("click", function(event){
		//Verificamos si nadie ha hecho clic previamente en la celda
		if(event.target.innerHTML=="") {
			//Si el turno es 1. Significa que debo escribir una X y cambiar al turno 2
			if(turno==1) {
				event.target.innerHTML = "X";
				turno = 2;
			} else {
				event.target.innerHTML = "O";
				turno = 1;
			}	

			hayGanador = verificarSiHayGanador("X");

			//Operador "=="" para verificar que la variable "hayGanador" sea igual a false

			if(hayGanador == false) {
				hayGanador = verificarSiHayGanador("O");
			}

			if(hayGanador) {
				alert("Hay un ganador");
			} else {
				empate = verificarSiHayEmpate();
				if(empate) {
					alert("Empate");
				}

			}


		};	
	});	
}