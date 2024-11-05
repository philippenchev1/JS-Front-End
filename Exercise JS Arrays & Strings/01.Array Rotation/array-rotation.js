function arrayRotation(arr, rotations) {
    let effectiveRotations = rotations % arr.length; // Avoid unnecessary full rotations

    for (let i = 0; i < effectiveRotations; i++) {
        let firstElement = arr.shift(); // Remove the first element
        arr.push(firstElement);         // Add it to the end
    }

    console.log(arr.join(" "));
}


arrayRotation([51, 47, 32, 61, 21], 2)