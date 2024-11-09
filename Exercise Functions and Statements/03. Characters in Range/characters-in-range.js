function charactersInRange(char1, char2) {
    const start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    const end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

charactersInRange('a', 'd'); // Output: b c
charactersInRange('#', ':'); // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
charactersInRange('C', '#'); // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
