let maxNum = parseInt(prompt("Enter your max number"))
let num = Math.floor(Math.random()*maxNum + 1)

while (!maxNum) {
    maxNum=parseInt(prompt("Enter a valid number"))
}
let guess = prompt("Enter your guess")
trials = 1

while (parseInt(guess) !== num) {
    trials ++;
    if (guess === "q") {
        break;
    }
    else if (parseInt(guess) > num) {
        guess = prompt("You are higher,try again!")
    }
    else{
        guess = prompt("You are lower, try again!")
    }
}
console.log(`it took you ${trials} guesses`)