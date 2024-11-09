function printMatrix(n) {
    const row = Array(n).fill(n).join(' ');
    
    for (let i = 0; i < n; i++) {
        console.log(row);
    }
}

printMatrix(4);