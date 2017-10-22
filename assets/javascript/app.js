$(document).ready(function() {
	$("#trivia").hide();
	$("#end").hide();
	$("#finish").hide();

//Variables//
var number = 60;
var intervalId;
var right = 0;
var wrong = 0;
var unanswered = 0;

//Start the timer//
function run() {
    intervalId = setInterval(decrement, 1000);
}

//Hide the title and score at bottom//
$('#start').on('click', function(){
    $("#finish").show();
    $("#trivia").show();
    $("#start").hide();
    run();
    
});

$('#finish').on('click', function(){
    $("#trivia").hide();
    $("#finish").hide();
    $("#end").show();
    stop();
    
});
//Decrease the timer//
function decrement() {
    number--;
    $("#timer").html(" " + number + " seconds");
    if (number === 1) {
        $("#timer").html(" " + number + " second");
    }else if (number === 0) {
       $("#trivia").hide();
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
    
}

//Tally up correct answers and add to score, also tally unanswered//
$('input[type=radio]').on("change", function() {
   right =  $('input[class=correct]:checked').length;
   wrong = $('input[class=incorrect]:checked').length;
   unanswered = (6-(right + wrong));
   $("#correct").text(right);
   $("#wrong").text(wrong);
   $("#unanswered").text(unanswered);
});

});






