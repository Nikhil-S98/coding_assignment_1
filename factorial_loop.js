let input = process.argv[2]

function factorial(num) {

    if (isNaN(num) || num < 0) {
        return "input must be a non-negative number!";
    }
    else {
        num = Math.floor(num);
        if (num == 0) {
            return 1;
        }
        else {
            for (let i = num - 1; i > 1; i--) {
                num = num * i;
            }
        }
        return num;
    }
}

console.log("the factorial of " + input + " is " + factorial(input))