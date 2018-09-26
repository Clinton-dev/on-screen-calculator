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