function analyzeText() {

    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    let vowels = 0;
    let consonants = 0;

    const cleanText = text.toLowerCase();

    for (let char of cleanText) {

        if (/[a-z]/.test(char)) {

            if ("aeiou".includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    const characters = text.replace(/\s/g, "").length;

    document.getElementById("vowels").textContent = vowels;
    document.getElementById("consonants").textContent = consonants;
    document.getElementById("characters").textContent = characters;


    // Palindrome Check

    const palindromeText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const reversedText =
        palindromeText.split("").reverse().join("");

    if (palindromeText === reversedText) {

        document.getElementById("palindrome").textContent =
            "Yes! The entered text is a palindrome.";

    } else {

        document.getElementById("palindrome").textContent =
            "No! The entered text is not a palindrome.";
    }


    // Repeated Characters

    const frequency = {};

    for (let char of cleanText) {

        if (/[a-z]/.test(char)) {

            frequency[char] =
                (frequency[char] || 0) + 1;
        }
    }

    let repeated = [];

    for (let char in frequency) {

        if (frequency[char] > 1) {

            repeated.push(
                char.toUpperCase() +
                " (" +
                frequency[char] +
                " times)"
            );
        }
    }

    if (repeated.length > 0) {

        document.getElementById("repeated").textContent =
            repeated.join(", ");

    } else {

        document.getElementById("repeated").textContent =
            "No repeated characters found.";
    }
}