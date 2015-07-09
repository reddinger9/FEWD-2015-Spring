$(document).ready(function() {
	$(".calculator").submit(calculate);
});

function calculate(event) {
	event.preventDefault();

	var inputOne = $(".input_one").val();
	var inputTwo = $(".input_two").val();
	var operator = $(".operator").val();

	var equation;
	var result;
	var valid = false;

	equation = inputOne + operator + inputTwo;

	if ( !isNaN(inputOne) && !isNaN(inputTwo) ) /*{
		if (operator === "+" || operator === "-" || operator === "*" || operator === "/")*/ {
			valid = true;
		}
	}



	if (valid) {
		result = eval(equation);
	} else {
		result = "ERROR";
	}

	$(".output").val(result);

	console.log(result);
}