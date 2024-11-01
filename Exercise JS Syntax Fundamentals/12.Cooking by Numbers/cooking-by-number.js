function cookingByNumbers(startNumber, ...operations) {
    let number = parseFloat(startNumber); 

    operations.forEach(operation => {
        switch (operation) {
            case 'chop':
                number /= 2; // Divide 
                break;
            case 'dice':
                number = Math.sqrt(number); // Square 
                break;
            case 'spice':
                number += 1; // Add 1
                break;
            case 'bake':
                number *= 3; // Multiply by 3
                break;
            case 'fillet':
                number *= 0.8; //  multiplying by 0.8
                break;
            default:
                console.log('Invalid operation');
                return;
        }
        console.log(number); 
    });
}