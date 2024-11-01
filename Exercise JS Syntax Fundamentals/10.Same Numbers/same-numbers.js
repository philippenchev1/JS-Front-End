function sameNumbers(number) {
    const digits = number.toString().split(""); 
    const firstDigit = digits[0];
    const allSame = digits.every(digit => digit === firstDigit); 
    const sum = digits.reduce((acc, digit) => acc + Number(digit), 0); 

    console.log(allSame);
    console.log(sum);
}


sameNumbers(2222222); 
sameNumbers(1234);   
