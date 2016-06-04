var firstQuestion = 
{
	'questionNumber': 1,
	'timeRemaining': 30,
	'questionScript': "Which knight of Westeros is known as the Kingslayer?",
	'potentialAnswers':
	[
	'Ned Stark',
	'Moonboy',
	'Jamie Lannister',
	'Euron Greyjoy'
	],
	"correctAnswer":
	[
	'Jamie Lannister',
	],
	'imageGif':"https://media.giphy.com/media/VElt9te30u4Ks/giphy.gif",
}
var secondQuestion = 
{
	'questionNumber': 2,
	'timeRemaining': 30,
	'questionScript': "Who was the first King of The North in over 300 years?",
	'potentialAnswers':
	[
	'Arya Stark',
	'Ser Bronn of the BlackWater',
	'Greyworm',
	'Robb Stark'
	],
	"correctAnswer":
	[
	'Rob Stark',
	],
	'imageGif':"https://media.giphy.com/media/B4u41wAQ4KiTm/giphy.gif",
}
var thirdQuestion = 
	{
	'questionNumber': '3',
	'timeRemaining': 30,
	'questionScript': "Who owns the sword needle?",
	'potentialAnswers':
	[
		'Cerisi Lannister',
		'Daenerys Targaryen',
		'Arya Stark',
		'Samwell Tarlly'
	],
	"correctAnswer":
	[
		'Arya Stark',
	],
	'imageGif':'https://media.giphy.com/media/Bwt8B1Q2fyNBC/giphy.gif',
}
var forthQuestion= 
	{
	'questionNumber': '4',
	'timeRemaining': 30,
	'questionScript': "What is the house sigal of house stark?",
	'potentialAnswers':
	[
		'Direwolf',
		'Dragon',
		'Stag',
		'Kracken'
	],
	"correctAnswer":
	[
		'Direwolf',
	],
		'imageGif':"https://thekingskeep.files.wordpress.com/2011/05/stark-sigil.jpg",

	}
var fifthQuestion = 
{
	'questionNumber': '5',
	'timeRemaining': 30,
	'questionScript': "Who was the 998 lord commander of the nights watch?",
	'potentialAnswers':
	[
		'Robb Start',
		'Daenerys Targaryen',
		'Robert Aryyn',
		'Jon Snow'
	],
	"correctAnswer":
	[
		'Jon Snow',
	],
		'imageGif':"https://33.media.tumblr.com/4c7d55dd13db3646853a3ee55e3e2501/tumblr_np91m8cmYx1s5m21go5_250.gif",

	}
var myArray = [firstQuestion, secondQuestion, thirdQuestion,forthQuestion, fifthQuestion];
console.log(myArray.length);
console.log(myArray[2]);
//Set the question to an var that can go anywhere.  Make an function that will adjus the falue of this array. 
var question;
// counter for round Timer  
var counter = 20; 
//global interval ID
var intervalID;
//add my quote to my page every time 
function displayQuestion(question){
	console.log(true);
	var startDiv = $('<div>');
		//first adjust the button 
		startDiv.html(function(n){
			return "<h1> "+question.questionScript +"</h1>";
		})
		console.log(question.questionScript);
		startDiv.addClass('col-md-12 marker');
		$('#start').append(startDiv);
		

}
function render(question){
	var startDiv = $('#start');
		//first adjust the button 
		startDiv.html(
			"<h1> "+question.questionScript +"</h1>"
		);
	var length = (question.potentialAnswers.length);

	for (var i = 0; i < length ; i ++){
					var btn = $("<button>");
					btn.addClass('col-md-6  temp btn-primary question'+ i);
					btn.attr('data-let', question.potentialAnswers[i]);
					btn.html(question.potentialAnswers[i]);
					$("#start").append(btn);
		}
}// Close Render
//addVideo takes information object Video URL and turns it into a new video 
function changeQuestion(){
	console.log(myArray.length);
	var number = Math.floor(Math.random() * myArray.length);
	question = myArray[number];

	console.log(myArray[number]);
	console.log(question + 'line 78');
	return question;
}

function displayTimeRunsOut(){
		$('#start').empty();


}
$(document).ready(function(){

	$('#startGame').on('click',function(){
		// the the question for this round 
		question = changeQuestion();
		console.log(question);
		displayQuestion(question);
		render(question);
		//Set and display game 
		intervalID = setInterval(function(){
			//reduce counter 
			counter --; 
			//display new counter value 
			$('#timer').html("<h3>" + counter	+" </h2");
			// if = user inform user that they have lost and call a function that will pick a new question. 
			if(counter === 0 ){
				alert( "Times UP");
				console.log('clearing interval', intervalID);
				displayTimeRunsOut();
				clearInterval(intervalID);
			}
		}, 1000)
		console.log('on start', intervalID);

	})//close Click

	$(document).on('click',".temp", function(){
		// Hold empty timer area
		console.log(question.questionScript);
		$('#timer').html('');
		// clear the timer 
		clearInterval(intervalID);
		//Hold the correct answer
		var answer = question.correctAnswer[0];
		console.log(answer + " answer");
		//Hold the users Answer
		var userInput	= $(this).data("let");
		console.log(userInput);
		// Empty the Start Div 
		$('#start').empty();

		displayQuestion(question);
		// Resent the information in the Div
		/*var newDiv = $('<div>');
		newDiv.addClass("col-md-12 result");
		console.log(question.questionScript);
		newDiv.html(function(n){
			return "<h1> "+question.questionScript +"</h1>";
		});
				console.log(newDiv);
		$('#start').append(newDiv);*/
		// Set image.  not dependent on correct answer 
		var gifUrl = question.imageGif;
		console.log(gifUrl);
		var image = $("<img>");
		image.addClass('img-responsive')
		image.attr('src', gifUrl);
		$('.marker').append(image);
		// Sets the text informing the player whether they have won or lost 
		if (userInput === answer){
			var div = $("<div>");
			div.addClass("col-md-12");
			div.html('<h2>'+answer + " is correct! you have won this round.</h2>");
			$(".marker").append(div); 
		}else{
			var div = $("<div>");
			div.addClass("col-md-12");
			div.html('<h2>' + userInput + " is incorrect! The correctAnswer was " + answer + "! </h2>");
			$('.marker').append(div);
			}
			delayNext();

		//Will empty the Temp
		
		})// close 	

	
})