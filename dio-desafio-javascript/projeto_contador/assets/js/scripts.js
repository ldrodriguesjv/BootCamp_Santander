let count = 0;

const currentNumberWrapper = document.getElementById('currentNumber');

function increment() {
	count++;
	currentNumberWrapper.innerHTML = count;
}

function decrement() {
	count--;
	currentNumberWrapper.innerHTML = count;
}

