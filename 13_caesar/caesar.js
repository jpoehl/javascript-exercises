const caesar = function (message, shift) {
    const lowercaseLetters = [];
    const uppercaseMessage = message.toUpperCase();
    const unicodesMessage = [];
    const unicodesEncrypted = [];
    const encryptedMessage = [];

    if (shift < 0) {
        shift = 26 + (shift % 26); //https://stackoverflow.com/questions/57294167/how-to-process-negative-shifts-in-caesars-cipher-javascript
    }

    // Find indices of lowercase letters, to make them lower case again after encrypting
    for (let i = 0; i < message.length; i++) {
        lowercaseLetters[i] = (message.charAt(i) === message.charAt(i).toLowerCase());
        unicodesMessage[i] = uppercaseMessage.charCodeAt(i);
    }

    // Perform encryption on uppercase message
    for (let i = 0; i < unicodesMessage.length; i++) {

        if (unicodesMessage[i] >= 65 && unicodesMessage[i] <= 90) {
            unicodesEncrypted[i] = 65 + (unicodesMessage[i] - 65 + shift) % 26;
        } else {
            unicodesEncrypted[i] = unicodesMessage[i];
        }
    }

    // Create encrypted message
    for (c of unicodesEncrypted) {
        encryptedMessage.push(String.fromCharCode(c));
    }


    for (let i = 0; i < lowercaseLetters.length; i++) {
        if (lowercaseLetters[i] === true) {
            encryptedMessage[i] = encryptedMessage[i].toLowerCase();
        } else {
            encryptedMessage[i] = encryptedMessage[i];
        }
    }

    return encryptedMessage.join("");

};

// Do not edit below this line
module.exports = caesar;
