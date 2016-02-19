var fecha = new Date();

//Operador "y" -- &&
if(fecha.getDate()==18  && fecha.getMonth()==1) {
	alert("Mensaje ok");
}

//Operador "o" -- ||;
if(fecha.getFullYear() == 2015 || fecha.getMonth()==1){
	alert("Ok. todo está ok");
}
