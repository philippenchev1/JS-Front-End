function listOfNames(names) {
    // Sort the names alphabetically in ascending order
    names.sort((a, b) => a.localeCompare(b));
    
    // Print each name with a number
    names.forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    });
}


listOfNames(["John", "Bob", "Christina", "Ema"]);
// Output:
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John
