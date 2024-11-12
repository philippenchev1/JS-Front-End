function parseTowns(input) {
   for( row of input) {
    let [town, latitude, longitude] = row.split(` | `);

    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let townData = {
        town:town,
        latitude:latitude,
        longitude:longitude,
    };

    console.log(townData);
    

   }
}

// Example usage:
parseTowns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);