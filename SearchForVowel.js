function hasVowel(str) {
    return /[aeiouAEIOU]/.test(str);
}

function main(input) {
    const alpha = input.trim();
    const hasVowelFlag = hasVowel(alpha);

    if (hasVowelFlag) {
        console.log("The string contains a vowel.");
    } else {
        console.log("The string does not contain any vowel.");
    }
}

process.stdin.on('data', data => {
    main(data.toString());
});
