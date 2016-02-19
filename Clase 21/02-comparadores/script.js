// Operador ternario
// condicion ? accion01 : accion02

var numero = 10;

(numero % 2 == 0) ? alert("Número par") : alert("Número impar")

// Asignación
// numero = 40

// Comparando
// numero == 40

// Considera como falso
// a los siguientes valores:
// False, 0, ""
numero = 0;
if(numero == false) {
	alert("Verdadero");
}

numero = 56;
if(numero) {
	alert("La comparación es verdadera");
}

// El operador === compara valores y tipos
numero = 0;
if(numero === false) {
	alert("Hay igualdad");
}
