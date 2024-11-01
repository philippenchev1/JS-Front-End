function calculatePrice(fruit, weigth, price) {
    let weightInKilograms = weigth / 1000;
    let money = weightInKilograms * price;



    console.log(`I need $${money.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

calculatePrice('mango', 2500, 1.80);