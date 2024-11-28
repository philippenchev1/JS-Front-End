document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // Select the textareas and buttons
    const encodeTextarea = document.querySelector('#encode textarea');
    const decodeTextarea = document.querySelector('#decode textarea');
    const encodeButton = document.querySelector('#encode button');
    const decodeButton = document.querySelector('#decode button');

    // Add event listener for the encode button
    encodeButton.addEventListener('click', () => {
        // Get the message from the encode textarea
        const message = encodeTextarea.value;

        // Encode the message by shifting each character's ASCII code by 1
        const encodedMessage = message
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');

        // Set the encoded message in the decode textarea and clear the encode textarea
        decodeTextarea.value = encodedMessage;
        encodeTextarea.value = '';
    });

    // Add event listener for the decode button
    decodeButton.addEventListener('click', () => {
        // Get the encoded message from the decode textarea
        const encodedMessage = decodeTextarea.value;

        // Decode the message by shifting each character's ASCII code by -1
        const decodedMessage = encodedMessage
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
            .join('');

        // Set the decoded message in the decode textarea
        decodeTextarea.value = decodedMessage;
    });
}
