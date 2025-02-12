let input = process.argv[2];

function vowelCounter(str) {
    let count = 0;

    if (!input || input.trim() === "") {
        console.log("provide a string you fool!")
    }
    else {
        input = input.toLowerCase();
        for (let char of str) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                count++;
            }
        }
        console.log(input + " has " + count + " vowels")
    }    
};

vowelCounter(input);