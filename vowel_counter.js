let input = process.argv[2];

function vowelCounter(str) {

    //declaring counter
    let count = 0;

    //checks that user provided a string
    if (!input || input.trim() === "") {
        console.log("provide a string you fool!")
    }
    else {
        input = input.toLowerCase();

        //checks for vowels + increases counter per vowel in string
        for (let char of str) {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                count++;
            }
        }

        //print number of count
        console.log(input + " has " + count + " vowels")
    }    
};

vowelCounter(input);