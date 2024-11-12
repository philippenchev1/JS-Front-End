function listEmployees(employees) {
    let emloyeeData = {};

    for (let employee of employees) {
        emloyeeData[employee] = employee.length;
    }
    

    for (let [name, personalNumber] of Object.entries(emloyeeData)) {
        console.log( `Name: ${name} -- Personal Number: ${personalNumber}` );
        
    }

}

// Example usage:
listEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
