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
var array = [firstQuestion, secondQuestion];
console.log(array[1]);
// counter for round Timer  
var counter = 20; 
//add my quote to my page every time 
function render(){
	var length = (firstQuestion.potentialAnswers.length);

	for (var i = 0; i < length ; i ++){
					var btn = $("<button>");
					btn.addClass('col-md-6  temp btn-primary question'+ i);
					btn.attr('data-let', firstQuestion.potentialAnswers[i]);
					btn.html(firstQuestion.potentialAnswers[i]);
					$("#start").append(btn);
		}
}// Close Render
//addVideo takes information object Video URL and turns it into a new video 
function delayNext(){
	console.log("Bangers");
	$('#start').empty();


}
$(document).ready(function(){
	$('#start').on('click',function(){
		var button = $('#start');
		//first adjust the button 
		button.html(function(n){
			return "<h1> "+firstQuestion.questionScript +"</h1>";
		})
		render();
		//Set and display game 
		var intervalID = setInterval(function(){
			//reduce counter 
			counter --; 
			//display new counter value 
			$('.timer').html("<h3>" + counter	+" </h2");
			// if = user inform user that they have lost and call a function that will pick a new question. 
			if(counter === 0 ){
				alert( "Times UP");
				clearInterval(intervalID);
			}
		}, 1000)

	})

	$(document).on('click','.temp', function(){
		// Hold Answer
		var answer = firstQuestion.correctAnswer[0];
		console.log(answer + " answer");
		var userInput	= $(this).data("let");
		console.log(userInput);
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
		
		})
		// Set the length to the length of my current question
	

	
})