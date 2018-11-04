const calculator = {
	displayValue: '0',
	firstOperand : null,
	secondOperand: false,
	operator: null,
	waitingForSecondOperand: false
}

const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('.display');
const result = document.getElementById('result');//equals btn
const backspace = document.getElementById('backspace');
const clear = document.getElementById('clear');//clear btn
const resultDisplayed = false;//flag

function operator(a,b,sign){
	switch (a,b,sign) {
		case sign == '+':
		 return	add(a,b)
			break;
		case sign == '/':
		 return divide(a,b)
			break;
		case sign == '-':
		return subtract(a,b)
			break;
		case sign == '*':
		return	multipy(a,b)
			break;
		default:
			console.log('check if u included the operator');
			break;
	}

	if(!sign){
		return;
	}
		if(sign == '+'){
			return add(a,b);
		}else if(sign == '-') {
			return subtract(a,b);
		}else if(sign == '*'){
			return multiply(a,b);
		}else if(sign == '/'){
			return divide(a,b);
		}

}

function Display(val){
 display.textContent = calculator.displayValue;
}
Display();

function inputNo(num){
	const {displayValue,waitingForSecondOperand} = calculator;
	if(waitingForSecondOperand == true){
		calculator.displayValue = num;
		calculator.waitingForSecondOperand =false;
	}else{
	calculator.displayValue = displayValue === '0' ? num : displayValue + num;
	console.log(calculator);
	}
}
 
function maintainOperator(nextOperator){
	const {displayValue,firstOperand,secondOperand,operator}= calculator;
	const value = parseFloat(displayValue);

	if (firstOperand === null) {
		calculator.firstOperand = inputValue;
	  }
	
	  calculator.waitingForSecondOperand = true;
	  calculator.operator = nextOperator;
	  console.log(calculator);
}
    btns.forEach(btn => btn.addEventListener('click', function(e){
		const {target} = e;
		inputNo(target.value);
		Display();

		/*if() {
			maintainOperator(target.value)
			display();
		}*/
	})
);



