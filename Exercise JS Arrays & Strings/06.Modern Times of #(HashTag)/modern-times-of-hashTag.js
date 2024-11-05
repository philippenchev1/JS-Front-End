function modernTimesOfHashTag(text) {
    // Split the text into words to analyze each one separately
    let words = text.split(" ");
    
    for (let word of words) {
        if (word.startsWith("#") && word.length > 1) { // Check if it starts with # and is longer than 1 character
            let hashtag = word.slice(1); // Remove the #
            
            if (/^[a-zA-Z]+$/.test(hashtag)) {
                console.log(hashtag);
            }
        }
    }
}


modernTimesOfHashTag("Nowadays everyone uses # to tag a #special word in #socialMedia"); 
// Output:
// special
// socialMedia

modernTimesOfHashTag("The symbol # is known #variously in English-speaking #regions as the #number sign");
// Output:
// variously
// regions
// number
