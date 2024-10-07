function fibonacci(n) {
    // Handle the base cases
    if (n <= 0) return 0; // Fibonacci of 0 is 0
    if (n === 1) return 1; // Fibonacci of 1 is 1

    // Create an array to store Fibonacci numbers up to n
    const fib = new Array(n + 1);
    
    // Initialize the first two Fibonacci numbers
    fib[0] = 0; // F(0) = 0
    fib[1] = 1; // F(1) = 1

    // Fill the array with Fibonacci numbers using a loop
    for (let i = 2; i <= n; i++) {
        // Each Fibonacci number is the sum of the two preceding ones
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // Return the nth Fibonacci number
    return fib[n];
}

// Test the function
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(0));  // Output: 0
