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
var draftQuestion = 
	{
	'questionNumber': '3',
	'timeRemaining': 30,
	'questionScript': "Question?",
	'potentialAnswers':
	[
		'answer1',
		'answer2',
		'answer3',
		'answer4'
	],
	"correctAnswer":
	{
		'#':'answer#',
	}
}
var myArray = [firstQuestion, secondQuestion];
console.log(myArray[1]);
//Set the question to an var that can go anywhere.  Make an function that will adjus the falue of this array. 
var question;
// counter for round Timer  
var counter = 20; 
//global interval ID
var intervalID;
//add my quote to my page every time 
function render(question){
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
	var number = Math.floor(Math.random() * myArray.length);
	var	question = {};
	question = myArray[number];
	console.log(myArray[number] );
	console.log(question);
	console.log(question + 'line 78');
	return question;
}
function delayNext(){
	console.log("Bangers");
	$('#start').empty();
}

$(document).ready(function(){

	$('#startGame').on('click',function(){
		// the the question for this round 
		var question = changeQuestion();
		console.log(question);
		var button = $('#start');
		//first adjust the button 
		button.html(function(n){
			return "<h1> "+question.questionScript +"</h1>";
		})
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
				clearInterval(intervalID);
			}
		}, 1000)
		console.log('on start', intervalID);

	})//close Click

	$(document).on('click','.temp', function(){
		// Hold empty timer area
		$('#timer').empty();
		// clear the timer 
		clearInterval(intervalID);
		//Hold the correct answer
		var answer = firstQuestion.correctAnswer[0];
		console.log(answer + " answer");
		//Hold the users Answer
		var userInput	= $(this).data("let");
		// Empty the Start Div 
		$('#start').empty();
		// Resent the information in the Div
		var input = $('<div>');
		input.addClass("col-md-12 result");
		input.html(function(n){
			return "<h1> "+firstQuestion.questionScript +"</h1>";
		});

		$('#start').append(input);
		var gifUrl = firstQuestion.imageGif;
		console.log(gifUrl);
		var image = $("<img>");
		image.attr('src', gifUrl);

		$('.result').append(image);
		// Sets the text informing the player whether they have won or lost 
		if (userInput === answer){
			var div = $("<div>");
			div.addClass("col-md-12");
			div.html('<h2>'+answer + " is correct! you have won this round.</h2>");
			$(".result").append(div); 
		}else{
			var div = $("<div>");
			div.addClass("col-md-12");
			div.html('<h2>' + userInput + " is incorrect! The correctAnswer was " + answer + "! </h2>");
			$('.result').append(div);
			}
			delayNext();

		//Will empty the Temp
		
		})// close 	

	
})