$(document).ready(function() {

//Variables//
var number = 60;
var intervalId;
var gcount = 0;
var wcount = 0;
var unanswered = 0;

//Start the timer//
function run() {
    intervalId = setInterval(decrement, 1000);
}

//Hide the title and score at bottom//
$('#start').on('click', function(){
    run();
});

$('#finish').on('click', function(){
    stop();
});
//Decrease the timer
function decrement() {
    number--;
    $("#timer").html(" " + number + " seconds");
    if (number === 1) {
        $("#timer").html(" " + number + " second");
    }else if (number === 0) {
        $('#start').hide();
        hide();
        stop();
    }
}

function stop() {
    clearInterval(intervalId);
}

});



