function calculate(a,b,c) {
    function sum(a,b) {
        return a + b;
    }

    function subtract(sumResult, c) {
        return sumResult - c;
        
    }

    const result = subtract(sum(a, b), c);
    console.log(result);
}

calculate(23,6,10);
calculate(1, 17, 30);   
calculate(42, 58, 100); 
  