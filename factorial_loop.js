let input = process.argv[2]

// func to find factorial
function factorial(num) {

    //checks for int or float
    if (isNaN(num) || num < 0) {
        return "input must be a non-negative number!";
    }
    else {
        //returns 1 if input is 0
        num = Math.floor(num);
        if (num == 0) {
            return 1;
        }

        //calculates factorial of input
        else {
            for (let i = num - 1; i > 1; i--) {
                num = num * i;
            }
        }
        return num;
    }
}

//logging the answer
console.log("the factorial of " + input + " is " + factorial(input))