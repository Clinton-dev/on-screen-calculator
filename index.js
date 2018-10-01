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


    btns.forEach(btn => btn.addEventListener('click', function(){
		//console.log(this.innerText);
		//display text value on calc display on click
		let value = this.innerText;
		//display.textContent = value;
		const content = document.createElement('div');
		content.classList.add('content');
		content.textContent = value;
		display.appendChild(content);

	})
)

addEventListener