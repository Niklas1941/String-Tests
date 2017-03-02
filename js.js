function Read(){
	var v = document.getElementById('input1');
	var o = document.getElementById('output');

	//Check for slash
	var slash = v.value.search("/");

	if (slash == 0){
		//Init the key words
		var array1 = ["shout", "clear", "help"];

		//Search for the key words
		for (var i = 0; i < array1.length; i++) {

			var KeyWords = v.value.search(array1[i]);

			//If found then return it to previous if statement 
			if (KeyWords != -1){
				var found = array1[i];
				var position = KeyWords;
			}

		}

		//Let see what we got
		switch(found){

			case "shout":

				v.value += " ";
				v = v.value.slice(7, -1);
				v = v.toUpperCase();
				o.value += v + "!\r\n";

				break;

			case "clear":

				o.value = "";

			break;

			case "help":

				o.value += "This is just a test!" + "\r\n";

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


