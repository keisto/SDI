//Project 3
//By Tony Keiser


//Global Variable(s)

		//object
var users = [
	{ 
	"name": "Jake",
	"age" : "23",
	"gender" : "male",
	"height": 73
	},
	{ 
	"name": "Kody",
	"age" : "24",
	"gender" : "male",
	"height": 69
	},
	{ 
	"name": "Lisa",
	"age" : "21",
	"gender" : "female",
	"height": 64
	},	
	{ 
	"name": "Tony",
	"age" : "23",
	"gender" : "male",
	"height": 67
	}
];
		//json data
var json = {
	"admins": {
		"owner":{
			"name": "Mike",
			"age" : 22
		},
		"officer": {
			"name": "Sarah",
			"age" : 21
		}
	}
};

var rank = [ "Owner", "Officers", "Users" ];

//OUTPUT Var
console.log(users);
console.log(json.admins);

//Condtional
if(users!=null){
	//For Loop
	for(var i=0;i<users.length;i++)
	console.log(users[i]);
		//Nested Condtional
		if(json.admins!=null){
			console.log("These Users are monitered by these admins: ");
			console.log(json.admins);
		}
} else {
	console.log("No Users");
}
//Back

//Boolean
var admin = new Boolean;
if(json.admins!=null){
	admin = true
		if(admin==true){
			console.log("Admins on duty.");
			} else { 
				console.log("No Admins available.");
			};
	};

//Array

var rank = [ "Owner", "Officers", "Users" ];

rank.push("Newbie");

	//While Loop 
	var i = 0;
	while (i<rank.length){
		console.log(rank[i]);
		i++;
		}


//Number
function grading(Number){
	
	var grade = Number / 100; //Points
	var math = grade * 100;
	
	var percent = console.log( math + "% is the best possible grade." );
	
	return percent;
}

grading(100);

//String
function closing(value){
	
	var greet = ("Hello Class, ");
	var bye = ("Goodbye Assignment3!\"");
	
	var msg = console.log( greet + value + bye );
	
	return msg;
}

closing("I hope everyone is haveing a good week. I know I am excited to say, \"");
