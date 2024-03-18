function countPrimeNumbers() {
    let count = 0;

    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while(i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }

        return true;
    }

    // Count prime numbers from 2 to 100
    for (let i = 2; i <= 10; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

// Measure execution time
const t0 = performance.now();
const primeCount = countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`)