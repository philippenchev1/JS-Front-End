function pascalCaseSplitter(text) {
    let words = text.match(/[A-Z][a-z]*/g); // Match every word that starts with an uppercase letter followed by lowercase letters
    console.log(words.join(", "));
}


pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan"); 