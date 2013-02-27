//Project 4
//Tony Keiser


//Check Phone Number 

var say = console.log;

function phoneNumber(input){ // Index: 012-345-6789
	
	var areaCode = input.substring(0,3);
	var prefix =  input.substring(3,6);
	var lineNumber = input.substring(6,10);
	
		if(input.length<10){
			say("Please enter a 10 digit value. Sample: 123-456-7890");
			} else {
				say("You have entered the phone number value of: 1-" + areaCode + "-" + prefix + "-" + lineNumber);
	};
};
phoneNumber("1234567890");
