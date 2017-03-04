function Read(){
	var v = document.getElementById('input1');
	var o = document.getElementById('output');
	var mv = v.value;

	//Check for slash
	var slash = mv.search("/");

	if (slash == 0){
		//Init the key words
		var array1 = ["shout", "clear", "help"];  //Keep these two arrays same length
		var array2 = ["You can shout things","Clear the output","Show this \"Window\""]; //It's easer to do it this way, but maeby i will combine them... maybe...
		mv = mv.toLowerCase();
		//console.log(mv);

		//Search for the key words
		for (var i = 0; i < array1.length; i++) {

			var KeyWords = mv.search(array1[i]);

			//If found then return it to previous if statement 
			if (KeyWords != -1){
				var found = array1[i];
				var position = KeyWords;
			}

		}

		//Let see what we got
		switch(found){

			case "shout":

				mv += " ";
				mv = mv.slice(7, -1);
				mv = mv.toUpperCase();
				o.value += mv + "!\r\n";

				break;

			case "clear":

				o.value = "";

			break;

			case "help":

				for (var i = 0; i < array1.length; i++) {
					o.value += "/" + array1[i] + " - " + array2[i] + "\r\n"; 
				}
			break;

			default:
				o.value += "Command not found" + "\r\n";

			break;
		}

	} else {

		o.value += v.value + "\r\n";
	}

	v.value = "";
} 

function SubmitFunction(evt) {
  	evt.preventDefault();
  	return false;
}

document.addEventListener('keyup', function (e) {
	if (e.key == 'Enter') {
	   	Read();
	}
});


