document.addEventListener("DOMContentLoaded", function () {
  // Enhanced cryptography object with proper two-way mapping and security features
  const devanagariCrypto = {
    // Complete character mapping
    charMaps: [
      { eng: "a", dev: "क" },
      { eng: "b", dev: "ख" },
      { eng: "c", dev: "ग" },
      { eng: "d", dev: "घ" },
      { eng: "e", dev: "ङ" },
      { eng: "f", dev: "च" },
      { eng: "g", dev: "छ" },
      { eng: "h", dev: "ज" },
      { eng: "i", dev: "झ" },
      { eng: "j", dev: "ञ" },
      { eng: "k", dev: "ट" },
      { eng: "l", dev: "ठ" },
      { eng: "m", dev: "ड" },
      { eng: "n", dev: "ढ" },
      { eng: "o", dev: "ण" },
      { eng: "p", dev: "त" },
      { eng: "q", dev: "थ" },
      { eng: "r", dev: "द" },
      { eng: "s", dev: "ध" },
      { eng: "t", dev: "न" },
      { eng: "u", dev: "प" },
      { eng: "v", dev: "फ" },
      { eng: "w", dev: "ब" },
      { eng: "x", dev: "भ" },
      { eng: "y", dev: "म" },
      { eng: "z", dev: "य" },
      { eng: " ", dev: "ऽ" },
      { eng: ".", dev: "।" },
      { eng: ",", dev: "्" },
      { eng: "!", dev: "?" },
      { eng: "0", dev: "०" },
      { eng: "1", dev: "१" },
      { eng: "2", dev: "२" },
      { eng: "3", dev: "३" },
      { eng: "4", dev: "४" },
      { eng: "5", dev: "५" },
      { eng: "6", dev: "६" },
      { eng: "7", dev: "७" },
      { eng: "8", dev: "८" },
      { eng: "9", dev: "९" },
    ],

    // Current mappings
    encryptMap: {},
    decryptMap: {},

    // Initialize mappings
    init() {
      // Create direct mappings
      this.encryptMap = {};
      this.decryptMap = {};

      this.charMaps.forEach((pair) => {
        this.encryptMap[pair.eng] = pair.dev;
        this.decryptMap[pair.dev] = pair.eng;
      });
    },

    // Encrypt text
    encrypt(text) {
      this.init();
      return text
        .toLowerCase()
        .split("")
        .map((char) => this.encryptMap[char] || char)
        .join("");
    },

    // Decrypt text - FIXED VERSION
    decrypt(text) {
      this.init();
      // First check if the text contains any Devanagari characters we can map
      const hasDevanagari = this.charMaps.some((pair) =>
        text.includes(pair.dev)
      );

      if (!hasDevanagari) {
        // If no mappable Devanagari characters found, return the original text
        return text;
      }

      // Otherwise proceed with decryption
      return text
        .split("")
        .map((char) => this.decryptMap[char] || char)
        .join("");
    },
  };

  // DOM elements
  const originalMessage = document.getElementById("originalMessage");
  const encryptedMessage = document.getElementById("encryptedMessage");
  const encryptedInput = document.getElementById("encryptedInput");
  const decryptedMessage = document.getElementById("decryptedMessage");
  const encryptBtn = document.getElementById("encryptBtn");
  const decryptBtn = document.getElementById("decryptBtn");
  const copyEncrypted = document.getElementById("copyEncrypted");
  const copyDecrypted = document.getElementById("copyDecrypted");

  // Event listeners
  encryptBtn.addEventListener("click", function () {
    const message = originalMessage.value;
    if (!message.trim()) {
      alert("Please enter a message to encrypt");
      return;
    }
    encryptedMessage.textContent = devanagariCrypto.encrypt(message);
  });

  decryptBtn.addEventListener("click", function () {
    const message = encryptedInput.value;
    if (!message.trim()) {
      alert("Please enter an encrypted message");
      return;
    }
    decryptedMessage.textContent = devanagariCrypto.decrypt(message);
  });

  copyEncrypted.addEventListener("click", function () {
    if (!encryptedMessage.textContent.trim()) {
      alert("No encrypted message to copy");
      return;
    }
    navigator.clipboard
      .writeText(encryptedMessage.textContent)
      .then(() => alert("Encrypted message copied!"))
      .catch((err) => console.error("Copy failed:", err));
  });

  copyDecrypted.addEventListener("click", function () {
    if (!decryptedMessage.textContent.trim()) {
      alert("No decrypted message to copy");
      return;
    }
    navigator.clipboard
      .writeText(decryptedMessage.textContent)
      .then(() => alert("Decrypted message copied!"))
      .catch((err) => console.error("Copy failed:", err));
  });
});
