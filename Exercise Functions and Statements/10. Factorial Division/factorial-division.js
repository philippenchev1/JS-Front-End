function factorialDivision(num1, num2) {
    function factorial(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    const factorial1 = factorial(num1);
    const factorial2 = factorial(num2);

    const divisionResult = (factorial1 / factorial2).toFixed(2);
    console.log(divisionResult);
}

factorialDivision(5, 2);  // Output: 60.00
factorialDivision(6, 2);  // Output: 360.00
