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
	{
		'3':'Jamie Lannister',
	}
}
console.log(firstQuestion.questionScript);
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
//add my quote to my page every time 
function render(){
	var length = (firstQuestion.potentialAnswers.length);

	for (var i = 0; i < length ; i ++){
					var btn = $("<button>");
					btn.addClass('col-md-6  btn-primary question'+ i);
					btn.attr('data-let', firstQuestion.potentialAnswers[i]);
					btn.html(firstQuestion.potentialAnswers[i]);
					$(".start").append(btn);
		}
}
$(document).ready(function(){
	$(".start").on('click', function(){
		console.log(firstQuestion.questionScript)
		//first adjust the button 
		$('.start').html(function(n){
			return firstQuestion.questionScript;
		})
		render();
		// Set the length to the length of my current question

		
	})
})