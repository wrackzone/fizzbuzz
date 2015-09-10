function multiple5(n) {
	return n % 5 === 0;
}

function multiple3(n) {
	return n % 3 === 0;
}


function print(n) {
	var i = 1;
	while (i <= n) {
		// console.log(i);
		if (multiple5(i) && multiple3(i)) {
			console.log(i,"FizzBuzz");
		} else if (multiple3(i)) {
			console.log(i,"Fizz");
		} else if (multiple5(i)) {
			console.log(i,"Buzz");
		} else {
			console.log(i);
		}
		i = i + 1;
	}
}

print(50);