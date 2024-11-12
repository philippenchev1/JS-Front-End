function storeProvision(currentStock, delivery) {
     let inventory = {};

     for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        inventory[product] = quantity;
        
     }

     for (let i = 0; i < delivery.length; i += 2) {
        let product = delivery[i];
        let quantity = Number(delivery[i + 1]);

        if (inventory[product] !== undefined) {
            inventory[product] += quantity;
        } else {
            inventory[product] = quantity;
        }
    }

    for (let product in inventory) {
        console.log(`${product} -> ${inventory[product]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);