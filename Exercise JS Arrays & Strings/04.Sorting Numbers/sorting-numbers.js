function sortingNumbers(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b); // Sort the array in ascending order
    let result = [];
    
    while (sortedArr.length > 0) {
        // Take the smallest element from the start and push it
        result.push(sortedArr.shift());
        
        // Take the largest element from the end and push it (if any elements remain)
        if (sortedArr.length > 0) {
            result.push(sortedArr.pop());
        }
    }
    
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// Output: [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
