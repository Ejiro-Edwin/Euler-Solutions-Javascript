module.exports = () => {
	let factor;
	let start = 600851475143;
	for (let i = 3; i < start + 1; i += 1) {
		if (start % i === 0 && isPrime(i)) {
			start /= i;
			factor = i;
		}
	}
	return console.log(`Problem 3 solution is: ${factor}`);
};

function isPrime(number) {
	s = Math.sqrt(number);
	for (let i = 2;i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}
	return number !== 1;
}
