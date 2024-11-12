function inventory(input) {
    const heroes = [];

    for (let heroInfo of input) {
        let [name, level, items] = heroInfo.split(" / ");
        level = Number(level); 
        items = items ? items.split(", ") : []; 

        heroes.push({ name, level, items });
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

// Example usage:
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
