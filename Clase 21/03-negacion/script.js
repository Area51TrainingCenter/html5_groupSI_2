var fecha = new Date();
var dia = fecha.getDate();

// El operador de negación es !
if( !(dia==18) ) {
	alert("Yupi, mañana es viernes");
} else {
	alert("Falta todavía para el viernes");
}