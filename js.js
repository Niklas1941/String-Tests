//Make array for inpast typed things
var Mem = [""];
var pos = 0;

var v = document.getElementById('input1');
var o = document.getElementById('output');

function Read(){
	var mv = v.value;

	//Is the input empty
	if (mv == ""){
		return;
	} 

	//Check for slash
	var slash = mv.search("/");

	if (slash == 0){
		//Init the key words
		var array1 = ["shout", "clear", "help", "clear mem"];  //Keep these two arrays same length
		var array2 = ["You can shout things","Clear the output","Show this \"Window\"", "Clears typing memory"]; //It's easer to do it this way, but maybe i will combine them... maybe...
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

				o.value += "\r\n";

				for (var i = 0; i < array1.length; i++) {  //In here i assume i have those two arrays at same lenght
					o.value += "/" + array1[i] + " - " + array2[i] + "\r\n"; 
				}

				o.value += "\r\n";
			break;

			case "clear mem":

				Mem.splice(1, Mem.length - 1);
				console.log(Mem);
				o.value += "Array cleared! \r\n"
				v.value = "";
				return;

			break;

			default:
				o.value += "Command not found" + "\r\n";

			break;
		}

	} else {

		o.value += v.value + "\r\n";
	}

	//add things to array
	Mem.push(v.value);
	//console.log(Mem.length);
	
	if(Mem.length >= 6){
		Mem.splice(1,1);
		//console.log(Mem.length);
	}

	v.value = "";
	o.scrollTop = o.scrollHeight;

	//console.log(Mem);
} 

function GetLast()
{
	pos += 1;

	if (pos > Mem.length){
		pos = 1;
	}

	v.value = Mem[Mem.length - pos];
	//console.log(pos + " Pos variable");
	//console.log(Mem.length + " length of the Mem array");
	//console.log(Mem[Mem.length - pos] + " Word which we are on");
}

function SubmitFunction(evt) {
  	evt.preventDefault();
  	return false;
}

document.addEventListener('keyup', function (e) {
	if (e.key == 'Enter') {
	   	Read();
	}

	if (e.key == 'ArrowUp'){
		GetLast();
	}
	
});


