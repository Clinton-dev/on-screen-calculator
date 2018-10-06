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

function operator(a,b,sign){
		console.log(a,b,sign);
	/*switch (a,b,sign) {
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
	}*/
	if(!sign){
		return;
	}
		if(sign == '+'){
			return add(a,b);
		}else if(sign == '-') {
			 subtract(a,b);
		}else if(sign == '*'){
			return multiply(a,b);
		}else if(sign == '/'){
			return divide(a,b);
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



