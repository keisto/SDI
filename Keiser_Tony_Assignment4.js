//Project 4
//Tony Keiser

//Global Var

var say = console.log;


//Check Phone Number 


function phoneNumber(input){ // Index: 012-345-6789
	
	var areaCode = input.substring(0,3);
	var prefix =  input.substring(3,6);
	var lineNumber = input.substring(6,10);
	
		if(input.length<10){
			say("Please enter a 10 digit value. Sample: 123-456-7890");
			} else {
				say("Your Phone Number is: 1-" + areaCode + "-" + prefix + "-" + lineNumber);
	};
};
phoneNumber("1234567890");

//Check Email 

function email(input){
	
	var start = input.indexOf('@'),
		end = input.indexOf('.'),
		at = input.charAt(start),
		dot = input.charAt(end),
		userName = input.substring(0, start),		
		siteName = input.substring(start+1,end),
		domain = input.substring(end+1);
		
	    

	   
		    if(start==-1 || end==-1){
		  		  say("Invalid format. Format: joe@someone.com")
		    } else {
			    say("Your E-mail address is: " + userName + at + siteName + dot + domain);
		    }
};
email("joe@someone.com");
