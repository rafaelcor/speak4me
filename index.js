$(document).ready(function(){
	meSpeak.loadConfig("mespeak_config.json");
    meSpeak.loadVoice("voices/es-la.json");
	var to_say = "";
	var space_pressed = 0;
	//console.log("hello");	
	$("body").keydown(function (e) {
		//console.log(e.keyCode);
		console.log(e.key);
		if (e.keyCode >= 48 && 
            e.keyCode <= 90 && 
            e.key != "á" && 
            e.key != "é" && 
            e.key != "í" && 
            e.key != "ó" && 
            e.key != "ú" &&
            e.key != "ñ")
        {
			c = String.fromCharCode(e.which);
			to_say += c;
			$("#text").text($("#text").text() + c);
			//console.log(c);
		}
		else if (e.key == "+" || 
		         e.key == "-" || 
		         e.key == "*" || 
		         e.key == "/" || 
		         e.key == "?" ||
                 e.key == "¿" ||
		         e.key == "á" ||
		         e.key == "é" ||
		         e.key == "í" ||
		         e.key == "ó" ||
		         e.key == "ú" ||
                 e.key == "ñ" 
		         )
		{
			to_say += e.key.toLocaleUpperCase();
			$("#text").text($("#text").text() + e.key.toLocaleUpperCase());
			console.log(e.key);
		}
		if (e.keyCode == 32) {
			space_pressed = 1;
			console.log(to_say);
			console.log(to_say.length);
			console.log(isNaN(to_say));
			if (to_say.length == 1 && isNaN(to_say) && to_say != "O" && to_say != "U" && to_say != "A" && to_say != "E"){
				console.log("true");
				to_say += to_say;
				meSpeak.speak(to_say);
			}
			else{
				meSpeak.speak(to_say);
			}
			to_say = "";
			$("#text").text($("#text").text() + " ");
			
		}
		space_pressed = 0;
		
		if (e.keyCode == 8) {
			if (space_pressed == 1)
				$("#text").text("");
			else{
				to_say = to_say.substring(0, to_say.length - 1);
				$("#text").text($("#text").text().substring(0, $("#text").text().length - 1))
			}
		}
	});
}); 
