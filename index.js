function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function multiply (a,b) {
	return a * b; 
}

function divide(a,b){
    return a/b;
}

function operator(sign,a,b){
		
	switch (sign) {
		case '+':
			add(a,b)
			break;
		case '/':
			divide(a,b)
			break;
		case '-':
			subtract(a,b)
			break;
		case '*':
			multipy(a,b)
			break;
		default:
			console.log('check if u included he operator');
			break;
	}
}



const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('.display');
const result = document.getElementById('result');//equals btn
const backspace = document.getElementById('backspace');
const clear = document.getElementById('clear');//clear btn
const resultDisplayed = false;//flag


    btns.forEach(btn => btn.addEventListener('click', function(e){
		
		//store string value to be used
		var value = this.innerHTML;
		var lastChar = value[value.length -1];
		display.textContent +=value;
		
	})
);



