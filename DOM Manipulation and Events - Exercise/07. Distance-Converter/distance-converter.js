document.addEventListener('DOMContentLoaded', solve);

function result() {
    document.getElementById('convert').addEventListener('click', function () {
        // Get the input values
        let inputDistance = parseFloat(document.getElementById('inputDistance').value);
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        // Conversion rates to meters (for simplicity)
        const conversionToMeters = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };

        // Convert input distance to meters
        let distanceInMeters = inputDistance * conversionToMeters[inputUnits];

        // Convert meters to the output unit
        let convertedDistance = distanceInMeters / conversionToMeters[outputUnits];

        // Set the result in the outputDistance field
        document.getElementById('outputDistance').value = convertedDistance.toFixed(2);
    });
}
