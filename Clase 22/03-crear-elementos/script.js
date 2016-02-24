var imagen = document.createElement("img");
imagen.src = "perro-09.jpg";

imagen.addEventListener("click", function(){
	var audio = document.createElement("audio");
	audio.src = "guau.mp3";
	audio.play();
})


var doc = document.getElementsByTagName("body");

doc[0].appendChild(imagen);




//audio.controls = true;

//doc[0].appendChild(audio);

