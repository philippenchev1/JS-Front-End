function oddOccurrences(input) {
    const words = input.toLowerCase().split(" ");
    
    const wordCounts = {};
    for (const word of words) {
        if (!wordCounts[word]) {
            wordCounts[word] = 0;
        }
        wordCounts[word]++;
    }

    const oddOccurrenceWords = [];
    for (const [word, count] of Object.entries(wordCounts)) {
        if (count % 2 !== 0) {
            oddOccurrenceWords.push(word);
        }
    }

    console.log(oddOccurrenceWords.join(" "));
}

// Example usage:
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
