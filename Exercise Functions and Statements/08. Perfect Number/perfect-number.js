function isPerfectNumber(number) {
    if (number <= 1) {
        console.log("It's not so perfect.");
        return;
    }

    let sum = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isPerfectNumber(6);       
isPerfectNumber(28);      
isPerfectNumber(1236498);  
