//###########################################
//###########################################
//##############  Tony Keiser  ##############
//##############  Project 2    ##############
//##############  SDI 1209     ##############
//###########################################
//###########################################

// Global Variables
var name = "Bill Gates", // String
 	friend = ["We are already friends!", "Your are not friends. Would you like to send a Friend Request?"]; // Array
	loggedTime = 105/60 + " hrs" // Number (minutes logged displayed in hours)

// Procedure (User login Success vs Failure)

var userName = function(first,last){
	
	if(userName!=null){
		console.log("Welcome " + first + " " + last + ", you look great today! ;)");	
	} else {
		console.log("Hello, I didn't get your name. Please enter your information below.");
	}
}
 
userName("Bill","Gates");

// Boolean Function (Checking Friendship Status) *********** 

findFriend = function(Boolean) {	
		
	if(Boolean) {
	
	//Output in Global Variable
		
		return friend[0];
		
	} else {	
	
	//Output in Global Variable
		
		return friend[1];
	}
}

var friendStatus = findFriend(true);
console.log(friendStatus);

// Number Function (Ad Display)


var adDisplay = 0,
	adFeed = ["Join Spotify today to get 10% off a year!", "Get fit. Follow BodyRock.TV now!", "$5.00 Any sub for FebuANY only at Subway!"];

		while(adDisplay<60){
				
			adDisplay++;
			console.log(adFeed[0], "count: " + adDisplay);
			}
			
			adDisplay = 60;
			while(adDisplay>=60 && adDisplay<=120){
					
					console.log(adFeed[1], "count: ", + adDisplay);
					adDisplay++;
					}

						adDisplay = 120
						while(adDisplay>=120 && adDisplay<=180){
							
							console.log(adFeed[2], "count: ", + adDisplay);
							adDisplay++;			
							}

var adCount = console.log("Total count: " + adDisplay);
console.log(adCount);
	

// Array Function (Status Feed)

statusFeed = function(Number, statusBegin){
		
	var newstatus = ["Sarah: It's such a beautiful day today! <br>", "Amanda: Can't wait for the weekend! =D", "Brandon: YAY! I got a house today!!!"];
	
	console.log(statusBegin[0]);
	console.log(statusBegin[1]);
	
	for(var n = Number;n<3;n++){
		
		console.log(newstatus[n]);
		
	}
	

}
	statusFeed(0,["John: I need to win the lottery.", "Mike: Feeling a little under the weather. =( "]);

// String Function (Log off)

var logOffMsg = function(logoff,comeback){
	var date = new Date(),
	    d  = date.getDate(),
	    day = (d < 10) ? '0' + d : d,
	    m = date.getMonth() + 1,
	    month = (m < 10) ? '0' + m : m,
	    yy = date.getYear(),
	    year = (yy < 1000) ? yy + 1900 : yy,
	    byeMsg = name + logoff + month + "/" + day + "/" + year + comeback;
	
	return byeMsg;
	
};

var fullMsg = logOffMsg(" you are now Logged off. ", ". Come back SOON!");
console.log(fullMsg);



