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

//Measure executions time
const interations = 100;
let count = 0;
const startTime = performance.now();

function execute() {
    if (count < iterations) {
        countPrimeNumbers();
        count++;
        setTimeout(execute, 0);
    } else {
        const endTime = performance.now();
        console.log(`Execution time of executing countPrimeNumbers ${iterations} times was ${endTime - startTime} milliseconds.`);
    }
}

execute();