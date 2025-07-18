# Cryptography
Devanagari Vault is a web app for encrypting/decrypting messages using a static substitution cipher, mapping English characters to Devanagari. Built with HTML, CSS, and JavaScript, it features a responsive, animated UI with input/output cards and copy functionality.
How It Works
This tool provides a basic encryption and decryption mechanism using a fixed character-substitution mapping between English and Devanagari characters.

>Key Features

Encrypts messages from English to Devanagari script.
Decrypts messages from Devanagari script back to English.
Allows copying of both encrypted and decrypted messages.
Features a real-time status indicator.
Includes visual strength meter (This seems to be a mismatch, as the vault app doesn't have a strength meter. This information belongs to the other info.txt about a password strength checker.)

>Technical Implementation

Frontend: HTML5/CSS3 with responsive design , Vanilla JavaScript (no frameworks).
Styling: Uses CSS variables for easy theming, and Font Awesome icons.
Cryptography: Implemented with a devanagariCrypto JavaScript object that contains charMaps for character substitution.

>Security Notes

The application runs 100% in your browser.
All processing happens locally, and no messages are sent to servers.
The encryption mapping in the current script.js is static; the stated "Seed changes every 2 minutes" feature for varying the encryption mapping is not yet functionally implemented.

>Usage Instructions

Type your secret message into the "Encrypt Message" field and click "Encrypt Message".
The encrypted message will appear in the "Encrypted Message" field, which you can then copy.
To decrypt, paste the encrypted message into the "Decrypt Message" field and click "Decrypt Message".
The original message will appear in the "Decrypted Message" field, which you can also copy.

>For Developers

Files included: index.html (Main structure) , styles.css (All styling) , script.js (Core functionality).
Customization:
Change colors using CSS variables in styles.css.
Modify or extend the character mappings within the devanagariCrypto.charMaps array in script.js.
