$(document).ready(function(){

var guessArray = new Array();

//create random number
function generate() {
 	number = Math.floor((Math.random() * 100) + 1)
 	console.log("the secret number is " + number);
 	secret = number;
 	return secret;
 } 		

generate(); 

//new game function
 $('.new').click(function(){
 	generate(); //generate a new number
 	guessArray = new Array(); //reset guesses to 0
 	$('#count').text(0);  // counter back to 0
 	$('#guessList li').remove();
 	$('#feedback').text("Make your guess!");
 });


/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//click the guess button	
$("#guessButton").on("click", function(event)
{
	var userGuess = $("#userGuess").val();

	event.preventDefault()//don't refresh when clicked

	guessArray.push(userGuess);//add user guess to array

	checkNum(userGuess);

	var counter = $("#guessList li").length; //new function to count the num guesses
		 $("#count").text(counter);
		
		 $("#userGuess").val("");//clear field 

});

function checkNum(userGuess)
 {
	function compare(){
		var dif = secret - userGuess;
		 absDif = Math.abs(dif);
		 console.log(absDif);
		return absDif;
	}

	function compareToPrev(){
		var lastGuess = guessArray[guessArray.length - 1];
			
	}
	
	if(userGuess > 0 && userGuess <= 100 && userGuess % 1 === 0 && !isNaN(userGuess)){ //validate that the guess is a number 0 - 100
			compare();
			$("#guessList").prepend("<li>" + userGuess);//add the number to the bottom div
		//for first guess
				
		if(absDif === 0)
		{
		$("#feedback").text("You won the game! Press 'New Game' to restart");
		}	
		else if(absDif < 10)
		{	
		$("#feedback").text("You're pretty warm");
		}
		else if(absDif < 25)
		{	
		$("#feedback").text("Ehh lukewarm");
		}
		else if(absDif < 50)
		{	
		$("#feedback").text("Brr it's chilly over here");
		}
		else if(absDif < 75)
		{	
		$("#feedback").text("FREEZING!");
		}
		
	} //end validation if statement
	else {
		$("#feedback").text("please enter a valid number between 1 and 100");
		}		
}





});

