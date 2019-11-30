function getString(){
	var firstParam = document.getElementById("inputString").value;
	var secondParam = document.getElementById("inputNumber").value;
	document.getElementById("newString").innerHTML = deleteOccurrencies(firstParam, secondParam);
}

function deleteOccurrencies(inputString, quantity){
	var newString = "";
	var loop = true;
	while(loop){
		for(i = 0; i <= inputString.length; i++){
			var count = 0
			if(inputString[i] == inputString[i+1]){
				count++
			if(count > quantity){
				
			}
		}
	}
	}
	return newString;
}