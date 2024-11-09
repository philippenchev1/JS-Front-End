function oddAndEvenSum(number){

    let oddNumberSum = 0;
    let evenNumberSum = 0;

    const digits = number.toString();

    for ( digit of digits) {
        const currentDigit = Number(digit);

        if (digit % 2 === 0) {
            evenNumberSum += currentDigit;
        } else {
            oddNumberSum += currentDigit;
        }
    }

    console.log(`Odd sum = ${oddNumberSum}, Even sum = ${evenNumberSum}`);
    
    
}

oddAndEvenSum(1000435);         // Output: Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234); // Output: Odd sum = 54, Even sum = 22