// Set global variables



$(document).ready(function() {
	//Bind events
	$(".digit").click(onDigitPress);
	$(".operator").click(onOperatorPress);
	$(".equals").click(onEqualsPress);
	$(".clear").click(onClearPress);
});

var clear = 0
var currentInput = ""
var displayInput = ""
var zeroActive = true;
var blinkInterval;

function blinkZero() {
	if (zeroActive) {
		$(".display").val("");
	} else {
		$(".display").val("0");
	}

	zeroActive = !zeroActive
}

function startBlinkZero() {
	stopBlinkZero();
	blinkInterval = setInterval("blinkZero()", 500);
}

function stopBlinkZero() {
	clearInterval(blinkInterval)
	$(".display").css({ opacity: 1 });
}
// On digit press

function onDigitPress(event) {
	//How you can attach random pieces of data to an element ->
	var digit = $(this).data("action").toString();

	currentInput += digit;
	displayInput += digit;
	
	$(".display").val(displayInput);

	console.log(currentInput);
}

// On operator press

function onOperatorPress(event) {
	var operand = $(this).data("action").toString();

	currentInput += operand
	displayInput = ''

	console.log(operand);
}

// On equals press, evaluate equation

function onEqualsPress(event) {
		 
	var result = eval(currentInput);

	$(".display").val(result);

	currentInput = result;

}

// On clear press

function onClearPress(event) {

	currentInput = "";
	displayInput = ""

	$(".display").val(clear);

	if (currentInput == "0") {
		startBlinkZero();
	} else {
		stopBlinkZero;
	}

	$(".display").val(currentInput);
	
}

// Update display






