//Project 4
//Tony Keiser

//Global Var

var say = console.log;



//////////////////////////////////// START STRINGS ////////////////////////////////////

//Check Phone Number 

function phoneNumber(input){ // Index: 012-345-6789
	
	var areaCode   = input.substring(0,3);
	var prefix     =  input.substring(3,6);
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
	
	var start    = input.indexOf('@'),
		end      = input.indexOf('.'),
		at       = input.charAt(start),
		dot      = input.charAt(end),
		userName = input.substring(0, start),		
		domain   = input.substring(start+1,end),
		tdl      = input.substring(end+1);
		 
		    if(start==-1 || end==-1){
		  		  say("Invalid format. Format: joe@someone.com")
		    } else {
			    say("Your E-mail address is: " + userName + at + domain + dot + tdl);
		    }
};
email("joe@someone.com");

//Check URL

function url(input){
	
	var format1 = input.substring(0, 7), //http://
		format2 = input.substring(0, 8); //https://
		http    = "";

		if(format1=='http://'){
			http = format1;
			}
		if(format2=='https://'){
			http = format2; 		
			}
		if(http!=""){
		
				var begin     = input.indexOf('/'),
					first     = input.indexOf('.'),
					last      = input.lastIndexOf('.'),
					dot1      = input.charAt(first),
					dot2      = input.charAt(last),
					startSite = input.substring(begin+2,first), //+2 Start past format
					domain    = input.substring(first+1,last),
					tdl       = input.substring(last+1);
					
				
					say("Your homepage url is: " + http + startSite + dot1 + domain + dot2 + tdl);
			
		} else { 
			say("Please include 'http://' or 'https://' in url.")	
		}
};
url('http://www.google.com');

//Title-Case String // Split into words (Hope I did something close to what that meant)

function string(quote){
	var word  = quote.split(' '),
		words = word.length;

		for (n = 0; n<words; n++){
			var i     = word[n].charAt(0).toUpperCase(),
				l     = word[n].substring(1);
			
				say(i + l);
	}	
}
string("The world is yours now pumkin.");

//String seporator

function list(vegi,setting){
	
	var sep1    = ',',
		sep2    = '/';
		replace = ''; 
		
	if(setting==true){
		replace = vegi.replace(/ /g, sep1+' ');
		
			say(replace);
			
		} else { 
		replace = vegi.replace(/ /g, sep2);
		
		say(replace);
	}
	
}
list('Broccoli Spinach Carrots Kale', true);


///////////////////////////////////// END STRINGS ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// START NUMBERS ////////////////////////////////////
	
//Format Number -- Money
function math(cash){
	
	var money = '$' + cash.toFixed(2);
	
	say(money);
	
};
math(Math.random()*999); 

//Fuzzy Number 

function fuzzy(guess,maxNumber){

	var number = Math.floor(Math.random()*maxNumber) + 1;	
	
	if(number==guess){
		say('Congratulation! You guessed ' + guess + ', which is correct. ');
		
		return;
		
	} if(number<guess) { 
		
		var theDiff = Math.floor((number/maxNumber*100)-(guess/maxNumber*100)) + '%';
			
			say('Actual Number: ' + number + ' | Differance: ' + theDiff + ' | Your Guess: ' + guess);		
		} else {
		
			var theDiff = Math.floor((number/maxNumber*100)-(guess/maxNumber*100)) + '%';
				
				say('Actual Number: ' + number + ' | Differance: ' + theDiff + ' | Your Guess: ' + guess);		
	};	
};
fuzzy(50,100);

//String to Number 

function input(number,string){

	var string = new String(string);
	var change = Number(string);

	if(isNaN(change)==false){
		
		say(number*string);
	}	
}
input(2,"4");

///////////////////////////////////// END NUMBERS //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// START ARRAYS ////////////////////////////////////



///////////////////////////////////// END ARRAYS ////////////////////////////////////

