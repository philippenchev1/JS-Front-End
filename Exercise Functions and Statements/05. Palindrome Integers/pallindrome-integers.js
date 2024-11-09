function checkPalindromeIntegers(numbers){

    numbers.forEach(number => {
        const numStr = number.toString();
        const reversedStr = numStr.split('').reverse().join('');

        if (numStr == reversedStr) {
            console.log('true');
            
        } else {
            console.log('false');
            
        }
    });

   
}

checkPalindromeIntegers([343, 1001, 123, 121]); // Output: true true false true