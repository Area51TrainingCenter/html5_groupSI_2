var modelo = {};

function fnCambios(cambios){
	console.log("cambios", cambios);
};

Object.observe(modelo, fnCambios);

/*
Object.observe(modelo, function(){

});*/