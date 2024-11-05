function revealWords(words, sentence) {
    let wordList = words.split(", "); // Split the first parameter into individual words

    for (let word of wordList) {
        let template = "*".repeat(word.length);
        
        sentence = sentence.replace(template, word);
    }
    
    console.log(sentence);
}

revealWords("great", "softuni is ***** place for learning new programming languages"); 
// Output: softuni is great place for learning new programming languages

revealWords("great, learning", "softuni is ***** place for ******** new programming languages"); 
// Output: softuni is great place for learning new programming languages
