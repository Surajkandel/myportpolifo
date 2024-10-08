
const texts = [
    "Web Application developer",
    "Mobile Applicaton developer",
    "UI/UX Designer"
];

let index = 0;
let charIndex = 0;
const typingSpeed = 80; // Speed of typing in milliseconds
const pauseDuration = 1000; // Pause duration between texts in milliseconds
const typingElement = document.getElementById("typed_text");

function type() {
    if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(() => {
            erase();
        }, pauseDuration);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingSpeed);
    } else {
        // Move to the next text after erasing
        index = (index + 1) % texts.length; // Loop back to the first text
        setTimeout(type, typingSpeed); // Start typing again
    }
}

// Start the typing animation
type();
