function wordsTracker(input) {
    const targetWords = input[0].split(" ");
    
   
    const wordCounts = {};
    for (const word of targetWords) {
        wordCounts[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        const word = input[i];
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        }
    }

    const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

// Example usage:
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 
    'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
