function sumDigits(number) {
    let sum = 0;
    let digits = number.toString(); 

    for (let digit of digits) {
        sum += Number(digit);
    }

    console.log(sum);
}

sumDigits(245678)