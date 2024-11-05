function stringSubstring(word, text) {
    let lowerCaseWord = word.toLowerCase();
    let lowerCaseWords = text.toLowerCase().split(" "); // Разделяме текста на думи

    if (lowerCaseWords.includes(lowerCaseWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring("javascript", "JavaScript is the best programming language"); 
// Output: javascript

stringSubstring("python", "JavaScript is the best programming language");     
// Output: python not found!


